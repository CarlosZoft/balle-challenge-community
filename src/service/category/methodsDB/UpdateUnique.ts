import database from '../../../database';
import { Category } from '@prisma/client';
import { ICategoryEdit } from '../interface';
import { IServiceExecuteCategory } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: ICategoryEdit): Promise<Category> {
        return await database.category.update({
            where: { name: id },
            data,
        });
    }
}
