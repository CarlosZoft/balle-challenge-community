import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastCreate } from '../../../interfaces';
import { IServiceExecuteEnthusiast } from '../interface';

export class Create implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastCreate): Promise<Enthusiast> {
        return await database.enthusiast.create({
            data,
        });
    }
}
