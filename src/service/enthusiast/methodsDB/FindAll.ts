import database from '../../../database';
import { Enthusiast } from '@prisma/client';
import { IServiceExecuteCreate } from '../interface';

export class FindAll implements IServiceExecuteCreate {
    async execute(): Promise<Enthusiast[] | null> {
        return await database.enthusiast.findMany();
    }
}
