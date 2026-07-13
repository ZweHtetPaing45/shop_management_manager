import { Router } from "express";
import { menuController } from "../../../../../container/menu/menu.container";
import { upload } from "../../middlewares/upload.middleware";

const router = Router();

//Post Method
router.post('/',upload.single("menu_image"),menuController.create.bind(menuController));

export default router;