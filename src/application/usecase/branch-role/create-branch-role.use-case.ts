import { BranchRole } from "../../../domain/entities/branch_role/branch-role.entity";
import { BranchRoleRepository } from "../../interface/repositories/branch-role-repository/i-branch-role-repository";
import { CreateBranchRoleDTO } from "../../interface/dtos/branch-roles/create-branch-role.dto";




export class CreateBranchRoleUseCase {

    constructor(
        private branchRoleRepository : BranchRoleRepository
    ){}


    async execute(data : CreateBranchRoleDTO): Promise<BranchRole>{

        const result : any = await this.branchRoleRepository.create(data);

        return result;

    }

}