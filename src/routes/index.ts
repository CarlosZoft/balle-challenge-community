import type { Express } from 'express';
import Entusiasta from './enthusiast';

const setUpRoutes = (app: Express) => {
    app.use('/enthusiast', new Entusiasta({}).router);
};

export default setUpRoutes;
