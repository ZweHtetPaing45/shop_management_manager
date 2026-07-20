import { MySQLBranchRoleRepository } from "../../infrastructor/repositories/mysql/branch-role/branch-role-repository";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { CreateBranchRoleUseCase } from "../../application/usecase/branch-role/create-branch-role.use-case";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { BranchRoleController } from "../../interface/http/v1/controller/branch-role/branch.controller";

const branchRoleRepo = new MySQLBranchRoleRepository();
const managerRepo = new MySQLManagerRepository();

const jwtTokenService = new JwtTokenService();

const createBranchRoleUseCase = new CreateBranchRoleUseCase(branchRoleRepo);

export const branchContainer = new BranchRoleController(createBranchRoleUseCase);
export const authMiddleWare = new AuthMiddleware(jwtTokenService,managerRepo);