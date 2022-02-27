import database from '../../../database';
import { Category } from '@prisma/client';
import { ICategoryFind } from '../interface';
import { IServiceExecuteCategory } from '../interface';

export class DeleteUnique implements IServiceExecuteCategory {
    async execute(data: ICategoryFind): Promise<Category> {
        return await database.category.delete({
            where: { name: data.id },
        });
    }
}
