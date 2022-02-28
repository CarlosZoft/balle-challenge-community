import type { Request, Response, NextFunction } from 'express';

export interface IMiddlewareHandler {
    error?: Error;
    request: Request;
    response: Response;
    next: NextFunction;
}
