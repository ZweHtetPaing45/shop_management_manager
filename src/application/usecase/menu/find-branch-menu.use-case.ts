import { AppError } from "../../errors/app-error";
import { MenuRepository } from "../../interface/repositories/menu-repository/i-menu-repository";


export class FindBranchMenuUseCase{

    constructor(
        private menuRepository: MenuRepository
    ){}


    async execute(branch_id: number){

        const result = await this.menuRepository.branchAllMenu(branch_id);

        if(!result){
            throw new AppError('Branch not fount',404);
        }

        return result;

    }

}