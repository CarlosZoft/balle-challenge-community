import database from '../../../database';
import type { Serie } from '@prisma/client';
import { ISerieCreate } from '../../../interfaces';
import { IServiceExecuteSerie } from '../interface';

export class Create implements IServiceExecuteSerie {
    async execute(data: ISerieCreate): Promise<Serie> {
        return await database.serie.create({
            data,
        });
    }
}
