import type { Holders, Projects } from '@prisma/client';
import { getDecimals, getWalletBalance } from '../base';
import { getHoldersWithEnabledProjectsFromDateLowerThan, getWalletByProjectId, updateWallet } from './holders';

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

type UpdateWalletBalanceForProject = {
  cache: Map<string, Cache>;
  project: Omit<Projects, 'id' | 'slug' | 'createdAt' | 'updatedAt'>;
  holder: Holders;
};

const updateWalletBalanceForProject = async ({ cache, project, holder }: UpdateWalletBalanceForProject) => {
  const { rpc, contractAddress, projectId } = project;

  if (!cache.has(projectId)) {
    const web3 = new Web3(rpc as string);
    const contract = new web3.eth.Contract(baseAbi, contractAddress as string);
    const decimals = await getDecimals(contract);
    cache.set(projectId, { decimals, contract });
  }

  const balance = await getWalletBalance(cache.get(projectId)?.contract as Contract, holder.address);
  const wallet = await getWalletByProjectId(projectId);

  const result = await updateWallet(wallet?.id as string, {
    balance: toDecimals(balance, cache.get(projectId)?.decimals) || 0,
  });

  return result;
};

const updateBalancesForRebasingTokens = async () => {
  const holders = await getHoldersWithEnabledProjectsFromDateLowerThan(config.getDateForRebasingTokens());

  const cache = new Map();

  for (const holder of holders) {
    const projects = holder.projects.filter((item) => item.enabled && item.isRebasing && item.trackHolders && item.initialized);

    if (!projects || !projects.length) {
      return null;
    }

    for (const project of projects) {
      await updateWalletBalanceForProject({ holder, project, cache });
      await sleep(config.timeouts.updateBalancesForRebasingTokens);
    }

    await sleep(config.timeouts.updateBalancesForRebasingTokens);
  }
};

export default updateBalancesForRebasingTokens;
