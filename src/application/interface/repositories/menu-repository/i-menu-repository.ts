import { Menu } from "../../../../domain/entities/menu/menu.entity";
import { MenuDto } from "../../dtos/menu/create-menu.dto";
import { BranchResponseDTO } from "../../dtos/branch/branch-response.dto";

export interface MenuRepository{

    create(data : MenuDto): Promise<Menu>;
    branchAllMenu(branch_id : number):Promise<BranchResponseDTO|null>;
}