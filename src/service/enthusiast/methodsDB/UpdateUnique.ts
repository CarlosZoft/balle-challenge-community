import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastEdit } from '../interface';
import { IServiceExecuteEnthusiast } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: IEnthusiastEdit): Promise<Enthusiast> {
        return await database.enthusiast.update({
            where: { id },
            data: data,
        });
    }
}
