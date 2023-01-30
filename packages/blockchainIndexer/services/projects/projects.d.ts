export declare const getProjects: (initial: boolean) => Promise<import("../../../types").Project[]>;
export declare const getProjectByProjectId: (projectId: string) => import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
export declare const getProjectsForPeriodicalWalletBalanceUpdate: () => import(".prisma/client").PrismaPromise<(import(".prisma/client").Project & {
    network: import(".prisma/client").Network;
})[]>;
export declare const setProjectInitialized: (projectId: string, initialized: boolean) => Promise<import(".prisma/client").Project>;
export declare const setProjectStatus: (projectId: string, status: 'idle' | 'syncing' | 'failed' | 'tracking_holdings') => Promise<import(".prisma/client").Project>;
export declare const getProjectStatus: (projectId: string) => Promise<{
    status: string;
}>;
export declare const canProjectBeInitialized: (projectId: string, lastBlock: number) => Promise<boolean>;
//# sourceMappingURL=projects.d.ts.map