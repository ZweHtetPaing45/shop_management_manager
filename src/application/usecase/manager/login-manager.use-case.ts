import { HashPassword } from "../../../infrastructor/utils/hash-password.utils";
import { AppError } from "../../errors/app-error";
import { LoginManagerDto } from "../../interface/dtos/manager/login-manager.dto";
import { ManagerRepository } from "../../interface/repositories/manager-repository/i-manager-repository";
import { TokenService } from "../../interface/services/i-token-service";
import { LoginResponseManagerDto } from "../../interface/dtos/manager/login-response-manager.dto";
import { RoleRepository } from "../../interface/repositories/role-repository/i-role-repository";
import { createLogger } from "../../../infrastructor/logger/create-logger";


const logger = createLogger()

export class LoginManagerUseCase{


    constructor(
        private managerRepository : ManagerRepository,
        private tokenService : TokenService,
        private roleRepository : RoleRepository
    ){}

    async execute(data : LoginManagerDto): Promise<LoginResponseManagerDto>{

        const manager : any = await this.managerRepository.findByEmail(data.email);

        if(!manager)throw new AppError("Can not login",500);

        const role_exit = await this.roleRepository.findById(manager.role_id);

        if(role_exit.name !== "manager")throw new AppError('Can not manager',500);

        const compare = HashPassword.compare(data.password,manager.password);

        if(!compare)throw new AppError('Incorrect Password',500);

        const token = this.tokenService.generate({id: manager.id,email: manager.email});

        return {
            manager: {
                id: manager.id,
                email: manager.email,
                branch_id: manager.branch_id,
            },
            accessToken: token
        }

    }
}