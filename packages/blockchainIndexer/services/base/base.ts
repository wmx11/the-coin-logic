import type Web3 from 'web3';
import type { Contract } from 'web3-eth-contract';
import { prismaClient, PrismaSchema } from '../../../prismaClient';
import config from '../../../web3/config';

export const getIterations = (from: number, to: number, isProjectInitialized: boolean) =>
  Math.ceil((to - from) / (isProjectInitialized ? config.chunks : config.initialChunks));

export const getDecimals = (contract: Contract) => {
  return contract.methods.decimals().call({ from: config.caller });
};

export const getLatestBlock = (web3: Web3) => {
  return web3.eth.getBlockNumber();
};

export const getWalletBalance = (contract: Contract, address: string): Promise<number> => {
  return contract.methods.balanceOf(address).call({ from: config.caller });
};

export const createBlock = (data: PrismaSchema.BlockCreateInput) => {
  return prismaClient.block.create({ data });
};

export const updateBlock = (id: string, data: PrismaSchema.BlockUpdateInput) => {
  return prismaClient.block.update({ where: { id }, data });
};

export const getBlockByProjectId = (projectId: string) => {
  return prismaClient.block.findFirst({
    where: {
      projectId,
    },
  });
};

export const createOrUpdateBlock = (
  id: string,
  create: PrismaSchema.BlockCreateInput,
  update: PrismaSchema.BlockUpdateInput,
) => {
  return prismaClient.block.upsert({
    where: {
      id: id || '',
    },
    create,
    update,
  });
};
