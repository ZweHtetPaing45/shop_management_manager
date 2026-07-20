import { MySQLEmployeeRepository } from "../../infrastructor/repositories/mysql/employees/employee-repository";
import { CreateEmployeeUseCase } from "../../application/usecase/employees/create-branch-employee.use-case";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { EmployeeController } from "../../interface/http/v1/controller/employees/employee.controller";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";



const employeeRepo = new MySQLEmployeeRepository();
const managerRepo = new MySQLManagerRepository();

const jwtTokenService = new JwtTokenService();

const createEmployeeUC = new CreateEmployeeUseCase(employeeRepo);

export const employeeContainer = new EmployeeController(createEmployeeUC);
export const authMiddleware = new AuthMiddleware(jwtTokenService,managerRepo);