import database from '../../../database';
import { Community } from '@prisma/client';
import { ICommunityCreate } from '../../../interfaces';
import { IServiceExecuteCommunity } from '../interface';

export class Create implements IServiceExecuteCommunity {
    async execute(data: ICommunityCreate): Promise<Community> {
        return await database.community.create({
            data,
        });
    }
}
