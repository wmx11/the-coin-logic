import { Pair } from './types';
export declare const getPairInformationByChainId: (chainId: string, pairAddresses: string) => Promise<Pair[] | null>;
export declare const getTokenInformationByTokenAddress: (tokenAddresses: string) => Promise<Pair[] | null>;
export declare const getPairsMatchingQuery: (query: string) => Promise<Pair[] | null>;
//# sourceMappingURL=api.d.ts.map