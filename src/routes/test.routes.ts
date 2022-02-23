import { RouterOptions, Router, Express } from 'express';
import { testGet } from '../services';

class RouterClass {
    readonly router: any;
    constructor(options: RouterOptions) {
        this.router = Router(options);
    }
}

export default new RouterClass({}).router;
