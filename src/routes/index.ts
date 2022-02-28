import type { Express, Request, Response } from 'express';
import { Enthusiast } from './enthusiast';
import { Category } from './Category';
import { Serie } from './Serie';

class SetUpRoutes {
    constructor(app: Express) {
        const defaultBasePath = '/api';
        app.use(`${defaultBasePath}/enthusiast`, new Enthusiast({}).router);
        app.use(`${defaultBasePath}/category`, new Category({}).router);
        app.use(`${defaultBasePath}/serie`, new Serie({}).router);
    }
}

export default SetUpRoutes;
