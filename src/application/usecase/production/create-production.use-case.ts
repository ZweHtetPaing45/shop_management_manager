import { Production } from "../../../domain/entities/production/production.entity";
import { AppError } from "../../errors/app-error";
import { CreateProductionDTO } from "../../interface/dtos/productions/create-production.dto";
import { ProductionRepository } from "../../interface/repositories/production-repository/i-production-repository";



export class CreateProductionUseCase{

    constructor(
        private productionRepository: ProductionRepository
    ){}

    async execute(data : CreateProductionDTO): Promise<Production>{

        const createProduction = await this.productionRepository.create(data);

        if(!createProduction)throw new AppError('Failed to create production', 500);

        return createProduction;
    }

}