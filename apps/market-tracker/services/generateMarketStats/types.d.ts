import type { Pair } from 'tcl-packages/dexscreener/types';

export type MarketStats = {
  price: number;
  pairPrice: number;
  liquidity: number;
  marketCap: number;
  totalSupply: number;
  burnedTokens: number;
  annotation?: string;
  txns: Pair['txns'];
  volume: Pair['volume'];
  fdv: Pair['fdv'];
};

export type HoldersStats = {
  holders: number;
  avgHoldings: number;
  newHolders: number;
  recurringHolders: number;
  leavingHolders: number;
};
