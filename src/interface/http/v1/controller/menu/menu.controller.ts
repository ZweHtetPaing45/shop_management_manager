import { AppError } from "../../../../../application/errors/app-error";
import { Menu } from "../../../../../domain/entities/menu/menu.entity";
import { createLogger } from "../../../../../infrastructor/logger/create-logger";
import { CreateMenuUseCase } from "../../../../../application/usecase/menu/create-menu.use-case";
import { Request,Response,NextFunction } from "express";
import { MenuDto } from "../../../../../application/interface/dtos/menu/create-menu.dto";


const logger = createLogger();

export class MenuController{

    constructor(
        private createMenUseCase : CreateMenuUseCase
    ){}

    async create(req: Request,res: Response,next: NextFunction){

        try{

            const {category_id,name,price,size,quantity} = (req as any).body;

            if(!category_id || !name || !price || !size || !quantity)throw new AppError("Enter the input Data Error",500);

            const file = (req as any).file;

            if(!file)throw new AppError('Enter imate file Error',500);

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

}