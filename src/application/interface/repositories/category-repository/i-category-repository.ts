import { Categories } from "../../../../domain/entities/category/category.entity";
import { CategoryDto } from "../../dtos/category/create-category.dto";

export interface CategoryRepository{

    create(data: CategoryDto): Promise<Categories>;
    
}