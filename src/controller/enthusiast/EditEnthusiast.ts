import { EditEnthusiastService } from '../../service';
import type { Request, Response } from 'express';
import type { IEnthusiastCreate } from '../../interfaces';
import type { ControllerHandler } from '../interface';
export class EditEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { name, email, password, imageUrl }: IEnthusiastCreate = request.body;

        const service = new EditEnthusiastService();

        const result = await service.execute(id, { name, email, password, imageUrl });

        response.json(result);
    }
}
