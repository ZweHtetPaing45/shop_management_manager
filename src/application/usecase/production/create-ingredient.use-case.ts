import { Ingredient } from "../../../domain/entities/production/ingredient.entity";
import { AppError } from "../../errors/app-error";
import { CreateIngredientDTO } from "../../interface/dtos/productions/create-ingredient.dto";
import { IngredientRepository } from "../../interface/repositories/production-repository/i-ingredient-repository";
import { InventoryRepository } from "../../interface/repositories/inventory-repository/i-inventory-repository";
import { UpdateQuantityInventoryDTO } from "../../interface/dtos/inventory/update-quantity-inventory.dto";

export class CreateIngredientUseCase{

    constructor(
        private ingredientRepository : IngredientRepository,
        private inventoryRepository : InventoryRepository
    ){}


    async execute(data : CreateIngredientDTO): Promise<Ingredient>{

        const createIngredient = await this.ingredientRepository.create(data);

        if(!createIngredient)throw new AppError('Failed to create production', 500);

        const quantity = createIngredient.quantity;

        console.log(quantity);

        const total_quantity = await this.inventoryRepository.getById(data.branch_inventory_id);

        console.log(total_quantity.stock_quantity);

        const sub = total_quantity.stock_quantity - quantity;

        const id = createIngredient.branch_inventory_id;

        console.log(sub);

        const data2 : UpdateQuantityInventoryDTO = {
            id : Number(id),
            quantity : Number(sub)
        }

        await this.inventoryRepository.updateStock(data2);

        return createIngredient;

    }

}