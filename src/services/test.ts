import type { Request, Response } from 'express';

export const testGet = (_request: Request, response: Response): void => {
    response.send('Hello World!');
};
