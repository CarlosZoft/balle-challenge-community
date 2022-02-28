import database from '../../../database';
import type { Community } from '@prisma/client';
import { ICommunityEdit } from '../interface';

export class UpdateUnique {
    async execute(id: string, data: ICommunityEdit): Promise<Community> {
        return await database.community.update({
            where: { id },
            data,
        });
    }
}
