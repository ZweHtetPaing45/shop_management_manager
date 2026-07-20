import { Production } from "../../../../../domain/entities/production/production.entity";
import { Ingredient } from "../../../../../domain/entities/production/ingredient.entity";
import { CreateProductionDTO } from "../../../../../application/interface/dtos/productions/create-production.dto";
import { CreateIngredientDTO } from "../../../../../application/interface/dtos/productions/create-ingredient.dto";
import { CreateProductionUseCase } from "../../../../../application/usecase/production/create-production.use-case";
import { CreateIngredientUseCase } from "../../../../../application/usecase/production/create-ingredient.use-case";
import { Request,Response,NextFunction } from "express";
import { AppError } from "../../../../../application/errors/app-error";



export class ProductionController{

    constructor(
        private createProductionUseCase : CreateProductionUseCase,
        private createIngredientUseCase : CreateIngredientUseCase
    ){}

    async create(req:Request,res:Response,next:NextFunction){

        try{

            const manager = (req as any).manager;

            const {production_variant_id,name,planned_quantity,actual_quantity,damaged_quantity,duration} = req.body;

            if(!production_variant_id || !name || !planned_quantity !|| !actual_quantity || !damaged_quantity || !duration)throw new AppError("Enter Production Data", 400);

            const data : CreateProductionDTO = {
                branch_id : manager.branch_id,
                production_variant_id,
                name,
                planned_quantity,
                actual_quantity,
                damaged_quantity,
                duration
            }

            const production = await this.createProductionUseCase.execute(data);

            let ingredients: any[] = [];

            if (req.body.ingredients) {
                ingredients =
                    typeof req.body.ingredients === "string"
                        ? JSON.parse(req.body.ingredients)
                        : req.body.ingredients;
            }

            const createdIngredients = [];

            if (Array.isArray(ingredients) && ingredients.length > 0) {
                
                for (const item of ingredients) {
                    const ingredientData: CreateIngredientDTO = {
                        branch_production_id: Number(item.branch_production_id),
                        branch_inventory_id: Number(item.branch_inventory_id),
                        unit: item.unit,
                        quantity: Number(item.quantity)
                    };

                    const ingredient: any = await this.createIngredientUseCase.execute(ingredientData);

                    createdIngredients.push(ingredient);
                }
            }

            return res.status(201).json({
                success: true,
                message: "Production created successfully",
                data: {
                    production,
                    ingredients: createdIngredients,
                },
            });

        }catch(error){
            next(error);
        }
        
    }

}