import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastFind } from '../interface';
import { IServiceExecuteCreate } from '../interface';

export class FindUnique implements IServiceExecuteCreate {
    async execute(data: IEnthusiastFind): Promise<Enthusiast | null> {
        return await database.enthusiast.findUnique({
            where: data,
        });
    }
}
