import { IEnthusiastCreate } from '../../../interfaces';
import { Enthusiast } from '@prisma/client';
export interface IServiceExecuteCreate {
    execute(enthusiast: IEnthusiastCreate): Promise<Enthusiast>;
}
