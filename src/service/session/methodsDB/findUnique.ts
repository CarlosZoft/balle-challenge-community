import database from '../../../database';
import { ISessionCreate } from '../interface';
import { Session } from '@prisma/client';

export class FindUnique {
    async execute({ refreshToken }: ISessionCreate): Promise<Session | null> {
        return await database.session.findUnique({
            where: {
                refreshToken,
            },
        });
    }
}
