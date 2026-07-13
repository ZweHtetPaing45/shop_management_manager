import { MenuVariantDto } from "../../../interface/dtos/menu/variants/create-variants.dto";
import { MenuVariants } from "../../../../domain/entities/menu/variants/variants.entity";
import { AppError } from "../../../errors/app-error";
import { createLogger } from "../../../../infrastructor/logger/create-logger";
import { MenuVariantRepository } from "../../../interface/repositories/menu-repository/variants/i-variants-repository";


export class CreateMenuVariantUseCase{

    constructor(
        private menuVariantsRepository : MenuVariantRepository
    ){}


    async execute(data : MenuVariantDto): Promise<MenuVariants>{

        const result : any = await this.menuVariantsRepository.create(data);

        return result;

    }

}