import { Request, Response } from 'express';
import { CreateRefreshService } from '../../service';

export class CreateRefresh {
    async handle(request: Request, response: Response) {
        const { refreshToken } = request.body;

        const service = new CreateRefreshService();

        const result = await service.execute({ refreshToken });

        response.json(result);
    }
}
