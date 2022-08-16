import Web3 from 'web3';
import sleep from '../../../utils/sleep';
import baseAbi from '../../../web3/baseAbi';
import { getWalletBalance } from '../base';
import { getHoldersWithEnabledProjectsFromTime, updateWallet } from './holders';
import { sub } from 'date-fns';

const updateBalancesForRebasingTokens = async () => {
  const holders = await getHoldersWithEnabledProjectsFromTime(sub(new Date(), { hours: 1 }));

  for (const holder of holders) {
    const project = holder.projects;
    const web3 = new Web3(project?.rpc as string);
    const contract = new web3.eth.Contract(baseAbi, project?.contractAddress as string);

    const balance = await getWalletBalance(contract, holder.address);

    await updateWallet(holder.id, {
      balance,
    });

    // 11 per s, 667 per min, 40k per hour, 200k per day
    await sleep(90);
  }
};

export default updateBalancesForRebasingTokens;
