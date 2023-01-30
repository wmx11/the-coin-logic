import type { MarketStat, Network, Project } from '../../types';
export declare const getEnabledProjects: () => Promise<Project[] | null>;
export declare const getHoldersDataByProjectId: (id: {
    id: string;
}) => Promise<MarketStat | null>;
export declare const getEnabledProjectsForHoldersTracking: () => Promise<Project[] | null>;
export declare const getEnabledAndNotInitializedProjectsForHoldersTracking: () => Promise<Project[] | null>;
export declare const getNetworkBySlug: (slug: {
    slug: string;
}) => Promise<Network | null>;
//# sourceMappingURL=queries.d.ts.map