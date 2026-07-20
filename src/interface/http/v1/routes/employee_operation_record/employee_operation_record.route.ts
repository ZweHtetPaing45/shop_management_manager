import {Router} from 'express';
import { employeeOperationRecordContainer } from '../../../../../container/employee_operation_record/employee_operation_record.container';
import { authMiddleWare } from '../../../../../container/production/production.container';

const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),employeeOperationRecordContainer.Create.bind(employeeOperationRecordContainer));

export default router;