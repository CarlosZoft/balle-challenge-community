import database from '../../../database';
import type { Community } from '@prisma/client';
import { IOptionsCommunity, IServiceExecuteCommunity } from '../interface';

export class FindAll implements IServiceExecuteCommunity {
    async execute({ serie, enthusiast }: IOptionsCommunity): Promise<Community[] | null> {
        const includeSerie = serie ? true : false;
        const includeEnthusiast = enthusiast ? true : false;
        return await database.community.findMany({
            include: {
                serie: includeSerie,
                enthusiasts: includeEnthusiast,
            },
        });
    }
}
