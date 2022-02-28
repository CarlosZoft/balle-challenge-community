import { CreateCommunityService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
import type { ICommunityCreate } from '../../interfaces';

export class CreateCommunity implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description, imageUrl, idSerie }: ICommunityCreate = request.body;
        const service = new CreateCommunityService();

        const Community = await service.execute({ name, description, imageUrl, idSerie });

        response.json(Community);
    }
}
