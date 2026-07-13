import { Manager } from "../../../../../domain/entities/manager/manager.entity";
import { LoginManagerUseCase } from "../../../../../application/usecase/manager/login-manager.use-case";
import { LoginManagerDto } from "../../../../../application/interface/dtos/manager/login-manager.dto";
import { Request,Response,NextFunction } from "express";
import { AppError } from "../../../../../application/errors/app-error";


export class ManagerController{


    constructor(
        private loginManageerUseCase: LoginManagerUseCase
    ){}


    async login(req : Request,res : Response,next: NextFunction){

        try{

            const {email,password} = req.body;

            if(!email || !password)throw new AppError("Email and password are required",400);

            const data : LoginManagerDto = {email,password};

            const token = await this.loginManageerUseCase.execute(data);

            if(token){
                res.status(200).json({
                    success: true,
                    message: "Manager Login Successfully",
                    token
                })
            }else{
                res.status(500).json({
                    success: false,
                    message: "Can not login"
                })
            }

        }catch(error){
            next(error);
        }

    }

}