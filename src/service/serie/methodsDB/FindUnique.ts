import database from '../../../database';
import { Serie } from '@prisma/client';
import { ISerieFind } from '../interface';
import { IServiceExecuteSerie } from '../interface';

export class FindUnique implements IServiceExecuteSerie {
    async execute({ id, name }: ISerieFind): Promise<Serie | null> {
        const filter: ISerieFind = {};
        id ? (filter.id = id) : (filter.name = name);
        return await database.serie.findUnique({
            where: filter,
        });
    }
}
