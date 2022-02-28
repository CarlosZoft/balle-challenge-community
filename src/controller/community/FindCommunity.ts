import { Request, Response } from 'express';
import { ControllerHandler } from '../interface';
import { FindCommunityService } from '../../service';
import { IOptionsCommunity } from '../../service/community/interface';

export class FindCommunity implements ControllerHandler {
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params;
        const { serie, enthusiast }: IOptionsCommunity = request.query;

        const service = new FindCommunityService();

        const result = await service.execute(id, { serie, enthusiast });

        response.status(200).json(result);
    }
}
