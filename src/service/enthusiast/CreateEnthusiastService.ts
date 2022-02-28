import { Create, FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { CreateSessionService } from '../session';
import { Bcrypt, JWT } from '../../shared';
import type { IEnthusiastCreate } from '../../interfaces';
import type { IServiceExecuteEnthusiast, IEnthusiastWithToken } from './interface';

export class CreateEnthusiastService implements IServiceExecuteEnthusiast {
    async execute({ name, email, password, imageUrl }: IEnthusiastCreate): Promise<IEnthusiastWithToken> {
        if (!name || !email || !password) {
            throw new HttpException('Missing required fields', 400);
        }

        const enthusiastAlreadyExists = await new FindUnique().execute({ email });

        if (enthusiastAlreadyExists) {
            throw new HttpException('Enthusiast already exists', 400);
        }

        const passwordHash = await Bcrypt.ecrypt(password);

        const enthusiast = await new Create().execute({ name, email, password: passwordHash, imageUrl });

        const tokenPayload = { id: enthusiast.id };

        const token = JWT.createToken(tokenPayload, {
            expiresIn: '3600s',
        });

        const refreshToken = JWT.createToken(tokenPayload);

        await new CreateSessionService().execute({ refreshToken });

        const { name: nameEnthusiast, email: emailEnthusiast } = enthusiast;

        return {
            token,
            refreshToken,
            enthusiast: { name: nameEnthusiast, email: emailEnthusiast },
        };
    }
}
