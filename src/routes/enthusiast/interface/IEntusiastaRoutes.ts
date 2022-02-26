import { CreateEnthusiast, DeleteEnthusiast, EditEnthusiast, FindEnthusiast } from '../../../controller';

export interface IEnthusiastRoutes {
    readonly router: any;
    readonly createController: CreateEnthusiast;
    readonly deleteController: DeleteEnthusiast;
    readonly editController: EditEnthusiast;
    readonly findController: FindEnthusiast;
    setUpRoutes(): void;
}
