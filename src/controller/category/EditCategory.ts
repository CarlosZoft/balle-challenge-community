import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { EditCategoryService } from '../../service';
export class EditCategory implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { name, description } = request.body;

        const service = new EditCategoryService();

        const category = await service.execute(id, { name, description });
    }
}
