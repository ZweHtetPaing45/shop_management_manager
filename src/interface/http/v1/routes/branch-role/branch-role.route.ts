import {Router} from 'express';
import { branchContainer } from '../../../../../container/branch-role/branch-role.container';
import { authMiddleWare } from '../../../../../container/production/production.container';


const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),branchContainer.create.bind(branchContainer));

export default router;