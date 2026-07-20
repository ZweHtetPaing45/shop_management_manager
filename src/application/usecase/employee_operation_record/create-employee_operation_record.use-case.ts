import { EmployeeOperationRecord } from "../../../domain/entities/employee_operation_record/employee-operation-records.entity";
import { EmployeeOperationRecordRepository } from "../../interface/repositories/employee_operation_record/i-employee_operation_record-repository";
import { CreateEmployeeOperationRecordDTO } from "../../interface/dtos/employee_operation_record/create-employee_operation_record.dto";




export class CreateEmployeeOperationRecordUseCase{

    constructor(
        private employeeOperationRecordRepository : EmployeeOperationRecordRepository
    ){}

    async execute(data : CreateEmployeeOperationRecordDTO): Promise<EmployeeOperationRecord>{

        const result : any = await this.employeeOperationRecordRepository.create(data);

        return result;
        
    }

}