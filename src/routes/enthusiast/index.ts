import { RouterOptions, Router } from 'express';
import { IEnthusiastRoutes } from './interface';
import { CreateEnthusiast, DeleteEnthusiast, EditEnthusiast, FindEnthusiast } from '../../controller';

class Enthusiast implements IEnthusiastRoutes {
    readonly router: Router;
    readonly createController = new CreateEnthusiast();
    readonly deleteController = new DeleteEnthusiast();
    readonly editController = new EditEnthusiast();
    readonly findController = new FindEnthusiast();
    constructor(options: RouterOptions) {
        this.router = Router(options);
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/', this.findController.handle);
        this.router.get('/:email', this.findController.handle);
        this.router.post('/', this.createController.handle);
        this.router.put('/:email', this.editController.handle);
        this.router.delete('/:email', this.deleteController.handle);
    }
}

export default Enthusiast;
