import { CreateBranchOrderItemUseCase } from "../../../../../application/usecase/branch-order-item/create-branch-order-item";
import { CreateBranchOrderItemDTO } from "../../../../../application/interface/dtos/branch-order-item/create-branch-order-item.dto";
import { BranchOrderItem } from "../../../../../domain/entities/branch-order-item/branch-order-item.entity";
import { Request,Response,NextFunction } from "express";
import { AppError } from "../../../../../application/errors/app-error";


export class BranchOrderItemController{

    constructor(
        private createBranchOrderItemUseCase : CreateBranchOrderItemUseCase
    ){}


    async create(req:Request,res:Response,next:NextFunction){

        try{

            const manager = (req as any).manager;

            const branch_id = manager.branch_id;

            const {items} = req.body;

            if(!items){
                throw new AppError('Enter Branch Order Item Data',400);
            }

            const data : CreateBranchOrderItemDTO = {
                branch_id,
                items
            }
            
            await this.createBranchOrderItemUseCase.execute(data);

                res.status(201).json({
                    success: true,
                    message: "Branch order created successfully",
                });

        }catch(error){
            next(error);
        }

    }

}