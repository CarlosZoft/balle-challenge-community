import { Request, Response, NextFunction } from 'express';

export interface IResponse {
    statusCode: number;
    body: object;
}
export interface IRequest {
    response: Response;
    request: Request;
}
export interface IMiddlewareHandler {
    error?: Error;
    request: Request;
    response: Response;
    next: NextFunction;
}
