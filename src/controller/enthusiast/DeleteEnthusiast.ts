import { Request, Response } from 'express';
import { DeleteEnthusiastService } from '../../service';
import { ControllerHandler } from '../interface';
export class DeleteEnthusiast implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { email, id } = request.params;
        console.log(email);
        const service = new DeleteEnthusiastService();

        const result = await service.execute({ email, id });

        response.status(200).json(result);
    }
}
