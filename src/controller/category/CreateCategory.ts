import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { ICategoryCreate } from '../../interfaces';
import { CreateCategoryService } from '../../service';

export class CreateCategory implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { name, description }: ICategoryCreate = request.body;
        const service = new CreateCategoryService();

        const Category = await service.execute({ name, description });

        response.json(Category);
    }
}
