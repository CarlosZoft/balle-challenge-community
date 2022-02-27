import { Enthusiast } from '@prisma/client';
export interface IServiceExecuteEnthusiast {
    execute(data: unknown): Promise<Enthusiast | Enthusiast[] | null>;
}
