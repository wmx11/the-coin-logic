const Web3 = require('web3');
import { Contract as ContractType } from 'web3-eth-contract';
import { Project } from '../types/project';
import baseAbi from './baseAbi';
import config from './config';

type ContractProps = {
  rpc: string;
  project: Project;
};

type CommonCalls = {
  balanceOf: (address: string) => Promise<string>;
  totalSupply: () => Promise<string>;
  decimals: () => Promise<string>;
};

type ContractReturnType = {
  projectContract: CommonCalls;
  projectPairContract: CommonCalls;
  pairStableContract: CommonCalls;
  getBalance: (address: string) => Promise<string>;
};

const commonCalls = (contract: ContractType): CommonCalls => {
  return {
    balanceOf: (address: string) => contract.methods.balanceOf(address).call({ from: config.caller }),
    totalSupply: () => contract.methods.totalSupply().call({ from: config.caller }),
    decimals: () => contract.methods.decimals().call({ from: config.caller }),
  };
};

const Contract = function ({ rpc, project }: ContractProps) {
  if (!rpc || !project) {
    return null;
  }

  /** Initiates the Web3 with the given RPC endpoint */
  const web3 = new Web3(rpc);

  /** Initiates the Project Contract */
  const projectContract = new web3.eth.Contract(baseAbi, project.contractAddress);

  /** Initiates the Project Pair Contract (TITANO/BNB) */
  const projectPairContract = new web3.eth.Contract(baseAbi, project.stableLiquidityPair.pairToken[0].address);

  /** Initiates the Pair Stable (BNB/BUSD) */
  const pairStableContract = new web3.eth.Contract(baseAbi, project.stableLiquidityPair.pairToken[1].address);

  return {
    projectContract: { ...commonCalls(projectContract) },
    projectPairContract: { ...commonCalls(projectPairContract) },
    pairStableContract: { ...commonCalls(pairStableContract) },
    getBalance: (address: string) => web3.eth.getBalance(address),
  };
} as any as { new ({ rpc, project }: ContractProps): ContractReturnType };

export default Contract;
