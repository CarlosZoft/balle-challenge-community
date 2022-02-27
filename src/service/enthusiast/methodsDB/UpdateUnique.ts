import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastEdit } from '../interface';
import { IServiceExecuteCreate } from '../interface';

export class UpdateUnique implements IServiceExecuteCreate {
    async execute(data: IEnthusiastEdit): Promise<Enthusiast | null> {
        return await database.enthusiast.delete({
            where: data,
        });
    }
}
