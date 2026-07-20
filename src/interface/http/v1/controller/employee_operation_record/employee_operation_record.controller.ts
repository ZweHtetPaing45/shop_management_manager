import {Request,Response,NextFunction} from 'express';
import { CreateEmployeeOperationRecordUseCase } from '../../../../../application/usecase/employee_operation_record/create-employee_operation_record.use-case';
import { CreateEmployeeOperationRecordDTO } from '../../../../../application/interface/dtos/employee_operation_record/create-employee_operation_record.dto';
import { AppError } from '../../../../../application/errors/app-error';


export class EmployeeOperationRecordController{

    constructor(
        private createEmployeeOperationRecordUseCase : CreateEmployeeOperationRecordUseCase
    ){}


    async Create(req:Request,res:Response,next:NextFunction){

        try{

            const {branch_employee_id,bonus_amount,fine_amount,leave_days,off_days,employment_status,manager_remarks} = req.body;

            if(!branch_employee_id || !bonus_amount || !fine_amount || !leave_days || !off_days || !employment_status || !manager_remarks){
                throw new AppError('Enter employee operation record data',500);
            }

            const data : CreateEmployeeOperationRecordDTO ={
                branch_employee_id,
                bonus_amount,
                fine_amount,
                leave_days,
                off_days,
                employment_status,
                manager_remarks
            }

            const result : any = await this.createEmployeeOperationRecordUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "employee operation record created successfully",
                    result
                });
            }else{
                res.status(400).json({
                    success: false,
                    message: "Failed to create employee operation record"
                });
            }

        }catch(error){
            next(error);
        }

    }

}