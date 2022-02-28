import { CreateSerieService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
import type { ISerieCreate } from '../../interfaces';

export class CreateSerie implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description, imageUrl, yearLaunch }: ISerieCreate = request.body;
        const service = new CreateSerieService();

        const result = await service.execute({ name, description, imageUrl, yearLaunch });

        response.json(result);
    }
}
