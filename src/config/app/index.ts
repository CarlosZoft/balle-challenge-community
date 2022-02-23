import express, { Express } from 'express';
import type { Iapp } from '../../interfaces';
import setUpRoutes from '../../routes';

export default class App implements Iapp {
    readonly app: Express;
    constructor() {
        this.app = express();
        this.setRoutes();
    }
    setRoutes() {
        setUpRoutes(this.app);
    }
}
