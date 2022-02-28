import { Create, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import type { Category } from '@prisma/client';
import type { ICategoryCreate } from '../../interfaces';
import type { IServiceExecuteCategory } from './interface';

export class CreateCategoryService implements IServiceExecuteCategory {
    async execute({ name, description }: ICategoryCreate): Promise<Category> {
        if (!name || !description) {
            throw new HttpException('Missing required fields', 400);
        }

        const CategoryAlreadyExists = await new FindUnique().execute({ name });

        if (CategoryAlreadyExists) {
            throw new HttpException('Category already exists', 400);
        }

        return await new Create().execute({ name, description });
    }
}
