import { Enthusiast } from '@prisma/client';
import { FindUnique } from './methodsDB';
import { hash } from 'bcrypt';
import { HttpException } from '../../error';
import { IEnthusiastEdit } from './interface';
import { UpdateUnique } from './methodsDB';

export class EditEnthusiastService {
    async execute(id: string, { name, email, password, imageUrl }: IEnthusiastEdit): Promise<Enthusiast> {
        if (!id) {
            throw new HttpException('Id is required', 400);
        }

        const existsEntusiast = await new FindUnique().execute({ id });
        if (!existsEntusiast) {
            throw new HttpException('Enthusiast not found', 404);
        }

        const existsEmail = await new FindUnique().execute({ email });
        if (existsEmail) {
            throw new HttpException('Email already in use', 400);
        }

        const dataEdit: IEnthusiastEdit = {};
        if (name) dataEdit.name = name;
        if (email) dataEdit.email = email;
        if (password) dataEdit.password = await hash(password, 8);
        if (imageUrl) dataEdit.imageUrl = imageUrl;

        return await new UpdateUnique().execute(id, dataEdit);
    }
}
