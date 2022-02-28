import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { ISerieCreate } from '../../interfaces';
import { CreateSerieService } from '../../service';

export class CreateSerie implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description, imageUrl, yearLaunch }: ISerieCreate = request.body;
        const service = new CreateSerieService();

        const result = await service.execute({ name, description, imageUrl, yearLaunch });

        response.json(result);
    }
}
