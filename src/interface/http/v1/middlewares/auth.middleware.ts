import {Request,Response,NextFunction} from 'express';
import {AppError} from '../../../../application/errors/app-error';
import { TokenService } from '../../../../application/interface/services/i-token-service';
import {ManagerRepository} from '../../../../application/interface/repositories/manager-repository/i-manager-repository';
import { createLogger } from '../../../../infrastructor/logger/create-logger';


const logger = createLogger();

export class AuthMiddleware{

    constructor(
        private tokenService: TokenService,
        private managerRepository: ManagerRepository
    ){}

    async handle(req: Request,res: Response,next: NextFunction){

        try{

            const authHeader = req.headers.authorization;

            if(!authHeader?.startsWith("Bearer ")) throw new AppError("Token not provided",401);

            const token = authHeader.split(' ')[1];

            const decodedToken : any = await this.tokenService.verify(token);

            if(!decodedToken) throw new AppError("Invalid token",401);

            const manager = await this.managerRepository.findById(decodedToken.id);
            
            if(!manager) throw new AppError("Owner not found",404);

            (req as any).manager = manager;
            
            next();

        }catch(error){
            next(error);
        }

    }

}