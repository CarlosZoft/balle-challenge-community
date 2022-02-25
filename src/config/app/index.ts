import express, { Express } from 'express';
import 'express-async-errors';
import '../../database';
import setUpRoutes from '../../routes';
import { handleError } from '../../middlewares';
import { IApp } from '../../interfaces';
class App implements IApp {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setRoutes();
        this.setErrorHandler();
    }
    setConfig() {
        this.app.use(express.json());
    }
    setRoutes() {
        setUpRoutes(this.app);
    }
    setErrorHandler() {
        this.app.use(handleError);
    }
}

export default new App().app;
