import { Serie } from '@prisma/client';
import { FindAll, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { IServiceExecuteSerie } from './interface';

export class FindSerieService implements IServiceExecuteSerie {
    async execute(id: string): Promise<Serie[] | Serie | null> {
        if (!id) {
            return await new FindAll().execute();
        }

        const entusiast = await new FindUnique().execute({ id });
        if (!entusiast) {
            throw new HttpException(`Serie ${id} not found`, 404);
        }

        return entusiast;
    }
}
