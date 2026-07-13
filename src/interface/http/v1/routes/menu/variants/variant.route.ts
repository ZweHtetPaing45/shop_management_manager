import { Router } from "express";
import { menuVariantController } from "../../../../../../container/menu/variants/variant.container";


const router = Router();

//Post Method
router.post('/',menuVariantController.create.bind(menuVariantController));

export default router;