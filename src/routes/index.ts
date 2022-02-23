import type { Express } from 'express';
import test from './test.routes';

const setUpRoutes = (app: Express) => {
    app.use('/test', test);
};

export default setUpRoutes;
