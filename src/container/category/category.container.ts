import { MySQLCategoryRepository } from "../../infrastructor/repositories/mysql/category/category-repository";
import { CreateCategoryUseCase } from "../../application/usecase/category/create-category.use-case";
import { CategoryController } from "../../interface/http/v1/controller/category/category.controller";


const categoryRepo = new MySQLCategoryRepository();

const createCategoryUC = new CreateCategoryUseCase(categoryRepo);

export const categoryController = new CategoryController(createCategoryUC);