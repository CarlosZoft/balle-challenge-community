import database from '../../../database';
import type { Category } from '@prisma/client';
import type { ICategoryFind } from '../interface';
import type { IServiceExecuteCategory } from '../interface';

export class FindUnique implements IServiceExecuteCategory {
    async execute({ id, name }: ICategoryFind): Promise<Category | null> {
        const filter: ICategoryFind = {};
        id ? (filter.id = id) : (filter.name = name);
        return await database.category.findUnique({
            where: filter,
        });
    }
}
