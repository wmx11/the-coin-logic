import type Web3 from 'web3';
import type { Contract } from 'web3-eth-contract';
import { PrismaSchema } from '../../../prismaClient';
export declare const getIterations: (from: number, to: number, isProjectInitialized: boolean) => number;
export declare const getDecimals: (contract: Contract) => any;
export declare const getLatestBlock: (web3: Web3) => Promise<number>;
export declare const getWalletBalance: (contract: Contract, address: string) => Promise<number>;
export declare const createBlock: (data: PrismaSchema.BlockCreateInput) => PrismaSchema.Prisma__BlockClient<import(".prisma/client").Block>;
export declare const updateBlock: (id: string, data: PrismaSchema.BlockUpdateInput) => PrismaSchema.Prisma__BlockClient<import(".prisma/client").Block>;
export declare const getBlockByProjectId: (projectId: string) => PrismaSchema.Prisma__BlockClient<import(".prisma/client").Block>;
export declare const createOrUpdateBlock: (id: string, create: PrismaSchema.BlockCreateInput, update: PrismaSchema.BlockUpdateInput) => PrismaSchema.Prisma__BlockClient<import(".prisma/client").Block>;
//# sourceMappingURL=base.d.ts.map