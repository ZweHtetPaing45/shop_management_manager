import { MySQLBranchOrderItemRepository } from "../../infrastructor/repositories/mysql/branch-order-item/branch-order-item-repository";
import { CreateBranchOrderItemUseCase } from "../../application/usecase/branch-order-item/create-branch-order-item";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { BranchOrderItemController } from "../../interface/http/v1/controller/branch-order-item/branch-order-item.controller";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";


const managerRepo = new MySQLManagerRepository();
const branchOrderItemRepo = new MySQLBranchOrderItemRepository();
const jwtTokenService = new JwtTokenService();


const createBranchOrderItemUC = new CreateBranchOrderItemUseCase(branchOrderItemRepo);


export const branchOrderItemContainer = new BranchOrderItemController(createBranchOrderItemUC);
export const authMiddleWare = new AuthMiddleware(jwtTokenService,managerRepo);