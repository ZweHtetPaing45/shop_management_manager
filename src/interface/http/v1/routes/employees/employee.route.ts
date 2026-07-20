import {Router} from 'express';
import { employeeContainer } from '../../../../../container/employees/employee.container';
import { authMiddleWare } from '../../../../../container/production/production.container';


const router = Router();


//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),employeeContainer.create.bind(employeeContainer));


export default router;