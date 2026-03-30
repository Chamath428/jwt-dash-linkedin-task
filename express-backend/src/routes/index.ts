import { Router } from 'express';
import authenticationRouter from './authentication.routes';

const routerV1 = Router();

routerV1.use('/authentication', authenticationRouter);

export default routerV1;