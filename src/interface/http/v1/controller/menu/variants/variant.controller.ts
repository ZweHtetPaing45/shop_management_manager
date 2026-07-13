import { MenuVariantDto } from "../../../../../../application/interface/dtos/menu/variants/create-variants.dto";
import { MenuVariants } from "../../../../../../domain/entities/menu/variants/variants.entity";
import { CreateMenuVariantUseCase } from "../../../../../../application/usecase/menu/variants/create-variants.use-case";
import { Request,Response,NextFunction } from "express";
import { AppError } from "../../../../../../application/errors/app-error";

export class MenuVariantController{

    constructor(
        private createMenuVariantsUseCase : CreateMenuVariantUseCase
    ){}


    async create(req: Request,res: Response,next: NextFunction){

        try{

            const {menu_id,size,price,quantity} = (req as any).body;

            if(!menu_id || !size || !price || !quantity)throw new AppError('Enter data Error',500);

            const data : MenuVariantDto = {
                menu_id,
                size,
                price,
                quantity
            }

            const result : any = await this.createMenuVariantsUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Create Menu Variants Successfully",
                    result
                });
            }else{
                res.status(400).json({
                    success: false,
                    message: "Can not fail create Menu Variants"
                });
            }

        }catch(error){
            next(error);
        }
    }
}