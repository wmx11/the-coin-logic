import type { Contract } from 'web3-eth-contract';
import type { Project } from '../../../types';
import Web3 from 'web3';
declare type CreateNewTransferEventEntries = {
    contract: Contract;
    web3: Web3;
    iterations: number;
    fromBlock: number;
    project: Project;
};
declare const createNewTransferEventEntries: ({ contract, web3, iterations, fromBlock, project, }: CreateNewTransferEventEntries) => Promise<void>;
export default createNewTransferEventEntries;
//# sourceMappingURL=createNewTransferEventEntries.d.ts.map