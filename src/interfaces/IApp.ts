import { Express } from 'express';

export default interface IApp {
    app: Express;
    setRoutes(): void;
    setErrorHandler(): void;
    setConfig(): void;
}
