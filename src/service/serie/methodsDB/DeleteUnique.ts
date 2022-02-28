import database from '../../../database';
import type { Serie } from '@prisma/client';
import type { ISerieFind } from '../interface';
import type { IServiceExecuteSerie } from '../interface';

export class DeleteUnique implements IServiceExecuteSerie {
    async execute({ id }: ISerieFind): Promise<Serie> {
        return await database.serie.delete({
            where: { id },
        });
    }
}
