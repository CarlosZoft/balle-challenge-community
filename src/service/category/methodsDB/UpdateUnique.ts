import database from '../../../database';
import type { Category } from '@prisma/client';
import type { ICategoryEdit } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: ICategoryEdit): Promise<Category> {
        return await database.category.update({
            where: { id },
            data,
        });
    }
}
