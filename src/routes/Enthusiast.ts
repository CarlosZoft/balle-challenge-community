import { RouterOptions, Router, Express } from 'express';
import { IEnthusiastRoutes } from '../interfaces';
import { EnthusiastServices } from '../services';

class Enthusiast implements IEnthusiastRoutes {
    readonly router: any;
    readonly enthusiastInstance = new EnthusiastServices('');
    constructor(options: RouterOptions) {
        this.router = Router(options);
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/', this.enthusiastInstance.get);
        this.router.get('/:id', this.enthusiastInstance.getOne);
        this.router.post('/', this.enthusiastInstance.create);
        this.router.put('/', this.enthusiastInstance.edit);
        this.router.delete('/', this.enthusiastInstance.delete);
    }
}

export default Enthusiast;
