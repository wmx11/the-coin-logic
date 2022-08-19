import balanceOf from './balanceOf';
import { Contract } from 'web3-eth-contract';
import { Resolver } from './types';
import getResolvedBalance from './getResolvedBalance';

const resolveBalanceOf = async ({ cache, data, results, base, context }: Resolver): Promise<void> => {
  const balance = await balanceOf(cache?.contract as Contract, data.arguments.balanceOf as string);
  const object = {
    ...base,
    ...getResolvedBalance({ data, balance, cache, context }),
  };
  results.push(object);
};

export default resolveBalanceOf;
