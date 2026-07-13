import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { LoginManagerUseCase } from "../../application/usecase/manager/login-manager.use-case";
import { ManagerController } from "../../interface/http/v1/controller/manager/manager.controller";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { MySQLRoleRepository } from "../../infrastructor/repositories/mysql/role/role-repository";


const managerRepository = new MySQLManagerRepository();
const roleRepository = new MySQLRoleRepository();

const jwtTokenService = new JwtTokenService();

const loginManagerUC = new LoginManagerUseCase(managerRepository,jwtTokenService,roleRepository);

export const managerController = new ManagerController(loginManagerUC);