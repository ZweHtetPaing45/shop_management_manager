import { Router } from "express";
import { categoryController } from "../../../../../container/category/category.container";


const router = Router();

//Post Method
router.post('/',categoryController.create.bind(categoryController));


export default router;