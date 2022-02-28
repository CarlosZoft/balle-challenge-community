import { Request, Response } from 'express';
import { DeleteSerieService } from '../../service';
import { ControllerHandler } from '../interface';
export class DeleteSerie implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;

        const service = new DeleteSerieService();

        const result = await service.execute(id);

        response.status(200).json(result);
    }
}
