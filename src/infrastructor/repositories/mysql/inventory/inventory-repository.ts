import { Inventory } from "../../../../domain/entities/inventory/inventory.entity";
import { InventoryRepository } from "../../../../application/interface/repositories/inventory-repository/i-inventory-repository";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { UpdateQuantityInventoryDTO } from "../../../../application/interface/dtos/inventory/update-quantity-inventory.dto";


const pool = Database.getInstance().getPool();

export class MySQLInventoryRepository implements InventoryRepository{

    async updateStock(data: UpdateQuantityInventoryDTO): Promise<Inventory> {

        console.log(data.quantity);
        console.log(data.id);
        
            const [update_quantity] : any = await pool.query('update branch_inventory set stock_quantity = ? where id = ?',[data.quantity,data.id]);
        
            if(update_quantity.affectedRows === 0)throw new AppError('Can no update branch inventory',500);

            return new Inventory(data.id,null,null,null,null,data.quantity)
    }

    async getById(id: number): Promise<Inventory> {
        
        const [rows] : any = await pool.query('select * from branch_inventory where id = ?',[id]);

        const row = rows[0];

        return new Inventory(row.id,row.owner_inventory,row.branch_id,row.name,row.unit,row.stock_quantity);

    }

}