import type { Express } from 'express';
import test from './test.routes';

const setUpRoutes = (app: Express) => {
    app.use('/test', new test({}).router);
};

export default setUpRoutes;
