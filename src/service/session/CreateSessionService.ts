import database from '../../database';
import { ISessionCreate } from './interface';
import { Session } from '@prisma/client';

export class CreateSessionService {
    async execute({ refreshToken }: ISessionCreate): Promise<Session> {
        return database.session.create({
            data: {
                refreshToken,
            },
        });
    }
}
