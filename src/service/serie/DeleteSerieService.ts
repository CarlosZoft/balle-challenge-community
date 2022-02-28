import { DeleteUnique, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import type { Serie } from '@prisma/client';
import type { IServiceExecuteSerie } from './interface';

export class DeleteSerieService implements IServiceExecuteSerie {
    async execute(id: string): Promise<Serie> {
        if (!id) {
            throw new HttpException('id is required', 400);
        }

        const existsSerie = await new FindUnique().execute({ id });

        if (!existsSerie) {
            throw new HttpException('Serie not found', 404);
        }

        return await new DeleteUnique().execute({ id });
    }
}
