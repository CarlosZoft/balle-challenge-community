import type { Enthusiast } from '@prisma/client';
import type { IEnthusiastWithToken } from '.';
export interface IServiceExecuteEnthusiast {
    execute(data: unknown): Promise<Enthusiast | Enthusiast[] | null | IEnthusiastWithToken>;
}
