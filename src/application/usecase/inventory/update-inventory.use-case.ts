import { Inventory } from "../../../domain/entities/inventory/inventory.entity";
import { InventoryRepository } from "../../interface/repositories/inventory-repository/i-inventory-repository";
import { UpdateQuantityInventoryDTO } from "../../interface/dtos/inventory/update-quantity-inventory.dto";

export class UpdateInventoryUseCase{

    constructor(
        private inventoryRepository : InventoryRepository
    ){}


    async execute(data : UpdateQuantityInventoryDTO): Promise<Inventory>{

        const update_quantity = await this.inventoryRepository.updateStock(data);

        return update_quantity;

    }

}