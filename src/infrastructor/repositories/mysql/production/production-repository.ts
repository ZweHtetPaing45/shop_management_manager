import { Production } from "../../../../domain/entities/production/production.entity";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { ProductionRepository } from "../../../../application/interface/repositories/production-repository/i-production-repository";
import { CreateProductionDTO } from "../../../../application/interface/dtos/productions/create-production.dto";



const pool = Database.getInstance().getPool();

export class MySQLProductionRepository implements ProductionRepository{


    async create(data: CreateProductionDTO): Promise<Production> {
        
        const [result] : any = await pool.query('insert into branch_production(branch_id,production_variant_id,name,planned_quantity,actual_quantity,damaged_quantity,duration) values (?,?,?,?,?,?,?)',
            [data.branch_id,data.production_variant_id,data.name,data.planned_quantity,data.actual_quantity,data.damaged_quantity,data.duration]
        );

        if(!result)throw new AppError('Can not create Branch Production',400);

        return new Production(result.insertId,data.branch_id,data.production_variant_id,data.name,data.planned_quantity,data.actual_quantity,data.damaged_quantity,data.duration)

    }


}