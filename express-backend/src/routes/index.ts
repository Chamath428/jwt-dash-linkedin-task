import { Router } from 'express';
import authenticationRouter from './authentication.routes';
import dashboardRouter from './dashboard.routes';

const routerV1 = Router();

routerV1.use('/authentication', authenticationRouter);
routerV1.use('/dashboard', dashboardRouter);

export default routerV1;