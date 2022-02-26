import database from '../../database';
import { IServiceExecuteCreate } from './interface';
import { IEnthusiastCreate } from '../../interfaces';
import { hash } from 'bcrypt';
import { HttpException } from '../../error';
import { Enthusiast } from '@prisma/client';

export class CreateEnthusiastService implements IServiceExecuteCreate {
    readonly repository;
    constructor() {
        this.repository = database.enthusiast;
    }
    async execute({ name, email, password, imageUrl }: IEnthusiastCreate): Promise<Enthusiast> {
        if (!name || !email || !password) {
            throw new HttpException('Missing required fields', 400);
        }

        const enthusiastAlreadyExists = await this.repository.findUnique({
            where: { email },
        });

        if (enthusiastAlreadyExists) {
            throw new HttpException('Enthusiast already exists', 400);
        }

        const passwordHash = await hash(password, 8);

        const enthusiast = await this.repository.create({
            data: { name, email, password: passwordHash, imageUrl },
        });

        return enthusiast;
    }
}
