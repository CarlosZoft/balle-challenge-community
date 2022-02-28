import { Express } from 'express';

export interface IApp {
    app: Express;
    setRoutes(): void;
    setErrorHandler(): void;
    setConfig(): void;
}
