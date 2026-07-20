import Router from 'express';
import authRouter from '../manager/manager.route';
import categoryRouter from '../category/category.route';
import menuRouter from '../menu/menu.route';
import menuVariantRouter from '../menu/variants/variant.route';
import productionRouter from '../production/production.route';
import employeeRouter from '../employees/employee.route';


const router = Router();

router.use('/auth',authRouter);
router.use('/category',categoryRouter);
router.use('/menu',menuRouter);
router.use('/menu_variant',menuVariantRouter);
router.use('/production',productionRouter);
router.use('/employee',employeeRouter);

export default router;