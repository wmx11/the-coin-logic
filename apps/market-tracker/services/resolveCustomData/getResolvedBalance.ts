import toDecimals from 'tcl-packages/utils/toDecimals';
import { Resolver } from './types';

type ExtendedResolver = Omit<Resolver, 'results' | 'base'> & { balance: string };

const getResolvedBalance = ({ data, balance, cache, context }: ExtendedResolver) => {  
  const decimals = data.arguments.getBalanceDecimals || cache.decimals;
  const parsedBalance = toDecimals(balance, decimals);
  const results = { value: toDecimals(parsedBalance, decimals), withPairPrice: 0, withPrice: 0 };
  
  const getAppliedPrice = (key: 'tokenPrice' | 'pairPrice') => (context ? (context?.[key] as number) : 1);

  if (data.applyPrice) {
    results.withPrice = toDecimals(parsedBalance * getAppliedPrice('tokenPrice'), decimals);
  }

  if (data.applyPairPrice) {
    results.withPairPrice = toDecimals(parsedBalance * getAppliedPrice('pairPrice'), decimals);
  }

  return results;
};

export default getResolvedBalance;
