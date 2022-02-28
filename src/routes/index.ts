import { Express } from 'express';
import Enthusiast from './Enthusiast';
import Category from './Category';
import Serie from './Serie';
import Community from './Community';
import Login from './Login';

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
