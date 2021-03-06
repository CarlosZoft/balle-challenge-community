import { FindUnique } from '../session/methodsDB';
import { HttpException } from '../../error';
import { JWT } from '../../shared';
import type { ICreateWithRefresh, IToken } from './interfaces';

export class CreateRefreshService {
    async execute({ refreshToken }: ICreateWithRefresh) {
        const { valid, payload }: IToken = await JWT.validateToken(refreshToken);

        if (!valid) {
            throw new HttpException('Invalid token', 400);
        }

        const isSessionValid = await new FindUnique().execute({ refreshToken });
        if (!isSessionValid) {
            throw new HttpException('Invalid token', 400);
        }

        const newToken = JWT.createToken(payload);
        return { token: newToken };
    }
}
