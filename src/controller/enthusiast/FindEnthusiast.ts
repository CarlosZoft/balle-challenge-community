import { Request, Response } from 'express';
import { FindEnthusiastService } from '../../service';
import { ControllerHandler } from '../interface';

export class FindEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;

        const service = new FindEnthusiastService();

        const result = await service.execute(id);

        response.status(200).json(result);
    }
}
