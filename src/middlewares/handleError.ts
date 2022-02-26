import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../error/httpException';

export default async function (
    error: HttpException,
    _request: Request,
    response: Response,
    _next: NextFunction,
): Promise<Response> {
    if (error instanceof Error) {
        return response.status(error.status || 406).json({ error: error.message });
    }
    return response.status(500).json({
        status: '500',
        message: 'Internal Server Error',
    });
}
