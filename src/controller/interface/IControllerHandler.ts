import { Response, Request } from 'express';
import { IRequest } from '../../interfaces/IHtpp';

export interface ControllerHandler {
    handle(request: Request, response: Response): Promise<void>;
}
