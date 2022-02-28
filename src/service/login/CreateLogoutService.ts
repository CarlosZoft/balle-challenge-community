import { DeleteSession, FindUnique } from '../session/methodsDB';
import { HttpException } from '../../error';
import type { ICreateWithRefresh } from './interfaces';

export class CreateLogoutService {
    async execute({ refreshToken }: ICreateWithRefresh) {
        const isSectionActive = await new FindUnique().execute({ refreshToken });

        if (!isSectionActive) {
            throw new HttpException('Não há sessões ativas para esse email', 400);
        }

        await new DeleteSession().execute({ refreshToken });

        return { message: 'Logout realizado com sucesso' };
    }
}
