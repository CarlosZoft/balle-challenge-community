import { DeleteEnthusiastService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
export class DeleteEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { email, id } = request.params;

        const service = new DeleteEnthusiastService();

        const result = await service.execute({ email, id });

        response.status(200).json(result);
    }
}
