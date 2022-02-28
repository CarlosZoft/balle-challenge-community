import database from '../../../database';
import type { Enthusiast } from '@prisma/client';
import type { IEnthusiastEdit } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: IEnthusiastEdit): Promise<Enthusiast> {
        return await database.enthusiast.update({
            where: { id },
            data: data,
        });
    }
}
