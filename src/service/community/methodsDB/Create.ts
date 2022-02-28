import database from '../../../database';
import type { Community } from '@prisma/client';
import type { ICommunityCreate } from '../../../interfaces';
import type { IServiceExecuteCommunity } from '../interface';

export class Create implements IServiceExecuteCommunity {
    async execute(data: ICommunityCreate): Promise<Community> {
        return await database.community.create({
            data,
        });
    }
}
