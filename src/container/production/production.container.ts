import { MySQLProductionRepository } from "../../infrastructor/repositories/mysql/production/production-repository";
import { MySQLIngredientRepository } from "../../infrastructor/repositories/mysql/production/ingedient-repository";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { ProductionController } from "../../interface/http/v1/controller/production/production.controller";
import { CreateProductionUseCase } from "../../application/usecase/production/create-production.use-case";
import { CreateIngredientUseCase } from "../../application/usecase/production/create-ingredient.use-case";
import { GetInventoryUseCase } from "../../application/usecase/inventory/get-inventory.use-case";
import { UpdateInventoryUseCase } from "../../application/usecase/inventory/update-inventory.use-case";
import { MySQLInventoryRepository } from "../../infrastructor/repositories/mysql/inventory/inventory-repository";


const inventoryRepo = new MySQLInventoryRepository();
const productionRepo = new MySQLProductionRepository();
const ingredientRepo = new MySQLIngredientRepository();
const managerRepo = new MySQLManagerRepository();

const jwtTokenService = new JwtTokenService();

const createProductionUC = new CreateProductionUseCase(productionRepo);
const createIngredientUC = new CreateIngredientUseCase(ingredientRepo,inventoryRepo);


export const productionContainer = new ProductionController(createProductionUC,createIngredientUC);
export const authMiddleWare = new AuthMiddleware(jwtTokenService,managerRepo);