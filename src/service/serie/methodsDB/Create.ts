import database from '../../../database';
import type { Serie } from '@prisma/client';
import type { ISerieCreate } from '../../../interfaces';
import type { IServiceExecuteSerie } from '../interface';

export class Create implements IServiceExecuteSerie {
    async execute(data: ISerieCreate): Promise<Serie> {
        return await database.serie.create({
            data,
        });
    }
}
