import type { Express } from 'express';
import Entusiasta from './Enthusiast';

const setUpRoutes = (app: Express) => {
    app.use('/enthusiast', new Entusiasta({}).router);
};

export default setUpRoutes;
