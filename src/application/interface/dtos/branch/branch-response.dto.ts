import { CategoryResponseDTO } from "../category/category-response.dto";


export interface BranchResponseDTO{

    id : number;
    name: string;
    branch_image_url: string;
    branch_public_id : string;
    address : string;
    phone: string;
    manager_name: string;
    categories: CategoryResponseDTO[];

}