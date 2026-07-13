import { MenuVariants } from "../../../../../domain/entities/menu/variants/variants.entity";
import { createLogger } from "../../../../logger/create-logger";
import { MenuVariantRepository } from "../../../../../application/interface/repositories/menu-repository/variants/i-variants-repository";
import { MenuVariantDto } from "../../../../../application/interface/dtos/menu/variants/create-variants.dto";
import { Database } from "../../../../database/mysql";
import { AppError } from "../../../../../application/errors/app-error";


const pool = Database.getInstance().getPool();

export class MySQLMenuVariantRepository implements MenuVariantRepository{

    async create(data: MenuVariantDto): Promise<MenuVariants> {
        
        const [result] : any = await pool.query(`insert into menu_variants(menu_id,size,quantity,price) values (?,?,?,?)`,
            [data.menu_id,data.size,data.quantity,data.price]
        );

        if(!result)throw new AppError("Create Menu Error",400);

        return new MenuVariants(result.insertId,data.menu_id,data.size,data.price,data.quantity);
    }

}