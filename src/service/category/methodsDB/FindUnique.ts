import database from '../../../database';
import type { Category } from '@prisma/client';
import { ICategoryFind } from '../interface';
import { IServiceExecuteCategory } from '../interface';

export class FindUnique implements IServiceExecuteCategory {
    async execute({ id, name }: ICategoryFind): Promise<Category | null> {
        return await database.category.findUnique({
            where: {
                id,
                name,
            },
        });
    }
}
