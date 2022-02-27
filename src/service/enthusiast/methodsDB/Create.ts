import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastCreate } from '../../../interfaces';
import { IServiceExecuteCreate } from '../interface';

export class Create implements IServiceExecuteCreate {
    async execute(data: IEnthusiastCreate): Promise<Enthusiast> {
        return await database.enthusiast.create({
            data,
        });
    }
}
