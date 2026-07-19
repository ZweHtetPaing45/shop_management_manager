import { Router } from "express";
import { categoryController,authMiddleware } from "../../../../../container/category/category.container";


const router = Router();

//Post Method
router.post('/',authMiddleware.handle.bind(authMiddleware),categoryController.create.bind(categoryController));


export default router;