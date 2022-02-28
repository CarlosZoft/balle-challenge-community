import { CreateCategoryService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
import type { ICategoryCreate } from '../../interfaces';

export class CreateCategory implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description }: ICategoryCreate = request.body;
        const service = new CreateCategoryService();

        const Category = await service.execute({ name, description });

        response.json(Category);
    }
}
