import { DeleteUnique, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import type { Community } from '@prisma/client';
import type { IServiceExecuteCommunity } from './interface';

export class DeleteCommunityService implements IServiceExecuteCommunity {
    async execute(id: string): Promise<Community> {
        if (!id) {
            throw new HttpException('id is required', 400);
        }

        const existsCommunity = await new FindUnique().execute({ id });

        if (!existsCommunity) {
            throw new HttpException('Community not found', 404);
        }

        return await new DeleteUnique().execute({ id });
    }
}
