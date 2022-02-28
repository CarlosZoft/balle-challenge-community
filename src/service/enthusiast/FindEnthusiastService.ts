import { FindAll, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import type { Enthusiast } from '@prisma/client';

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
