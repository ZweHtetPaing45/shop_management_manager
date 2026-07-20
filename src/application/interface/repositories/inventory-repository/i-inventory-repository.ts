import { UpdateQuantityInventoryDTO } from "../../dtos/inventory/update-quantity-inventory.dto";
import { Inventory } from "../../../../domain/entities/inventory/inventory.entity";

export interface InventoryRepository{
    
    getById(id: number): Promise<Inventory>;
    updateStock(data : UpdateQuantityInventoryDTO): Promise<Inventory>;

}