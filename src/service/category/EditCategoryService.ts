import { FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { UpdateUnique } from './methodsDB';
import type { Category } from '@prisma/client';
import type { ICategoryEdit } from './interface/ICategory';

export class EditCategoryService {
    async execute(id: string, { name, description }: ICategoryEdit): Promise<Category> {
        if (!id) {
            throw new HttpException('Id is required', 400);
        }

        const existsCategory = await new FindUnique().execute({ id });
        if (!existsCategory) {
            throw new HttpException(`Category not found`, 404);
        }

        const nameAlreadyExists = await new FindUnique().execute({ name });
        if (nameAlreadyExists) {
            throw new HttpException(`Category ${name} already exists`, 400);
        }

        const dataEdit: ICategoryEdit = {};
        if (name) dataEdit.name = name;
        if (description) dataEdit.description = description;

        return await new UpdateUnique().execute(id, dataEdit);
    }
}
