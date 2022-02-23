import express, { Express } from 'express';
import setUpRoutes from '../../routes';
class App {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setRoutes();
    }
    setRoutes() {
        setUpRoutes(this.app);
    }
}

export default new App().app;
