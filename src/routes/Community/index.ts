import { CreateCommunity, DeleteCommunity, EditCommunity, FindCommunity } from '../../controller';
import { Router } from 'express';
import type { RouterOptions } from 'express';

export default class Community {
    readonly router: Router;
    readonly createController = new CreateCommunity();
    readonly deleteController = new DeleteCommunity();
    readonly editController = new EditCommunity();
    readonly findController = new FindCommunity();
    constructor(options: RouterOptions) {
        this.router = Router(options);
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/', this.findController.handle);
        this.router.get('/:id', this.findController.handle);
        this.router.post('/', this.createController.handle);
        this.router.put('/:id', this.editController.handle);
        this.router.delete('/:id', this.deleteController.handle);
    }
}
