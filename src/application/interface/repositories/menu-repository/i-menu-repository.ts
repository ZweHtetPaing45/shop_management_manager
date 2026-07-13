import { Menu } from "../../../../domain/entities/menu/menu.entity";
import { MenuDto } from "../../dtos/menu/create-menu.dto";

export interface MenuRepository{

    create(data : MenuDto): Promise<Menu>;
    
}