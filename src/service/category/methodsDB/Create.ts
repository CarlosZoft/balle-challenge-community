import database from '../../../database';
import type { Category } from '@prisma/client';
import type { ICategoryCreate } from '../../../interfaces';
import type { IServiceExecuteCategory } from '../interface';

export class Create implements IServiceExecuteCategory {
    async execute(data: ICategoryCreate): Promise<Category> {
        return await database.category.create({
            data,
        });
    }
}
