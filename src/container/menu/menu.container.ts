import { MySQLMenuRepository } from "../../infrastructor/repositories/mysql/menu/menu-repository";
import { CreateMenuUseCase } from "../../application/usecase/menu/create-menu.use-case";
import { MenuController } from "../../interface/http/v1/controller/menu/menu.controller";
import { FindBranchMenuUseCase } from "../../application/usecase/menu/find-branch-menu.use-case";

const menuRepo = new MySQLMenuRepository();


const createMenuUC = new CreateMenuUseCase(menuRepo);
const findBranchMenuUC = new FindBranchMenuUseCase(menuRepo);

export const menuController = new MenuController(createMenuUC,findBranchMenuUC);