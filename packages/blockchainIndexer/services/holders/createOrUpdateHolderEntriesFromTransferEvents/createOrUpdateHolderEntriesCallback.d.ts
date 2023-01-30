import { Contract } from 'web3-eth-contract';
import { Context } from '../../../../utils/iterateWithContext';
declare type ExtendedContext = Context & {
    decimals: number;
    contract: Contract;
    getPagination: (perPage: number, page: number) => {
        results: number;
        page: number;
        pages: number;
        perPage: number;
        offset: number;
    };
    cache: Map<string, {
        balance: number;
    }>;
    projectId: string;
    hasHolders: boolean;
    perPage: number;
};
declare const createOrUpdateHolderEntriesCallback: (context: ExtendedContext) => Promise<ExtendedContext>;
export default createOrUpdateHolderEntriesCallback;
//# sourceMappingURL=createOrUpdateHolderEntriesCallback.d.ts.map