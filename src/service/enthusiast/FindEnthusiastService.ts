import { Enthusiast } from '@prisma/client';
import { FindAll, FindUnique } from './methodsDB';
import { IEnthusiastFind } from './interface';
import { HttpException } from '../../error';

export class FindEnthusiastService {
    async execute({ email, id }: IEnthusiastFind): Promise<Enthusiast[] | Enthusiast | null> {
        if (!email && !id) {
            return await new FindAll().execute();
        }

        const dataFind: IEnthusiastFind = {};
        if (email) dataFind.email = email;
        if (id) dataFind.id = id;

        const entusiast = await new FindUnique().execute(dataFind);
        if (!entusiast) {
            throw new HttpException('Enthusiast not found', 404);
        }

        return entusiast;
    }
}
