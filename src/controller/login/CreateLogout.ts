import { Request, Response } from 'express';
import { CreateLogoutService } from '../../service';

export class CreateLogout {
    async handle(request: Request, response: Response) {
        const { token: refreshToken } = request.params;

        const service = new CreateLogoutService();

        const result = await service.execute({ refreshToken });

        response.json(result);
    }
}
