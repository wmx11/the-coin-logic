import { Network } from 'tcl-packages/types';
import sleep from 'tcl-packages/utils/sleep';
import baseAbi from 'tcl-packages/web3/baseAbi';
import config from 'tcl-packages/web3/config';
import Web3 from 'web3';
import { Cache, CustomData } from './types';

type SetCache = {
  cache: Map<string, Cache>;
  network: Network;
  data: CustomData;
};

const setCache = async ({ cache, network, data }: SetCache): Promise<void | null> => {
  if (cache.has(network.slug as string)) {
    return null;
  }

  const web3 = new Web3(network?.url as string);
  const contract = new web3.eth.Contract(baseAbi, data.address);
  const decimals = await contract.methods.decimals().call({ from: config.caller });

  cache.set(network.slug as string, { web3, contract, decimals });

  await sleep(5);
};

export default setCache;
