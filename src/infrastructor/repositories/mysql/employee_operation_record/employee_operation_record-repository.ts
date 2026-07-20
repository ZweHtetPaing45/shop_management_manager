import { EmployeeOperationRecord } from "../../../../domain/entities/employee_operation_record/employee-operation-records.entity";
import { EmployeeOperationRecordRepository } from "../../../../application/interface/repositories/employee_operation_record/i-employee_operation_record-repository";
import { CreateEmployeeOperationRecordDTO } from "../../../../application/interface/dtos/employee_operation_record/create-employee_operation_record.dto";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";



const pool = Database.getInstance().getPool();


export class MySQLEmployeeOperationRecordRepository implements EmployeeOperationRecordRepository{


    async create(data: CreateEmployeeOperationRecordDTO): Promise<EmployeeOperationRecord> {
        
        const [createRecord] : any = await pool.query(`
                insert into employee_operation_records(branch_employee_id,bonus_amount,fine_amount,leave_days,off_days,employment_status,manager_remarks) values
                (?,?,?,?,?,?,?)
            `,[data.branch_employee_id,data.bonus_amount,data.fine_amount,data.leave_days,data.off_days,data.employment_status,data.manager_remarks]);

        if(createRecord.affectedRows === 0)throw new AppError('Can no Create Employee Operation Record',500);

        return new EmployeeOperationRecord(createRecord.insertId,data.branch_employee_id,data.bonus_amount,data.fine_amount,data.leave_days,data.off_days,data.employment_status,data.manager_remarks);
    }

}