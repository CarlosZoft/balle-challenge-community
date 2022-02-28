import database from '../../../database';
import type { Community } from '@prisma/client';
import type { ICommunityFind } from '../interface';
import type { IServiceExecuteCommunity } from '../interface';

export class FindUnique implements IServiceExecuteCommunity {
    async execute({ id, name, idSerie }: ICommunityFind): Promise<Community | null> {
        const filter: ICommunityFind = {};
        if (id) {
            filter.id = id;
        } else {
            filter.name = name;
            filter.idSerie = idSerie;
        }

        return await database.community.findFirst({
            where: filter,
            include: { serie: true },
        });
    }
}
