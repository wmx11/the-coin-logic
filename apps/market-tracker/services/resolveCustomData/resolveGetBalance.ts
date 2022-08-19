import Web3 from 'web3';
import getBalance from './getBalance';
import getResolvedBalance from './getResolvedBalance';
import { Resolver } from './types';

const resolveGetBalance = async ({ cache, data, results, base, context }: Resolver): Promise<void> => {
  const balance = await getBalance(cache?.web3 as Web3, data.arguments.getBalance as string);
  const object = {
    ...base,
    ...getResolvedBalance({ data, balance, cache, context }),
  };
  results.push(object);
};

export default resolveGetBalance;
