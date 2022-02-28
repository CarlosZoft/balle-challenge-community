import { FindAll, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import type { Community } from '@prisma/client';
import type { IOptionsCommunity, IServiceExecuteCommunity } from './interface';

export class FindCommunityService implements IServiceExecuteCommunity {
    async execute(id: string, { serie }: IOptionsCommunity): Promise<Community[] | Community | null> {
        if (!id) {
            return await new FindAll().execute({ serie });
        }

        const entusiast = await new FindUnique().execute({ id });
        if (!entusiast) {
            throw new HttpException(`Community ${id} not found`, 404);
        }

        return entusiast;
    }
}
