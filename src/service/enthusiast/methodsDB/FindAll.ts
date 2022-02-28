import database from '../../../database';
import type { Enthusiast } from '@prisma/client';
import type { IServiceExecuteEnthusiast } from '../interface';

export class FindAll implements IServiceExecuteEnthusiast {
    async execute(): Promise<Enthusiast[] | null> {
        return await database.enthusiast.findMany();
    }
}
