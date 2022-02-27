import { Enthusiast } from '@prisma/client';
import { FindAll, FindUnique } from './methodsDB';
import { HttpException } from '../../error';

export class FindEnthusiastService {
    async execute(id: string): Promise<Enthusiast[] | Enthusiast | null> {
        if (!id) {
            return await new FindAll().execute();
        }

        const entusiast = await new FindUnique().execute({ id });
        if (!entusiast) {
            throw new HttpException('Enthusiast not found', 404);
        }

        return entusiast;
    }
}
