import { MySQLMenuRepository } from "../../infrastructor/repositories/mysql/menu/menu-repository";
import { CreateMenuUseCase } from "../../application/usecase/menu/create-menu.use-case";
import { MenuController } from "../../interface/http/v1/controller/menu/menu.controller";


const menuRepo = new MySQLMenuRepository();


const createMenuUC = new CreateMenuUseCase(menuRepo);

export const menuController = new MenuController(createMenuUC);