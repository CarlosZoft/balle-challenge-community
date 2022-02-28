import database from '../../../database';
import { Serie } from '@prisma/client';
import { ISerieEdit } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: ISerieEdit): Promise<Serie> {
        return await database.serie.update({
            where: { id },
            data,
        });
    }
}
