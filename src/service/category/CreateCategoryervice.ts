import { Create, FindUnique } from './methodsDB';
import { Category } from '@prisma/client';
import { HttpException } from '../../error';
import { ICategoryCreate } from '../../interfaces';
import { IServiceExecuteCategory } from './interface';

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
