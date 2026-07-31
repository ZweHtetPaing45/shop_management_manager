import { AppError } from "../../../../../application/errors/app-error";
import { createLogger } from "../../../../../infrastructor/logger/create-logger";
import { CreateMenuUseCase } from "../../../../../application/usecase/menu/create-menu.use-case";
import { Request,Response,NextFunction } from "express";
import { MenuDto } from "../../../../../application/interface/dtos/menu/create-menu.dto";
import { FindBranchMenuUseCase } from "../../../../../application/usecase/menu/find-branch-menu.use-case";


const logger = createLogger();

export class MenuController{

    constructor(
        private createMenUseCase : CreateMenuUseCase,
        private findBranchMenuUseCase : FindBranchMenuUseCase
    ){}

    async create(req: Request,res: Response,next: NextFunction){

        try{

            let {category_id,name,price,size,quantity} = (req as any).body;

            if(!category_id || !name || !quantity)throw new AppError("Enter the input Data Error",500);

            const file = (req as any).file;

            if(!size || !price){
                size = null;
                price = null;
            }


            if(!file)throw new AppError('Enter image file Error',500);

            const data : MenuDto = {
                category_id,
                name,
                file,
                price,
                size,
                quantity
            }

            const result :any = await this.createMenUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Create Menu Successfully",
                    result
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Can not fail create Menu"
                })
            }

        }catch(error){
            next(error);
        }

    }

    async getAllMenu(req:Request,res:Response,next:NextFunction){

        try{

            const manager = (req as any).manager;

            const branch_id = manager.branch_id;

            const result : any = await this.findBranchMenuUseCase.execute(branch_id);

            return res.status(201).json({
                    success: true,
                    message: "List Menu Data",
                    result : result
                });

        }catch(error){
            next(error)
        }

    }
    

}