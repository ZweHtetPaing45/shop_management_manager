import { Categories } from "../../../../domain/entities/category/category.entity";
import { CategoryRepository } from "../../../../application/interface/repositories/category-repository/i-category-repository";
import { CategoryDto } from "../../../../application/interface/dtos/category/create-category.dto";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";

const pool = Database.getInstance().getPool();

export class MySQLCategoryRepository implements CategoryRepository{


    async create(data: CategoryDto): Promise<Categories> {
        
        const [result] : any = await pool.query(`insert into category (branch_id,name) values (?,?) `,[data.branch_id,data.name]);

        if(!result)throw new AppError("Can not Category Error",400);

        return new Categories(result.insertId,data.branch_id,data.name);

    }

}