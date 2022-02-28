import { ICreateLogin } from './interfaces';
import { FindUnique } from '../enthusiast/methodsDB';
import { HttpException } from '../../error';
import { CreateSessionService } from '../session';
import { Bcrypt, JWT } from '../../shared';

export class CreateLoginService {
    async execute({ email, password }: ICreateLogin) {
        const enthusiast = await new FindUnique().execute({ email });
        if (!enthusiast) {
            throw new HttpException('Credenciais inválidas', 401);
        }

        const isPasswordValid = await Bcrypt.validateData(password, enthusiast.password);
        if (!isPasswordValid) {
            throw new HttpException('Credenciais inválidas', 401);
        }

        const tokenPayload = { id: enthusiast.id };
        const token = JWT.createToken(tokenPayload, { expiresIn: '3600s' });
        const refreshToken = JWT.createToken(tokenPayload);

        const serviceSession = new CreateSessionService();
        await serviceSession.execute({ refreshToken });

        const { name: enthusiastName, email: enthusiastEmail } = enthusiast;

        return {
            token,
            refreshToken,
            enthusiast: { name: enthusiastName, email: enthusiastEmail },
        };
    }
}
