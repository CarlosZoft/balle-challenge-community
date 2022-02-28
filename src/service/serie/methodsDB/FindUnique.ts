import database from '../../../database';
import type { Serie } from '@prisma/client';
import type { ISerieFind } from '../interface';
import type { IServiceExecuteSerie } from '../interface';

export class FindUnique implements IServiceExecuteSerie {
    async execute({ id, name }: ISerieFind): Promise<Serie | null> {
        const filter: ISerieFind = {};
        id ? (filter.id = id) : (filter.name = name);
        return await database.serie.findUnique({
            where: filter,
        });
    }
}
