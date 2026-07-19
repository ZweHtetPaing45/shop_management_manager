import { Manager } from "../../../../domain/entities/manager/manager.entity";
import { ManagerRepository } from "../../../../application/interface/repositories/manager-repository/i-manager-repository";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";

const pool = Database.getInstance().getPool();

export class MySQLManagerRepository implements ManagerRepository{


    async findByEmail(email: string): Promise<Manager | null> {
        
        const [rows] : any = await pool.query('select * from employee where email = ?',[email]);

        if(!rows)throw new AppError('Can not found account',400);

        if(rows.length === 0){
            return null;
        }

        const row = rows[0];

        return new Manager(row.id,row.email,row.role_id,row.password,row.branch_id);

    }

    async findById(id: number): Promise<Manager | null> {
        
        const [rows] : any = await pool.query('select * from employee where id = ?',[id]);

        if(!rows)throw new AppError('Can not found account',400);

        if(rows.length === 0){
            return null;
        }

        const row = rows[0];

        return new Manager(row.id,row.email,row.role_id,null,row.branch_id);

    }

}