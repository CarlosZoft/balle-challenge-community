import { Category } from '@prisma/client';
export interface IServiceExecuteCategory {
    execute(data: unknown): Promise<Category | Category[] | null>;
}
