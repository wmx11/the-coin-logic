import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import baseAbi from '../../../web3/baseAbi';
import config from '../../config';
import { getDecimals, getWalletBalance } from '../base';
import { getProjectsForPeriodicalWalletBalanceUpdate } from '../projects';
import { getHoldersByProjectIdFromDateLowerThan, updateHolder } from './holders';

type Cache = {
  decimals: number;
  contract: Contract;
};

const updateWalletBalancesPeriodically = async () => {
  const cache: Map<string, Cache> = new Map();

  const projects = await getProjectsForPeriodicalWalletBalanceUpdate();

  for (const project of projects) {
    const { network, contractAddress, id: projectId } = project;

    if (!cache.has(projectId)) {
      const web3 = new Web3(network?.url as string);
      const contract = new web3.eth.Contract(baseAbi, contractAddress as string);
      const decimals = await getDecimals(contract);
      cache.set(projectId, { decimals, contract });
    }

    const wallets = await getHoldersByProjectIdFromDateLowerThan(projectId, config.getDateForRebasingTokens());

    for (const wallet of wallets) {
      const balance = await getWalletBalance(cache.get(projectId)?.contract as Contract, wallet?.address as string);

      const result = await updateHolder(wallet?.id as string, {
        balance: toDecimals(balance, cache.get(projectId)?.decimals) || 0,
      });

      console.log(project.name, '===>', result);
      await sleep(config.timeouts.updateWalletBalancesPeriodically);
    }
  }
};

export default updateWalletBalancesPeriodically;
