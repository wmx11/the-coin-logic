import type { Holders, Projects } from '@prisma/client';
import { getDecimals, getWalletBalance } from '../base';
import { getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan, getWallets, updateWallet } from './holders';

import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';
import baseAbi from '../../../web3/baseAbi';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import config from '../../config';

type Cache = {
  decimals: number;
  contract: Contract;
};

type UpdateHoldersWalletBalanceByProject = {
  cache: Map<string, Cache>;
  holder: Holders & {
    projects: Omit<Projects, 'id' | 'slug' | 'status' | 'initializedAt' | 'createdAt' | 'updatedAt'>[];
  };
};

const updateHoldersWalletBalanceByProject = async ({ cache, holder }: UpdateHoldersWalletBalanceByProject) => {
  for (const project of holder.projects) {
    const { rpc, contractAddress, projectId } = project;

    if (!cache.has(projectId)) {
      const web3 = new Web3(rpc as string);
      const contract = new web3.eth.Contract(baseAbi, contractAddress as string);
      const decimals = await getDecimals(contract);
      cache.set(projectId, { decimals, contract });
    }

    const balance = await getWalletBalance(cache.get(projectId)?.contract as Contract, holder.address);
    const wallets = await getWallets({ address: holder.address, projectId });

    for (const wallet of wallets) {
      const result = await updateWallet(wallet?.id as string, {
        balance: toDecimals(balance, cache.get(projectId)?.decimals) || 0,
      });
      console.log(result);
      await sleep(config.timeouts.updateBalancesForRebasingTokens);
      return result;
    }
  }
};

const updateBalancesForRebasingTokens = async () => {
  const holders = await getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan(config.getDateForRebasingTokens());

  const cache = new Map();

  for (const holder of holders) {
    await updateHoldersWalletBalanceByProject({ holder, cache });
    await sleep(config.timeouts.updateBalancesForRebasingTokens);
  }
};

export default updateBalancesForRebasingTokens;
