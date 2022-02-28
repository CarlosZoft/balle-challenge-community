import database from '../../../database';
import type { ISessionCreate } from '../interface';
import type { Session } from '@prisma/client';

export class DeleteSession {
    async execute({ refreshToken }: ISessionCreate): Promise<Session | null> {
        return await database.session.delete({
            where: {
                refreshToken,
            },
        });
    }
}
