import { MenuVariantResponseDTO } from "./variants/menu-variant-response.dto";




export interface MenuResponseDTO{

    id : number;
    name: string;
    menu_image_url: string;
    menu_public_id: string;
    price: number;
    size: string;
    quantity: number;
    status: boolean;
    variants : MenuVariantResponseDTO[];
}