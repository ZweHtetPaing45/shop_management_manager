import { Menu } from "../../../../domain/entities/menu/menu.entity";
import { MenuRepository } from "../../../../application/interface/repositories/menu-repository/i-menu-repository";
import { Database } from "../../../database/mysql";
import { MenuDto } from "../../../../application/interface/dtos/menu/create-menu.dto";
import { uploadImage } from "../../../../services/image.service";
import { AppError } from "../../../../application/errors/app-error";
import { BranchResponseDTO } from "../../../../application/interface/dtos/branch/branch-response.dto";


const pool = Database.getInstance().getPool();

export class MySQLMenuRepository implements MenuRepository{

    async create(data: MenuDto): Promise<Menu> {

        let menu_image_url : string = "";
        let menu_public_id : string = "";

        if(data.file){
            const imageResult = await uploadImage(data.file,'menu_image');
            menu_image_url = imageResult.data.image_url;
            menu_public_id = imageResult.data.public_id;
        }
        
        const [result] : any = await pool.query(`insert into menu (category_id,name,menu_image_url,menu_public_id,price,size,quantity) values (?,?,?,?,?,?,?)`,
            [data.category_id,data.name,menu_image_url,menu_public_id,data.price,data.size,data.quantity]
        );

        if(!result)throw new AppError("Create Menu Error",400);

        return new Menu(result.insertId,data.category_id,data.name,menu_image_url,menu_public_id,data.price,data.size,data.quantity,null);
    }

    async branchAllMenu(branch_id: number): Promise<BranchResponseDTO|null> {
        
        const [rows] : any = await pool.query(`
            SELECT JSON_OBJECT(
            'id', b.id,
            'name', b.name,
            'categories',
            COALESCE(
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', c.id,
                            'name', c.name,
                            'menus',
                            COALESCE(
                                (
                                    SELECT JSON_ARRAYAGG(
                                        JSON_OBJECT(
                                            'id', m.id,
                                            'name', m.name,
                                            'menu_image_url', m.menu_image_url,
                                            'menu_public_id', m.menu_public_id,
                                            'price', m.price,
                                            'size', m.size,
                                            'quantity', m.quantity,
                                            'status', m.status,
                                            'variants',
                                            COALESCE(
                                                (
                                                    SELECT JSON_ARRAYAGG(
                                                        JSON_OBJECT(
                                                            'id', mv.id,
                                                            'size', mv.size,
                                                            'price', mv.price,
                                                            'quantity', mv.quantity
                                                        )
                                                    )
                                                    FROM menu_variants mv
                                                    WHERE mv.menu_id = m.id
                                                ),
                                                JSON_ARRAY()
                                            )
                                        )
                                    )
                                    FROM menu m
                                    WHERE m.category_id = c.id
                                ),
                                JSON_ARRAY()
                            )
                        )
                    )
                    FROM category c
                    WHERE c.branch_id = b.id
                ),
                JSON_ARRAY()
            )
        ) AS result
        FROM branchs b
        WHERE b.id = ?;
            `,[branch_id]);


        return (rows as any[])[0].result;

    }

}