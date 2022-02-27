import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastFind } from '../interface';
import { IServiceExecuteEnthusiast } from '../interface';

export class FindUnique implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastFind): Promise<Enthusiast | null> {
        return await database.enthusiast.findUnique({
            where: data,
        });
    }
}
