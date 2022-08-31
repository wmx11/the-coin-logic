import { PrismaClient } from '../../apps/admin/node_modules/.prisma/client';

export const prismaClient = new PrismaClient();

export { Prisma as PrismaSchema } from '../../apps/admin/node_modules/.prisma/client';

export * from '../../apps/admin/node_modules/.prisma/client';
