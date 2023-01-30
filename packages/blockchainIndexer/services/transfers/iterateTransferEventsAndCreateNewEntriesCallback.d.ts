import { Contract } from 'web3-eth-contract';
import { Context } from '../../../utils/iterateWithContext';
import type { Block, Project } from '../../../types';
import Web3 from 'web3';
declare type ExtendedContext = Context & {
    decimals: number;
    projectBlock: Block | null;
    from: number;
    to: number;
    contract: Contract;
    web3: Web3;
    project: Project;
    config: {
        caller: string;
        chunks: number;
        initialChunks: number;
    };
};
declare const iterateTransferEventsAndCreateNewEntriesCallback: (context: ExtendedContext) => Promise<{
    from: number;
    to: number;
    iterations: number;
    iteration: number;
    decimals: number;
    projectBlock: Block | null;
    contract: Contract;
    web3: Web3;
    project: Project;
    config: {
        caller: string;
        chunks: number;
        initialChunks: number;
    };
}>;
export default iterateTransferEventsAndCreateNewEntriesCallback;
//# sourceMappingURL=iterateTransferEventsAndCreateNewEntriesCallback.d.ts.map