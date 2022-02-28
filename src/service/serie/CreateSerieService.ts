import { Create, FindUnique } from './methodsDB';
import { Serie } from '@prisma/client';
import { HttpException } from '../../error';
import { ISerieCreate } from '../../interfaces';
import { IServiceExecuteSerie } from './interface';

export class CreateSerieService implements IServiceExecuteSerie {
    async execute({ name, description, imageUrl, yearLaunch }: ISerieCreate): Promise<Serie> {
        console.log({ name, description, imageUrl, yearLaunch });
        if (!name || !description || !yearLaunch) {
            throw new HttpException('Missing required fields', 400);
        }

        const SerieAlreadyExists = await new FindUnique().execute({ name });
        if (SerieAlreadyExists) {
            throw new HttpException('Serie already exists', 400);
        }

        return await new Create().execute({ name, description, imageUrl, yearLaunch });
    }
}
