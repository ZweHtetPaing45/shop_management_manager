import { BranchRole } from "../../../../domain/entities/branch_role/branch-role.entity";
import { CreateBranchRoleDTO } from "../../dtos/branch-roles/create-branch-role.dto";



export interface BranchRoleRepository{

    create(data : CreateBranchRoleDTO): Promise<BranchRole>;

}