import { MenuResponseDTO } from "../menu/menu-response.dto";



export interface CategoryResponseDTO{

    id : number;
    name: string;
    menus: MenuResponseDTO[]

}