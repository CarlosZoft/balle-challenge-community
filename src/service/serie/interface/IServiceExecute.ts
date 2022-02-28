import { Serie } from '@prisma/client';
export interface IServiceExecuteSerie {
    execute(data: unknown): Promise<Serie | Serie[] | null>;
}
