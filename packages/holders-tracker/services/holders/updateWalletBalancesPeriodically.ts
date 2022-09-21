import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Holder } from '../../../types';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import baseAbi from '../../../web3/baseAbi';
import config from '../../config';
import { getDecimals, getWalletBalance } from '../base';
import { getHolders, getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan, updateHolder } from './holders';

type Cache = {
  decimals: number;
  contract: Contract;
};

type UpdateHoldersWalletBalanceByProject = {
  cache: Map<string, Cache>;
  holder: Holder;
};

const updateHoldersWalletBalanceByProject = async ({ cache, holder }: UpdateHoldersWalletBalanceByProject) => {
  if (!holder.projects) {
    return null;
  }

  for (const project of holder.projects) {
    const { network, contractAddress, id: projectId } = project;

    if (!cache.has(projectId)) {
      const web3 = new Web3(network?.url as string);
      const contract = new web3.eth.Contract(baseAbi, contractAddress as string);
      const decimals = await getDecimals(contract);
      cache.set(projectId, { decimals, contract });
    }

    const balance = await getWalletBalance(cache.get(projectId)?.contract as Contract, holder?.address as string);
    const wallets = await getHolders({ address: holder?.address as string, projects: { every: { id: projectId } } });

    for (const wallet of wallets) {
      const result = await updateHolder(wallet?.id as string, {
        balance: toDecimals(balance, cache.get(projectId)?.decimals) || 0,
      });
      console.log(result);
      await sleep(config.timeouts.updateWalletBalancesPeriodically);
      return result;
    }
  }
};

const updateWalletBalancesPeriodically = async () => {
  const holders = (await getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan(
    config.getDateForRebasingTokens(),
  )) as Holder[];

  const cache = new Map();

  for (const holder of holders) {
    await updateHoldersWalletBalanceByProject({ holder, cache });

    await sleep(config.timeouts.updateWalletBalancesPeriodically);
  }
};

export default updateWalletBalancesPeriodically;
