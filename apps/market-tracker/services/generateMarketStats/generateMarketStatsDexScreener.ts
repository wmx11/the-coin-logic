import { getPairInformationByChainId } from 'tcl-packages/dexscreener';
import { Project } from 'tcl-packages/types';
import generateMarketStatsDefault from './generateMarketStatsDefault';
import { MarketStats } from './types';

type ReturnTypeAsync<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R> ? R : any;

const generateMarketStatsDexScreener = async (
  project: Project,
  defaultMarketStatsGenerator: ReturnTypeAsync<typeof generateMarketStatsDefault>,
): Promise<MarketStats | null> => {
  const chainId = project.network.slug;
  const pairAddress = project.pairAddress;

  const data = await getPairInformationByChainId(chainId, pairAddress);

  if (!data || !data.length) {
    return null;
  }

  const pair = data[0];

  const totalSupply = await defaultMarketStatsGenerator.supply.getTotalSupply();
  const burnedTokens = await defaultMarketStatsGenerator.supply.getBurnedTokens();
  const marketCap = parseFloat(pair.priceUsd) * totalSupply;

  return {
    price: parseFloat(pair.priceUsd),
    txns: pair.txns,
    volume: pair.volume,
    fdv: pair.fdv,
    liquidity: pair.liquidity.usd / 2,
    pairPrice: parseFloat(pair.priceUsd) / parseFloat(pair.priceNative),
    marketCap,
    totalSupply,
    burnedTokens,
  };
};

export default generateMarketStatsDexScreener;
