import prisma from '../../../prisma';
import config from '../../../web3/config';
import type Web3 from 'web3';
import type { Contract } from 'web3-eth-contract';
import type { Prisma } from '@prisma/client';

export const getIterations = (from: number, to: number) => Math.ceil((to - from) / 2000);

export const getLatestBlock = (web3: Web3) => {
  return web3.eth.getBlockNumber();
};

export const getWalletBalance = (contract: Contract, address: string): Promise<number> => {
  return contract.methods.balanceOf(address).call({ from: config.caller });
};

export const createBlock = (data: Prisma.BlocksCreateInput) => {
  return prisma.blocks.create({ data });
};

export const updateBlock = (id: string, data: Prisma.BlocksUpdateInput) => {
  return prisma.blocks.update({ where: { id }, data });
};

export const getBlockByProjectId = (projectId: string) => {
  return prisma.blocks.findFirst({
    where: {
      projectId,
    },
  });
};

export const createOrUpdateBlock = (id: string, create: Prisma.BlocksCreateInput, update: Prisma.BlocksUpdateInput) => {
  return prisma.blocks.upsert({
    where: {
      id: id || '',
    },
    create,
    update,
  });
};
