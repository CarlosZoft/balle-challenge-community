import cors from 'cors';
import express from 'express';
import SetUpRoutes from '../../routes';
import { handleError } from '../../middlewares';
import '../../database';
import 'express-async-errors';
import type { Express } from 'express';
import type { IApp } from '../interface';
class App implements IApp {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
        this.setErrorHandler();
    }
    setConfig() {
        this.app.use(
            cors({
                origin: process.env.NODE_ENV == 'prod' ? process.env.ORIGIN : 'http://localhost:8000',
                allowedHeaders: '*',
            }),
        );
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
