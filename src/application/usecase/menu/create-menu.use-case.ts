import { Menu } from "../../../domain/entities/menu/menu.entity";
import { MenuDto } from "../../interface/dtos/menu/create-menu.dto";
import { MenuRepository } from "../../interface/repositories/menu-repository/i-menu-repository";



export class CreateMenuUseCase{

    constructor(
        private menuRepository : MenuRepository
    ){}

    async execute(data : MenuDto): Promise<Menu>{

        const result : any = await this.menuRepository.create(data);

        return result;
    }

}