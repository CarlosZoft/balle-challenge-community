import { Create, FindUnique } from './methodsDB';
import { Enthusiast } from '@prisma/client';
import { hash } from 'bcrypt';
import { HttpException } from '../../error';
import { IEnthusiastCreate } from '../../interfaces';
import { IServiceExecuteCreate } from './interface';

export class CreateEnthusiastService implements IServiceExecuteCreate {
    async execute({ name, email, password, imageUrl }: IEnthusiastCreate): Promise<Enthusiast | any> {
        if (!name || !email || !password) {
            throw new HttpException('Missing required fields', 400);
        }

        const enthusiastAlreadyExists = await new FindUnique().execute({ email });

        if (enthusiastAlreadyExists) {
            throw new HttpException('Enthusiast already exists', 400);
        }

        const passwordHash = await hash(password, 8);

        return await new Create().execute({ name, email, password: passwordHash, imageUrl });
    }
}
