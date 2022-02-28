import database from '../../../database';
import { Category } from '@prisma/client';
import { ICategoryFind } from '../interface';
import { IServiceExecuteCategory } from '../interface';

export class FindUnique implements IServiceExecuteCategory {
    async execute({ id, name }: ICategoryFind): Promise<Category | null> {
        const filter: ICategoryFind = {};
        id ? (filter.id = id) : (filter.name = name);
        return await database.category.findUnique({
            where: filter,
        });
    }
}
