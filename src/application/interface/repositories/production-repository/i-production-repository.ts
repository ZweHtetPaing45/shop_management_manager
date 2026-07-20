import { Production } from "../../../../domain/entities/production/production.entity";
import { CreateProductionDTO } from "../../dtos/productions/create-production.dto";

export interface ProductionRepository{

    create(data : CreateProductionDTO): Promise<Production>;

}