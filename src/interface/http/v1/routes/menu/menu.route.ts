import { Router } from "express";
import { menuController } from "../../../../../container/menu/menu.container";
import { upload } from "../../middlewares/upload.middleware";
import { authMiddleWare } from "../../../../../container/production/production.container";

const router = Router();

//Post Method
router.post('/',upload.single("menu_image"),menuController.create.bind(menuController));
router.get('/',authMiddleWare.handle.bind(authMiddleWare),menuController.getAllMenu.bind(menuController));

export default router;