import { CreateSerie, DeleteSerie, EditSerie, FindSerie } from '../../controller';
import { Router } from 'express';
import type { RouterOptions } from 'express';

export default class Serie {
    readonly router: Router;
    readonly createController = new CreateSerie();
    readonly deleteController = new DeleteSerie();
    readonly editController = new EditSerie();
    readonly findController = new FindSerie();
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
