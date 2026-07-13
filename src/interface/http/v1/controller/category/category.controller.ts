import { Categories } from "../../../../../domain/entities/category/category.entity";
import { CreateCategoryUseCase } from "../../../../../application/usecase/category/create-category.use-case";
import { AppError } from "../../../../../application/errors/app-error";
import {Request,Response,NextFunction} from 'express';
import { CategoryDto } from "../../../../../application/interface/dtos/category/create-category.dto";



export class CategoryController{

    constructor(
        private createCategoryUseCase: CreateCategoryUseCase
    ){}


    async create(req: Request,res: Response,next: NextFunction){

        try{

            const {name,branch_id} = req.body;

            if(!name || !branch_id)throw new AppError("Email and password are required",400);

            const data : CategoryDto = {name,branch_id};

            const result : any = await this.createCategoryUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Category created successfully",
                    result});
            }else{
                res.status(400).json({
                    success: false,
                    message: "Failed to create category"
                });
            }

        }catch(error){
            next(error);
        }

    }

}