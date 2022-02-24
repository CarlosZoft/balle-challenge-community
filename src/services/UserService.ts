import { IRequest } from '../interfaces';
import type { Request, Response } from 'express';
import IUserService from '../interfaces/user/IUserService';

export default class UserServices implements IUserService {
    readonly repository: any;

    constructor(repository: any) {
        throw new Error('Method not implemented.');
    }
    create({ request, response }: IRequest): void {
        throw new Error('Method not implemented.');
    }
    get({ request, response }: IRequest): void {
        throw new Error('Method not implemented.');
    }
    getOne({ request, response }: IRequest): void {
        throw new Error('Method not implemented.');
    }
    edit({ request, response }: IRequest): void {
        throw new Error('Method not implemented.');
    }
    delete({ request, response }: IRequest): void {
        throw new Error('Method not implemented.');
    }
}
