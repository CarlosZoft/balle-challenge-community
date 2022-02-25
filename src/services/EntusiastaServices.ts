import { IRequest } from '../interfaces';
import { IEnthusiastService } from '../interfaces';

export default class EnthusiastServices implements IEnthusiastService {
    readonly repository: any;

    constructor(repository: any) {
        this.repository = repository;
    }
    create({ request, response }: IRequest): void {
        const {} = request.body;

        response.send('success');
    }
    get({ request, response }: IRequest): void {
        response.send('success');
    }
    getOne({ request, response }: IRequest): void {
        response.send('success');
    }
    edit({ request, response }: IRequest): void {
        response.send('success');
    }
    delete({ request, response }: IRequest): void {
        response.send('success');
    }
}
