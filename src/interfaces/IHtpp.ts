import { Request, Response } from 'express';

export interface IResponse {
    statusCode: number;
    body: any;
}
export interface IRequest {
    response: Response;
    request: Request;
}
