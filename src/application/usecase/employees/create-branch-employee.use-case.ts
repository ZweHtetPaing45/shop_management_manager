import { Employees } from "../../../domain/entities/employees/branch-employees.entity";
import { CreateEmployeeDTO } from "../../interface/dtos/employee/create-branch-employee.dto";
import { EmployeeRepository } from "../../interface/repositories/employees/i-branch-employee-repository";
import { HashPassword } from "../../../infrastructor/utils/hash-password.utils";
import { AppError } from "../../errors/app-error";


export class CreateEmployeeUseCase{

    constructor(
        private employeeRepository : EmployeeRepository
    ){}

    async execute(data : CreateEmployeeDTO): Promise<Employees>{


        const hash = await HashPassword.hash(data.password);

        if(!hash)throw new AppError('Hash Password Error',500);

        data.password = hash;

        const result : any = await this.employeeRepository.create(data);

        return result;

    }

}