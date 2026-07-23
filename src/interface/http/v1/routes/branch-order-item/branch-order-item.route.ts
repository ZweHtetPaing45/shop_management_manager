import { Router } from "express";
import { branchOrderItemContainer } from "../../../../../container/branch-order-item/branch-order-item.container";
import { authMiddleWare } from "../../../../../container/branch-order-item/branch-order-item.container";

const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),branchOrderItemContainer.create.bind(branchOrderItemContainer));

export default router;