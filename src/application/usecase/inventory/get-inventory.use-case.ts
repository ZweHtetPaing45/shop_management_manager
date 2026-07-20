import { Inventory } from "../../../domain/entities/inventory/inventory.entity";
import { InventoryRepository } from "../../interface/repositories/inventory-repository/i-inventory-repository";



export class GetInventoryUseCase{

    constructor(
        private inventoryRepository : InventoryRepository
    ){}


    async execute(id : number): Promise<Inventory>{

        const result : any = await this.inventoryRepository.getById(id);

        return result;

    }

}