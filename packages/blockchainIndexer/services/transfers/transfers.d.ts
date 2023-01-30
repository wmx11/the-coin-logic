import type { Contract } from 'web3-eth-contract';
import type { Pagination } from '../types';
import type { Project } from '../../../types';
import { PrismaSchema } from '../../../prismaClient';
declare type GetPastTransferEvents = {
    contract: Contract;
    fromBlock: number;
    toBlock: number;
};
declare type GetTransferType = {
    project: Project;
    fromAddress: string;
    toAddress: string;
};
export declare const getPastTransferEvents: ({ contract, fromBlock, toBlock }: GetPastTransferEvents) => Promise<import("web3-eth-contract").EventData[]>;
export declare const addTransferEvent: (data: PrismaSchema.TransferCreateInput) => PrismaSchema.Prisma__TransferClient<import(".prisma/client").Transfer>;
export declare const getTransferType: ({ project, fromAddress, toAddress }: GetTransferType) => 0 | 1 | 2 | 3 | 4 | 5 | -1;
export declare const getTransferEventsFromPreviousBlockByProjectId: (projectId: string, previousBlock: number) => import(".prisma/client").PrismaPromise<import(".prisma/client").Transfer[]>;
export declare const getTransferEventsByProjectId: (projectId: string, pagination?: Pagination) => import(".prisma/client").PrismaPromise<import(".prisma/client").Transfer[]>;
export declare const getTransferEventsCountByProjectId: (projectId: string) => import(".prisma/client").PrismaPromise<number>;
export declare const getTransferEventsCountFromPreviousBlock: (projectId: string) => Promise<number>;
export declare const getTransferEventsFromPreviousBlock: (projectId: string, pagination?: Pagination) => Promise<import(".prisma/client").Transfer[]>;
export declare const getTransferEventByHashAmountAndProjectId: (hash: string, amount: number, projectId: string) => Promise<import(".prisma/client").Transfer>;
export {};
//# sourceMappingURL=transfers.d.ts.map