import { DeleteCategoryService } from '../../service';
import type { Request, Response } from 'express';
import type { ControllerHandler } from '../interface';
export class DeleteCategory implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;

        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        response.status(200).json(result);
    }
}
