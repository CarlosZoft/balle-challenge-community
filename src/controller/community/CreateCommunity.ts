import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { ICommunityCreate } from '../../interfaces';
import { CreateCommunityService } from '../../service';

export class CreateCommunity implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description, imageUrl, idSerie }: ICommunityCreate = request.body;
        const service = new CreateCommunityService();

        const Community = await service.execute({ name, description, imageUrl, idSerie });

        response.json(Community);
    }
}
