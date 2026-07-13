import { Menu } from "../../../../domain/entities/menu/menu.entity";
import { MenuRepository } from "../../../../application/interface/repositories/menu-repository/i-menu-repository";
import { Database } from "../../../database/mysql";
import { MenuDto } from "../../../../application/interface/dtos/menu/create-menu.dto";
import { uploadImage } from "../../../../services/image.service";
import { AppError } from "../../../../application/errors/app-error";

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

}