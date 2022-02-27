import { DeleteUnique, FindUnique } from './methodsDB';
import { Enthusiast } from '@prisma/client';
import { HttpException } from '../../error';
import { IEnthusiastFind } from './interface';

export class DeleteEnthusiastService {
    async execute({ email, id }: IEnthusiastFind): Promise<Enthusiast> {
        if (!email && !id) {
            throw new HttpException('Email or id is required', 400);
        }

        const dataFind: IEnthusiastFind = {};
        if (email) dataFind.email = email;
        if (id) dataFind.id = id;
        const existsEnthusiast = await new FindUnique().execute(dataFind);

        if (!existsEnthusiast) {
            throw new HttpException('Enthusiast not found', 404);
        }

        return await new DeleteUnique().execute({ email, id });
    }
}
