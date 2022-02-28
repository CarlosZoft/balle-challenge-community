import { EditCategoryService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
export class EditCategory implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { name, description } = request.body;

        const service = new EditCategoryService();

        const category = await service.execute(id, { name, description });

        response.status(200).json(category);
    }
}
