import database from '../../../database';
import type { Enthusiast } from '@prisma/client';
import type { IEnthusiastFind } from '../interface';
import type { IServiceExecuteEnthusiast } from '../interface';

export class DeleteUnique implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastFind): Promise<Enthusiast> {
        return await database.enthusiast.delete({
            where: data,
        });
    }
}
