import { Ingredient } from "../../../../domain/entities/production/ingredient.entity";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { IngredientRepository } from "../../../../application/interface/repositories/production-repository/i-ingredient-repository";
import { CreateIngredientDTO } from "../../../../application/interface/dtos/productions/create-ingredient.dto";
import { InventoryRepository } from "../../../../application/interface/repositories/inventory-repository/i-inventory-repository";
import { UpdateQuantityInventoryDTO } from "../../../../application/interface/dtos/inventory/update-quantity-inventory.dto";
import { GetInventoryUseCase } from "../../../../application/usecase/inventory/get-inventory.use-case";
import { UpdateInventoryUseCase } from "../../../../application/usecase/inventory/update-inventory.use-case";

const pool = Database.getInstance().getPool();

export class MySQLIngredientRepository implements IngredientRepository {

    async create(data: CreateIngredientDTO): Promise<Ingredient> {
        
        const [result] : any = await pool.query('insert into branch_production_ingredients(branch_production_id,branch_inventory_id,unit,quantity) values (?,?,?,?)',
            [data.branch_production_id,data.branch_inventory_id,data.unit,data.quantity]
        );

        if(!result)throw new AppError('Can no create Production Ingredient',400);

        return new Ingredient(result.insertId,data.branch_production_id,data.branch_inventory_id,data.unit,data.quantity);

    }

}