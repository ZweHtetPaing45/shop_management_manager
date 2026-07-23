import { BranchOrderItem } from "../../../../domain/entities/branch-order-item/branch-order-item.entity";
import { CreateBranchOrderItemDTO } from "../../dtos/branch-order-item/create-branch-order-item.dto";


export interface BranchOrderItemRepository{

    create(data : CreateBranchOrderItemDTO): Promise<void>;

}