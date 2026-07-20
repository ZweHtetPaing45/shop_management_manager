import { BranchRole } from "../../../../domain/entities/branch_role/branch-role.entity";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { BranchRoleRepository } from "../../../../application/interface/repositories/branch-role-repository/i-branch-role-repository";
import { CreateBranchRoleDTO } from "../../../../application/interface/dtos/branch-roles/create-branch-role.dto";



const pool = Database.getInstance().getPool();

export class MySQLBranchRoleRepository implements BranchRoleRepository{

    async create(data: CreateBranchRoleDTO): Promise<BranchRole> {
        
        const [createBranchRole] : any = await pool.query(`
                insert into branch_roles(job_title,job_description,sop_assignment,policy_binding,issued_supplies,basic_salary,working_days_per_month) values
                (?,?,?,?,?,?,?)
            `,[data.job_title,data.job_description,data.sop_assignment,data.policy_binding,data.issued_supplies,data.basic_salary,data.working_days_per_month]);

        if(createBranchRole.affectedRows === 0)throw new AppError('Can not create branch role',500);

        return new BranchRole(createBranchRole.insertId,data.job_title,data.job_description,data.sop_assignment,data.policy_binding,data.issued_supplies,data.basic_salary,data.working_days_per_month);
    }

}