import { BranchRole } from "../../../../../domain/entities/branch_role/branch-role.entity";
import { CreateBranchRoleUseCase } from "../../../../../application/usecase/branch-role/create-branch-role.use-case";
import { AppError } from "../../../../../application/errors/app-error";
import {Request,Response,NextFunction} from 'express';
import { CreateBranchRoleDTO } from "../../../../../application/interface/dtos/branch-roles/create-branch-role.dto";



export class BranchRoleController{

    constructor(
        private createBranchRoleUseCase : CreateBranchRoleUseCase
    ){}


    async create(req: Request,res: Response,next: NextFunction){

        try{

            const {job_title,job_description,sop_assignment,policy_binding,issued_supplies,basic_salary,working_days_per_month} = req.body;

            if(!job_title || !job_description || !sop_assignment || !policy_binding || !issued_supplies || !basic_salary || !working_days_per_month){
                throw new AppError('Enter Branch Role Data',500);
            }

            const data : CreateBranchRoleDTO = {
                job_title,
                job_description,
                sop_assignment,
                policy_binding,
                issued_supplies,
                basic_salary,
                working_days_per_month
            }

            const result : any = await this.createBranchRoleUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Branch role created successfully",
                    result
                });

            }else{
                res.status(400).json({
                    success: false,
                    message: "Failed to create Branch role"
                });
                
            }

        }catch(error){
            next(error);
        }

    }

}