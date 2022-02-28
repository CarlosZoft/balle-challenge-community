import { FindUnique } from './methodsDB';
import { HttpException } from '../../error';
import { UpdateUnique } from './methodsDB';
import type { Serie } from '@prisma/client';
import type { ISerieEdit } from './interface/ISerie';

export class EditSerieService {
    async execute(id: string, { name, description, imageUrl, yearLaunch, owner }: ISerieEdit): Promise<Serie> {
        if (!id) {
            throw new HttpException('Id is required', 400);
        }

        const existsSerie = await new FindUnique().execute({ id });
        if (!existsSerie) {
            throw new HttpException(`Serie not found`, 404);
        }

        const nameAlreadyExists = await new FindUnique().execute({ name });
        if (nameAlreadyExists) {
            throw new HttpException(`Serie ${name} already exists`, 400);
        }

        const dataEdit: ISerieEdit = {};

        if (name) dataEdit.name = name;
        if (description) dataEdit.description = description;
        if (imageUrl) dataEdit.imageUrl = imageUrl;
        if (yearLaunch) dataEdit.yearLaunch = yearLaunch;
        if (owner) dataEdit.owner = owner;

        return await new UpdateUnique().execute(id, dataEdit);
    }
}
