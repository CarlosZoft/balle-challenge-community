import type { Express } from 'express';
import Entusiasta from './enthusiast';
import Category from './Category';

class SetUpRoutes {
    constructor(app: Express) {
        const defaultBasePath = '/api';
        app.use(`${defaultBasePath}/enthusiast`, new Entusiasta({}).router);
        app.use(`${defaultBasePath}/category`, new Category({}).router);
    }
}

export default SetUpRoutes;
