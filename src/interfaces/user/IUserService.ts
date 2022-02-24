import { IRequest } from '../IHtpp';

export default interface IUserService {
    readonly repository: any;

    create({ request, response }: IRequest): void;
    get({ request, response }: IRequest): void;
    getOne({ request, response }: IRequest): void;
    edit({ request, response }: IRequest): void;
    delete({ request, response }: IRequest): void;
}
