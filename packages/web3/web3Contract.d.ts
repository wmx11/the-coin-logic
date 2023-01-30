import Web3 from 'web3';
import type { Contract } from 'web3-eth-contract';
declare const web3Contract: (rpc: string, address: string) => {
    web3: Web3;
    contract: Contract;
    baseAbi: import("web3-utils").AbiItem[];
};
export default web3Contract;
//# sourceMappingURL=web3Contract.d.ts.map