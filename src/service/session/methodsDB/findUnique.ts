import database from '../../../database';
import type { ISessionCreate } from '../interface';
import type { Session } from '@prisma/client';

export class FindUnique {
    async execute({ refreshToken }: ISessionCreate): Promise<Session | null> {
        return await database.session.findUnique({
            where: {
                refreshToken,
            },
        });
    }
}
