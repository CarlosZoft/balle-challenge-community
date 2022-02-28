import { Request, Response } from 'express';
import { CreateLoginService } from '../../service';

export class CreateLogin {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const service = new CreateLoginService();

        const result = await service.execute({ email, password });

        response.json(result);
    }
}
