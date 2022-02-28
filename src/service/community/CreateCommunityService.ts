import { Create, FindUnique } from './methodsDB';
import { FindUnique as FindUniqueSerie } from '../serie/methodsDB';
import { Community } from '@prisma/client';
import { HttpException } from '../../error';
import { ICommunityCreate } from '../../interfaces';
import { IServiceExecuteCommunity } from './interface';

export class CreateCommunityService implements IServiceExecuteCommunity {
    async execute({ name, description, imageUrl, idSerie }: ICommunityCreate): Promise<Community> {
        if (!name || !description || !idSerie) {
            throw new HttpException('Missing required fields', 400);
        }

        const CommunityAlreadyExists = await new FindUnique().execute({ name, idSerie });
        if (CommunityAlreadyExists) {
            throw new HttpException('Community already exists', 400);
        }

        const existsSerie = await new FindUniqueSerie().execute({ id: idSerie });
        if (!existsSerie) {
            throw new HttpException('Serie not found', 400);
        }

        return await new Create().execute({ name, description, imageUrl, idSerie });
    }
}
