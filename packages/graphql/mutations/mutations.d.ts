import type { MarketStat, SocialStat } from '../../types';
export declare const createMarketStats: (marketStats: MarketStat) => Promise<MarketStat | null>;
export declare const createSocialStats: (socialStats: SocialStat) => Promise<SocialStat | null>;
declare type UpdateInitializedStatus = {
    id: string;
    initialized: boolean;
};
export declare const updateProjectInitializedStatus: (initializedStatus: UpdateInitializedStatus) => Promise<UpdateInitializedStatus | null>;
export {};
//# sourceMappingURL=mutations.d.ts.map