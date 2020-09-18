import { Router } from 'express';

import logRouter from './log.routes';

const routes = Router();

routes.use('/log', logRouter);

export default routes;
