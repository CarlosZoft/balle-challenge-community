import Category from './Category';
import Community from './Community';
import Enthusiast from './Enthusiast';
import Login from './Login';
import Serie from './Serie';
import type { Express } from 'express';

class SetUpRoutes {
    constructor(app: Express) {
        const defaultBasePath = '/api';
        app.use(`${defaultBasePath}/enthusiast`, new Enthusiast({}).router);
        app.use(`${defaultBasePath}/category`, new Category({}).router);
        app.use(`${defaultBasePath}/serie`, new Serie({}).router);
        app.use(`${defaultBasePath}/community`, new Community({}).router);
        app.use(`${defaultBasePath}/login`, new Login({}).router);
    }
}

export default SetUpRoutes;
