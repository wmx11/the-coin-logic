import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

export { Prisma as PrismaSchema } from '@prisma/client';

export * from '@prisma/client';
