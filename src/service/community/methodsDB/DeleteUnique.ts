import database from '../../../database';
import type { Community } from '@prisma/client';
import type { ICommunityFind } from '../interface';
import type { IServiceExecuteCommunity } from '../interface';

export class DeleteUnique implements IServiceExecuteCommunity {
    async execute({ id }: ICommunityFind): Promise<Community> {
        return await database.community.delete({
            where: { id },
        });
    }
}
