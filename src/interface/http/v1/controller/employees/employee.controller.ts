import { Employees } from "../../../../../domain/entities/employees/branch-employees.entity";
import {Request,Response,NextFunction} from 'express';
import { CreateEmployeeDTO } from "../../../../../application/interface/dtos/employee/create-branch-employee.dto";
import { CreateEmployeeUseCase } from "../../../../../application/usecase/employees/create-branch-employee.use-case";
import { AppError } from "../../../../../application/errors/app-error";


export class EmployeeController{

    constructor(
        private createEmployeeUseCase : CreateEmployeeUseCase
    ){}


    async create(req:Request,res:Response,next:NextFunction){

        try{

            const manager = (req as any).manager;

            const branch_id = manager.branch_id;

            const {
                role_id,full_name,nrc_number,date_of_birth,
                gender,age,phone_number,email,highest_education,
                address,last_employment_detail,employment_start_date,
                contract_type,password
            } = req.body;

            if(!role_id || !full_name || !nrc_number || !date_of_birth || !gender || !age || !phone_number || !email || !highest_education || !address || !last_employment_detail || !employment_start_date || !contract_type || !password){
                throw new AppError('Enter Employee Data',500);
            }

            const data : CreateEmployeeDTO = {

                branch_id,
                role_id,
                full_name,
                nrc_number,
                date_of_birth,
                gender,
                age,
                phone_number,
                email,
                highest_education,
                address,
                last_employment_detail,
                employment_start_date,
                contract_type,
                password

            }

            const result : any = await this.createEmployeeUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Employee created successfully",
                    result
                });

            }else{
                res.status(400).json({
                    success: false,
                    message: "Failed to create Employee"
                });
                
            }

        }catch(error){
            next(error);
        }

    }

}