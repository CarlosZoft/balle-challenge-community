import { CreateLogin, CreateLogout, CreateRefresh } from '../../controller';
import { Router } from 'express';
import type { RouterOptions } from 'express';

export default class Login {
    readonly router: Router;
    readonly login = new CreateLogin();
    readonly logout = new CreateLogout();
    readonly refresh = new CreateRefresh();
    constructor(options: RouterOptions) {
        this.router = Router(options);
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.post('/', this.login.handle);
        this.router.delete('/:token', this.logout.handle);
        this.router.post('/refresh', this.refresh.handle);
    }
}
