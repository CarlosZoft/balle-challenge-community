import database from '../../../database';
import type { Category } from '@prisma/client';
import { IServiceExecuteCategory } from '../interface';

export class FindAll implements IServiceExecuteCategory {
    async execute(): Promise<Category[] | null> {
        return await database.category.findMany();
    }
}
