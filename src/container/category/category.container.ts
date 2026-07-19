import { MySQLCategoryRepository } from "../../infrastructor/repositories/mysql/category/category-repository";
import { CreateCategoryUseCase } from "../../application/usecase/category/create-category.use-case";
import { CategoryController } from "../../interface/http/v1/controller/category/category.controller";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";

const categoryRepo = new MySQLCategoryRepository();
const managerRepo = new MySQLManagerRepository();

const jwtToken = new JwtTokenService();

const createCategoryUC = new CreateCategoryUseCase(categoryRepo);

export const categoryController = new CategoryController(createCategoryUC);
export const authMiddleware = new AuthMiddleware(jwtToken,managerRepo);