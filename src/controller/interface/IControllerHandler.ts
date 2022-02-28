import type { Response, Request } from 'express';
export interface ControllerHandler {
    handle(request: Request, response: Response): Promise<void>;
}
