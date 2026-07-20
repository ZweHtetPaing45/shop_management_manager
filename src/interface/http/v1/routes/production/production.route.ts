import {Router} from "express";
import { productionContainer } from "../../../../../container/production/production.container";
import { authMiddleWare } from "../../../../../container/production/production.container";


const router = Router();


//Post Method

router.post('/',authMiddleWare.handle.bind(authMiddleWare),productionContainer.create.bind(productionContainer));

export default router;