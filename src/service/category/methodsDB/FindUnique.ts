import database from '../../../database';
import { Category } from '@prisma/client';
import { ICategoryFind } from '../interface';
import { IServiceExecuteCategory } from '../interface';

export class FindUnique implements IServiceExecuteCategory {
    async execute(data: ICategoryFind): Promise<Category | null> {
        return await database.category.findUnique({
            where: {
                name: data.id,
            },
        });
    }
}
