import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IServiceExecuteEnthusiast } from '../interface';

export class FindAll implements IServiceExecuteEnthusiast {
    async execute(): Promise<Enthusiast[] | null> {
        return await database.enthusiast.findMany();
    }
}
