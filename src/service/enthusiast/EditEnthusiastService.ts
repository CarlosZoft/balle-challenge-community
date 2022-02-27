import { Enthusiast } from '@prisma/client';
import { FindUnique } from './methodsDB';
import { hash } from 'bcrypt';
import { HttpException } from '../../error';
import { IEnthusiastEdit } from './interface';
import { UpdateUnique } from './methodsDB';

export class EditEnthusiastService {
    async execute({ name, email, password, imageUrl }: IEnthusiastEdit): Promise<Enthusiast | any> {
        if (!email) {
            throw new HttpException('Id is required', 400);
        }

        const existsEntusiast = await new FindUnique().execute({ email });
        if (!existsEntusiast) {
            throw new HttpException('Enthusiast not found', 404);
        }
        const dataEdit: IEnthusiastEdit = { email };
        if (name) dataEdit.name = name;
        if (password) dataEdit.password = await hash(password, 8);
        if (imageUrl) dataEdit.imageUrl = imageUrl;

        return await new UpdateUnique().execute(dataEdit);
    }
}
