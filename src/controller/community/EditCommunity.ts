import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { EditCommunityService } from '../../service';

export class EditCommunity implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { name, description } = request.body;

        const service = new EditCommunityService();

        const Community = await service.execute(id, { name, description });

        response.status(200).json(Community);
    }
}
