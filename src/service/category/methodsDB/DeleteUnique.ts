import database from '../../../database';
import type { Category } from '@prisma/client';
import type { ICategoryFind } from '../interface';
import type { IServiceExecuteCategory } from '../interface';

export class DeleteUnique implements IServiceExecuteCategory {
    async execute({ id }: ICategoryFind): Promise<Category> {
        return await database.category.delete({
            where: { id },
        });
    }
}
