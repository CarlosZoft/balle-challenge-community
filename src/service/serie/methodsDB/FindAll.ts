import database from '../../../database';
import type { Serie } from '@prisma/client';
import { IServiceExecuteSerie } from '../interface';

export class FindAll implements IServiceExecuteSerie {
    async execute(): Promise<Serie[]> {
        return await database.serie.findMany();
    }
}
