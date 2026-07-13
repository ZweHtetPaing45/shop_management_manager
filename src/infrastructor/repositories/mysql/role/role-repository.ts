import { AppError } from "../../../../application/errors/app-error";
import { RoleRepository } from "../../../../application/interface/repositories/role-repository/i-role-repository";
import { Role } from "../../../../domain/entities/role/role.entity";
import { Database } from "../../../database/mysql";

const pool = Database.getInstance().getPool();

export class MySQLRoleRepository implements RoleRepository{

    async findById(id: number): Promise<Role> {
        
        const [rows] : any = await pool.query('select * from roles where id = ?',[id]);

        if(rows.length === 0)throw new AppError('Can not found',400);

        const row = rows[0];

        return new Role(row.id,row.name);
    }

}