import { RouterOptions, Router, Express } from 'express';
import { IUserService, IUserRoutes } from '../interfaces';
import { UserService } from '../services';

class User implements IUserRoutes {
    readonly router: any;
    readonly userInstance = new UserService('');
    constructor(options: RouterOptions) {
        this.router = Router(options);
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/user', this.userInstance.get);
        this.router.get('/user/:id', this.userInstance.getOne);
        this.router.post('/', this.userInstance.create);
        this.router.put('/', this.userInstance.edit);
        this.router.delete('/', this.userInstance.delete);
    }
}

export default User;
