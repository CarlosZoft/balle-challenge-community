import database from '../../../database';
import type { Enthusiast } from '@prisma/client';
import type { IEnthusiastFind } from '../interface';
import type { IServiceExecuteEnthusiast } from '../interface';

export class FindUnique implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastFind): Promise<Enthusiast | null> {
        return await database.enthusiast.findUnique({
            where: data,
        });
    }
}
