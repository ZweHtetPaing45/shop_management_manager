import { MySQLMenuVariantRepository } from "../../../infrastructor/repositories/mysql/menu/variants/variants-repository";
import { CreateMenuVariantUseCase } from "../../../application/usecase/menu/variants/create-variants.use-case";
import { MenuVariantController } from "../../../interface/http/v1/controller/menu/variants/variant.controller";


const menuVariantRepo = new MySQLMenuVariantRepository();

const createMenuVariantUC = new CreateMenuVariantUseCase(menuVariantRepo);

export const menuVariantController = new MenuVariantController(createMenuVariantUC);