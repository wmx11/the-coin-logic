import type { Project } from '../types';
declare type ContractProps = {
    rpc: string;
    project: Project;
};
declare const marketStatsContract: ({ rpc, project }: ContractProps) => {
    projectContract: {
        balanceOf: (address: string) => Promise<string>;
        totalSupply: () => Promise<string>;
        decimals: () => Promise<string>;
    };
    getBalance: (address: string) => Promise<string>;
    projectPairContract?: undefined;
    pairStableContract?: undefined;
} | {
    projectContract: {
        balanceOf: (address: string) => Promise<string>;
        totalSupply: () => Promise<string>;
        decimals: () => Promise<string>;
    };
    projectPairContract: {
        balanceOf: (address: string) => Promise<string>;
        totalSupply: () => Promise<string>;
        decimals: () => Promise<string>;
    };
    pairStableContract: {
        balanceOf: (address: string) => Promise<string>;
        totalSupply: () => Promise<string>;
        decimals: () => Promise<string>;
    };
    getBalance: (address: string) => Promise<string>;
};
export default marketStatsContract;
//# sourceMappingURL=marketStatsContract.d.ts.map