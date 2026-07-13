import { MenuVariants } from "../../../../../domain/entities/menu/variants/variants.entity";
import { MenuVariantDto } from "../../../dtos/menu/variants/create-variants.dto";

export interface MenuVariantRepository{

    create(data : MenuVariantDto) : Promise<MenuVariants>;

}