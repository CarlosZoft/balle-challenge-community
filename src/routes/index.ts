import type { Express } from 'express';
import User from './User';

const setUpRoutes = (app: Express) => {
    app.use('/user', new User({}).router);
};

export default setUpRoutes;
