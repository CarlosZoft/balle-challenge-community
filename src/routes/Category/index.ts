import { CreateCategory, DeleteCategory, EditCategory, FindCategory } from '../../controller';
import { Router } from 'express';
import type { RouterOptions } from 'express';

export default class Category {
    readonly router: Router;
    readonly createController = new CreateCategory();
    readonly deleteController = new DeleteCategory();
    readonly editController = new EditCategory();
    readonly findController = new FindCategory();
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
