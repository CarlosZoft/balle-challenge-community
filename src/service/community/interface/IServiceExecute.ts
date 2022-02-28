import type { Community } from '@prisma/client';
export interface IServiceExecuteCommunity {
    execute(data: unknown, options?: unknown): Promise<Community | Community[] | null>;
}
