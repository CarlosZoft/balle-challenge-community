import type { Express } from 'express';
import { Enthusiast } from './enthusiast';
import { Category } from './Category';
import { Serie } from './Serie';
import { Community } from './community';

class SetUpRoutes {
    constructor(app: Express) {
        const defaultBasePath = '/api';
        app.use(`${defaultBasePath}/enthusiast`, new Enthusiast({}).router);
        app.use(`${defaultBasePath}/category`, new Category({}).router);
        app.use(`${defaultBasePath}/serie`, new Serie({}).router);
        app.use(`${defaultBasePath}/community`, new Community({}).router);
    }
}

export default SetUpRoutes;
