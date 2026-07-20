import { MySQLEmployeeOperationRecordRepository } from "../../infrastructor/repositories/mysql/employee_operation_record/employee_operation_record-repository";
import { CreateEmployeeOperationRecordUseCase } from "../../application/usecase/employee_operation_record/create-employee_operation_record.use-case";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { MySQLManagerRepository } from "../../infrastructor/repositories/mysql/manager/manager-repository";
import { JwtTokenService } from "../../infrastructor/secturity/jwt-token-service";
import { EmployeeOperationRecordController } from "../../interface/http/v1/controller/employee_operation_record/employee_operation_record.controller";


const employeeOperationRecordRepo = new MySQLEmployeeOperationRecordRepository();
const managerRepo = new MySQLManagerRepository();


const jwtTokenService = new JwtTokenService();

const createEmployeeOperationRecordUC = new CreateEmployeeOperationRecordUseCase(employeeOperationRecordRepo);


export const employeeOperationRecordContainer = new EmployeeOperationRecordController(createEmployeeOperationRecordUC);
export const authMiddleWare = new AuthMiddleware(jwtTokenService,managerRepo);