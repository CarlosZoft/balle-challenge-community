import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { IEnthusiastCreate, IRequest } from '../../interfaces';
import { CreateEnthusiastService } from '../../service';

export class CreateEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, email, password, imageUrl }: IEnthusiastCreate = request.body;
        const service = new CreateEnthusiastService();

        const enthusiast = await service.execute({ name, email, password, imageUrl });

        response.json(enthusiast);
    }
}
