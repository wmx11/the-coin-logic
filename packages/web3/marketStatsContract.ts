import Web3 from 'web3';

import baseAbi from './baseAbi';
import nftAbi from './nftAbi';
import config from './config';

import type { Contract as ContractType } from 'web3-eth-contract';
import type { Project } from '../types';
import pairTokenAddressResolver from '../utils/pairTokenAddressResolver';
import { AbiItem } from 'web3-utils';

type CommonCalls = {
  balanceOf: (address: string) => Promise<string>;
  totalSupply: () => Promise<string>;
  decimals: () => Promise<string>;
};

const commonCalls = (contract: ContractType): CommonCalls => {
  return {
    balanceOf: (address: string) => contract.methods.balanceOf(address).call({ from: config.caller }),
    totalSupply: () => contract.methods.totalSupply().call({ from: config.caller }),
    decimals: () => contract.methods.decimals().call({ from: config.caller }),
  };
};

type ContractProps = {
  rpc: string;
  project: Project;
};

const marketStatsContract = ({ rpc, project }: ContractProps) => {
  if (!rpc || !project) {
    return null;
  }

  let abi: AbiItem[];

  if (project.isNft) {
    abi = nftAbi;
  } else {
    abi = baseAbi;
  }

  /** Initiates the Web3 with the given RPC endpoint */
  const web3 = new Web3(rpc);

  /** Initiates the Project Contract */
  const projectContract = new web3.eth.Contract(abi, project?.contractAddress as string);

  if (project.isNft) {
    return {
      projectContract: { ...commonCalls(projectContract) },
      getBalance: (address: string) => web3.eth.getBalance(address),
    };
  }

  const resolvePairTokenAddress = pairTokenAddressResolver(project);

  /** Initiates the Project Pair Contract (TITANO/BNB) */
  const projectPairContract = new web3.eth.Contract(abi, resolvePairTokenAddress(0) as string);

  /** Initiates the Pair Stable (BNB/BUSD) */
  const pairStableContract = new web3.eth.Contract(abi, resolvePairTokenAddress(1) as string);

  return {
    projectContract: { ...commonCalls(projectContract) },
    projectPairContract: { ...commonCalls(projectPairContract) },
    pairStableContract: { ...commonCalls(pairStableContract) },
    getBalance: (address: string) => web3.eth.getBalance(address),
  };
};

export default marketStatsContract;
