import { Employees } from "../../../../domain/entities/employees/branch-employees.entity";
import { EmployeeRepository } from "../../../../application/interface/repositories/employees/i-branch-employee-repository";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { CreateEmployeeDTO } from "../../../../application/interface/dtos/employee/create-branch-employee.dto";



const pool = Database.getInstance().getPool();

export class MySQLEmployeeRepository implements EmployeeRepository{

    async create(data: CreateEmployeeDTO): Promise<Employees> {
        
        const [createEmployee] : any = await pool.query(`
            insert into branch_employees
             (branch_id,role_id,full_name,nrc_number,date_of_birth,gender,age,phone_number,email,highest_education,address,last_employment_detail,employment_start_date,contract_type,password) values
             (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,[data.branch_id,data.role_id,data.full_name,data.nrc_number,data.date_of_birth,data.gender,data.age,data.phone_number,data.email,data.highest_education,data.address,data.last_employment_detail,data.employment_start_date,data.contract_type,data.password]);

        if(createEmployee.affectedRows === 0)throw new AppError("Can not create Employee",500);

        return new Employees(createEmployee.insertId,data.branch_id,data.role_id,data.full_name,data.nrc_number,data.date_of_birth,data.gender,data.age,data.phone_number,data.email,data.highest_education,data.address,data.last_employment_detail,data.employment_start_date,data.contract_type,null);

    }

}