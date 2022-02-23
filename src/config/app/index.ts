import express, { Express } from 'express';
import setUpRoutes from '../../routes';
import { handleError } from '../../middlewares';
class App {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setRoutes();
        this.setErrorHandler();
    }
    setRoutes() {
        setUpRoutes(this.app);
    }
    setErrorHandler() {
        this.app.use(handleError);
    }
}

export default new App().app;
