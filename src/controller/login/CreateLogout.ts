import { CreateLogoutService } from '../../service';
import type { Request, Response } from 'express';

export class CreateLogout {
    async handle(request: Request, response: Response) {
        const { token: refreshToken } = request.params;

        const service = new CreateLogoutService();

        const result = await service.execute({ refreshToken });

        response.json(result);
    }
}
