import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

type Base = {
  label: string;
  address: string;
  description?: string;
  ticker?: string;
};

export type CustomData = Base & {
  network: string;
  method: 'getBalance' | 'balanceOf';
  applyPairPrice?: boolean;
  applyPrice?: boolean;
  arguments: {
    getBalance?: string;
    getBalanceDecimals?: number;
    balanceOf?: string;
  };
};

export type CustomDataResults = Base & {
  value: number | string | undefined;
  customDataAddress: string;
  withPairPrice?: number;
  withPrice?: number;
};

export type Context = {
  pairPrice?: number;
  tokenPrice?: number;
};

export type Cache = { web3: Web3; contract: Contract; decimals: number };

export type Resolver = {
  cache: Cache;
  data: CustomData;
  results: CustomDataResults[];
  base: CustomDataResults;
  context?: Context;
};
