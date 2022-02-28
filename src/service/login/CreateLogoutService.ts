import { ICreateWithRefresh } from './interfaces';
import { FindUnique, DeleteSession } from '../session/methodsDB';
import { HttpException } from '../../error';

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
