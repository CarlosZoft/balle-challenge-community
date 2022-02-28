import database from '../../database';
import type { ISessionCreate } from './interface';
import type { Session } from '@prisma/client';

export class CreateSessionService {
    async execute({ refreshToken }: ISessionCreate): Promise<Session> {
        return database.session.create({
            data: {
                refreshToken,
            },
        });
    }
}
