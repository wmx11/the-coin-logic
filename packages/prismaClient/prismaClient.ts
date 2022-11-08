import { PrismaClient } from '@prisma/client';

export const prismaClient = typeof window === 'undefined' && new PrismaClient();

export { Prisma as PrismaSchema } from '@prisma/client';

export * from '@prisma/client';
