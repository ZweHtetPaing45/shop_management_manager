import { Router } from "express";
import { managerController } from "../../../../../container/manager/auth.container";


const router = Router();

//Post Method
router.post('/login',managerController.login.bind(managerController));

export default router;