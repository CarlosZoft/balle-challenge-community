import database from '../../../database';
import type { Serie } from '@prisma/client';
import { ISerieFind } from '../interface';
import { IServiceExecuteSerie } from '../interface';

export class DeleteUnique implements IServiceExecuteSerie {
    async execute({ id }: ISerieFind): Promise<Serie> {
        return await database.serie.delete({
            where: { id },
        });
    }
}
