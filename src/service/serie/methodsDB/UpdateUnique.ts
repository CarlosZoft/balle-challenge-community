import database from '../../../database';
import type { Serie } from '@prisma/client';
import type { ISerieEdit } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: ISerieEdit): Promise<Serie> {
        return await database.serie.update({
            where: { id },
            data,
        });
    }
}
