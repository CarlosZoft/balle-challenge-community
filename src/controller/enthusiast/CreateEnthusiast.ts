import { CreateEnthusiastService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
import type { IEnthusiastCreate } from '../../interfaces';

export class CreateEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, email, password, imageUrl }: IEnthusiastCreate = request.body;
        const service = new CreateEnthusiastService();

        const enthusiast = await service.execute({ name, email, password, imageUrl });

        response.json(enthusiast);
    }
}
