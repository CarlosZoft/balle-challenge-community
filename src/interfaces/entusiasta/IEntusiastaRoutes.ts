import { EnthusiastServices } from '../../services';

export default interface IEntusiastaRoutes {
    readonly router: any;
    readonly enthusiastInstance: EnthusiastServices;
    setUpRoutes(): void;
}
