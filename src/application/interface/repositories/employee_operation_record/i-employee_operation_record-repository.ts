import { EmployeeOperationRecord } from "../../../../domain/entities/employee_operation_record/employee-operation-records.entity";
import { CreateEmployeeOperationRecordDTO } from "../../dtos/employee_operation_record/create-employee_operation_record.dto";



export interface EmployeeOperationRecordRepository{

    create(data : CreateEmployeeOperationRecordDTO): Promise<EmployeeOperationRecord>;

}