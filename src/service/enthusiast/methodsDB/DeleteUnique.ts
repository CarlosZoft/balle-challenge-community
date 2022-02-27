import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IEnthusiastFind } from '../interface';
import { IServiceExecuteEnthusiast } from '../interface';

export class DeleteUnique implements IServiceExecuteEnthusiast {
    async execute(data: IEnthusiastFind): Promise<Enthusiast> {
        return await database.enthusiast.delete({
            where: data,
        });
    }
}
