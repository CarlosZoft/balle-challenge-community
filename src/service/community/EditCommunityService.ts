import { FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { UpdateUnique } from './methodsDB';
import type { Community } from '@prisma/client';
import type { ICommunityEdit } from './interface/ICommunity';

export class EditCommunityService {
    async execute(id: string, { name, description, imageUrl }: ICommunityEdit): Promise<Community> {
        if (!id) {
            throw new HttpException('Id is required', 400);
        }

        const existsCommunity = await new FindUnique().execute({ id });
        if (!existsCommunity) {
            throw new HttpException(`Community not found`, 404);
        }

        const nameAlreadyExists = await new FindUnique().execute({ name });
        if (nameAlreadyExists) {
            throw new HttpException(`Community ${name} already exists`, 400);
        }

        const dataEdit: ICommunityEdit = {};
        if (name) dataEdit.name = name;
        if (description) dataEdit.description = description;
        if (imageUrl) dataEdit.imageUrl = imageUrl;
        return await new UpdateUnique().execute(id, dataEdit);
    }
}
