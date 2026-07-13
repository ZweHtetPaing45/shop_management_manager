import { Categories } from "../../../domain/entities/category/category.entity";
import { CategoryRepository } from "../../interface/repositories/category-repository/i-category-repository";
import { AppError } from "../../errors/app-error";
import { CategoryDto } from "../../interface/dtos/category/create-category.dto";


export class CreateCategoryUseCase{

    constructor(
        private categoryRepository : CategoryRepository
    ){}

    async execute(data : CategoryDto): Promise<Categories>{

        const result = await this.categoryRepository.create(data);

        if(!result)throw new AppError('UseCase Insert Data Error',400);

        return result;

    }

}