import { Employees } from "../../../../domain/entities/employees/branch-employees.entity";
import { CreateEmployeeDTO } from "../../dtos/employee/create-branch-employee.dto";


export interface EmployeeRepository{

    create(data : CreateEmployeeDTO): Promise<Employees>;

}