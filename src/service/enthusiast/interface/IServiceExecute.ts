import { IEnthusiastCreate } from '../../../interfaces';
export interface IServiceExecuteCreate {
    readonly repository: any;

    execute(enthusiast: IEnthusiastCreate): Promise<void>;
}
