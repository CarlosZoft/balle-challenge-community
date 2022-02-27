import { DeleteUnique, FindUnique } from './methodsDB';
import { Category } from '@prisma/client';
import { HttpException } from '../../error';
import { IServiceExecuteCategory } from './interface';

export class DeleteCategoryService implements IServiceExecuteCategory {
    async execute(id: string): Promise<Category> {
        if (!id) {
            throw new HttpException('Email or id is required', 400);
        }

        const existsCategory = await new FindUnique().execute({ id });

        if (!existsCategory) {
            throw new HttpException('Category not found', 404);
        }

        return await new DeleteUnique().execute({ id });
    }
}
