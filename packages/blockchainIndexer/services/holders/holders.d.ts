import { PrismaSchema } from '../../../prismaClient';
import type { Pagination } from '../types';
export declare const getHoldersCountByProjectIdFrom: (projectId: string, from: number) => import(".prisma/client").PrismaPromise<number>;
export declare const getAverageHoldingsByProjectId: (projectId: string) => Promise<number>;
export declare const getHolder: (address: string) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const getHolderByProjectIdAndAddress: (projectId: string, address: string) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const getHoldersByProjectId: (projectId: string, pagination?: Pagination) => import(".prisma/client").PrismaPromise<import(".prisma/client").Holder[]>;
export declare const getHolderByAddress: (address: string) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const getHoldersCountByProjectId: (projectId: string) => import(".prisma/client").PrismaPromise<number>;
export declare const getHoldersCount: () => import(".prisma/client").PrismaPromise<number>;
export declare const getHolders: (where: PrismaSchema.HolderWhereInput) => import(".prisma/client").PrismaPromise<import(".prisma/client").Holder[]>;
export declare const addHolder: (data: PrismaSchema.HolderCreateInput) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const updateHolder: (id: string, data: PrismaSchema.HolderUpdateInput) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const createOrUpdateHolder: (id: string, create: PrismaSchema.HolderCreateInput, update: PrismaSchema.HolderUpdateInput) => PrismaSchema.Prisma__HolderClient<import(".prisma/client").Holder>;
export declare const getHoldersByProjectIdFromDateLowerThan: (projectId: string, date: Date) => import(".prisma/client").PrismaPromise<import(".prisma/client").Holder[]>;
export declare const getNewHoldersCountByProjectId: (projectId: string, tokenAmount?: number) => Promise<number>;
export declare const getLeavingHoldersCountByProjectId: (projectId: string, tokenAmount?: number) => Promise<number>;
export declare const getRecurringHoldersCountByProjectId: (projectId: string, tokenAmount?: number) => Promise<number>;
//# sourceMappingURL=holders.d.ts.map