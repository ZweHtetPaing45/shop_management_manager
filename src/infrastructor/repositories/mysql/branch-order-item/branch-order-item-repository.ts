import { BranchOrderItemRepository } from "../../../../application/interface/repositories/branch-order-item/i-branch-order-item-repository";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { CreateBranchOrderItemDTO } from "../../../../application/interface/dtos/branch-order-item/create-branch-order-item.dto";



const pool = Database.getInstance().getPool();


export class MySQLBranchOrderItemRepository implements BranchOrderItemRepository{

    async create(data: CreateBranchOrderItemDTO): Promise<void> {
        

        const values = data.items.map(item =>[
            data.branch_id,
            item.branch_inventory_id,
            item.quantity
        ]);

        console.log(values);

        const [createBranchOrder] : any = await pool.query(`insert into branch_order_item(branch_id,branch_inventory_id,quantity) values ?`,
            [values]
        );

        if(createBranchOrder.affectedRows === 0)throw new AppError('Can not create Branch Order Item',500);

    }

}