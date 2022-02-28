import database from '../../../database';
import type { Enthusiast } from '@prisma/client';
import type { IEnthusiastCreate } from '../../../interfaces';
import type { IServiceExecuteEnthusiast } from '../interface';

export class Create implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastCreate): Promise<Enthusiast> {
        return await database.enthusiast.create({
            data,
        });
    }
}
