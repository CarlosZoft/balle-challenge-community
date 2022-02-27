import express, { Express } from 'express';
import SetUpRoutes from '../../routes';
import { handleError } from '../../middlewares';
import { IApp } from '../interface';
import '../../database';
import 'express-async-errors';
class App implements IApp {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
        this.setErrorHandler();
    }
    setConfig() {
        this.app.use(express.json());
    }
    setRoutes() {
        new SetUpRoutes(this.app);
    }
    setErrorHandler() {
        this.app.use(handleError);
    }
}

export default new App().app;
