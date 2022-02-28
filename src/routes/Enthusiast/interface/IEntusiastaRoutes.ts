import { CreateEnthusiast, DeleteEnthusiast, EditEnthusiast, FindEnthusiast } from '../../../controller';
import { Router } from 'express';

export interface IEnthusiastRoutes {
    readonly router: Router;
    readonly createController: CreateEnthusiast;
    readonly deleteController: DeleteEnthusiast;
    readonly editController: EditEnthusiast;
    readonly findController: FindEnthusiast;
    setUpRoutes(): void;
}
