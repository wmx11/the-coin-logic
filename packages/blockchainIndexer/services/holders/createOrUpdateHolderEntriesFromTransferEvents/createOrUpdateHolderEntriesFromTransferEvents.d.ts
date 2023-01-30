import type { Contract } from 'web3-eth-contract';
import { Project } from '../../../../types';
declare type createOrUpdateHolderEntriesFromTransferEvents = {
    project: Project;
    hasHolders: boolean;
    initial: boolean;
    contract: Contract;
    latestBlock: number;
};
declare const createOrUpdateHolderEntriesFromTransferEvents: ({ project, hasHolders, contract, latestBlock, initial, }: createOrUpdateHolderEntriesFromTransferEvents) => Promise<any>;
export default createOrUpdateHolderEntriesFromTransferEvents;
//# sourceMappingURL=createOrUpdateHolderEntriesFromTransferEvents.d.ts.map