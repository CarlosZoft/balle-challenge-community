import database from '../../../database';
import { ISessionCreate } from '../interface';
import { Session } from '@prisma/client';

export class DeleteSession {
    async execute({ refreshToken }: ISessionCreate): Promise<Session | null> {
        return await database.session.delete({
            where: {
                refreshToken,
            },
        });
    }
}
