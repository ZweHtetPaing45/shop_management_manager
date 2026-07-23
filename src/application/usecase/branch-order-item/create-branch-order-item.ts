import { BranchOrderItem } from "../../../domain/entities/branch-order-item/branch-order-item.entity";
import { BranchOrderItemRepository } from "../../interface/repositories/branch-order-item/i-branch-order-item-repository";
import { AppError } from "../../errors/app-error";
import { CreateBranchOrderItemDTO } from "../../interface/dtos/branch-order-item/create-branch-order-item.dto";


export class CreateBranchOrderItemUseCase {

    constructor(
        private branchOrderItemRepository : BranchOrderItemRepository
    ){}


    async execute(data : CreateBranchOrderItemDTO): Promise<void>{

        await this.branchOrderItemRepository.create(data);

    }

}