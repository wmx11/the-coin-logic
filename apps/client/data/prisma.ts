import { prismaClient, PrismaClient } from 'tcl-packages/prismaClient';

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = prismaClient as PrismaClient;
  } else {
    if (!global.prisma) {
      global.prisma = prismaClient as PrismaClient;
    }

    prisma = global.prisma;
  }
}
//@ts-ignore
export default prisma;
