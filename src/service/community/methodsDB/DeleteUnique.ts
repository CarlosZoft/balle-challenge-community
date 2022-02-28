import database from '../../../database';
import type { Community } from '@prisma/client';
import { ICommunityFind } from '../interface';
import { IServiceExecuteCommunity } from '../interface';

export class DeleteUnique implements IServiceExecuteCommunity {
    async execute({ id }: ICommunityFind): Promise<Community> {
        return await database.community.delete({
            where: { id },
        });
    }
}
