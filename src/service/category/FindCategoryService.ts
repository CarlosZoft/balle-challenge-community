import { Category } from '@prisma/client';
import { FindAll, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { IServiceExecuteCategory } from './interface';

export class FindCategoryService implements IServiceExecuteCategory {
    async execute(id: string): Promise<Category[] | Category | null> {
        if (!id) {
            return await new FindAll().execute();
        }

        const entusiast = await new FindUnique().execute({ id });
        if (!entusiast) {
            throw new HttpException(`Category ${id} not found`, 404);
        }

        return entusiast;
    }
}
