import { Enthusiast } from '@prisma/client';
import { IEnthusiastWithToken } from '.';
export interface IServiceExecuteEnthusiast {
    execute(data: unknown): Promise<Enthusiast | Enthusiast[] | null | IEnthusiastWithToken>;
}
