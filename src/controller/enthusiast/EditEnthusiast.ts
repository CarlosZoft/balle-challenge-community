import { Request, Response } from 'express';
import { IEnthusiastCreate } from '../../interfaces';
import { ControllerHandler } from '../interface';
import { EditEnthusiastService } from '../../service';
export class EditEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { name, email, password, imageUrl }: IEnthusiastCreate = request.body;

        const service = new EditEnthusiastService();

        const result = await service.execute(id, { name, email, password, imageUrl });

        response.json(result);
    }
}
