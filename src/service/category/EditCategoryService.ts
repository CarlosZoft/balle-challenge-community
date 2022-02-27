import { Category } from '@prisma/client';
import { FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { UpdateUnique } from './methodsDB';
import { ICategoryEdit } from './interface/ICategory';

export class EditCategoryService {
    async execute(id: string, { name, description }: ICategoryEdit): Promise<Category> {
        if (!id) {
            throw new HttpException('Id is required', 400);
        }

        const existsEntusiast = await new FindUnique().execute({ id });
        if (existsEntusiast) {
            throw new HttpException(`Category ${id} already exists`, 404);
        }

        const dataEdit: ICategoryEdit = {};
        if (name) dataEdit.name = name;
        if (description) dataEdit.description = description;

        return await new UpdateUnique().execute(id, dataEdit);
    }
}
