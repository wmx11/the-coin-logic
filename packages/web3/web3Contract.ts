import Web3 from 'web3';
import baseAbi from './baseAbi';
import type { Contract } from 'web3-eth-contract';

const web3Contract = (rpc: string, address: string) => {
  const web3 = new Web3(rpc);
  const contract: Contract = new web3.eth.Contract(baseAbi, address as string);

  return { web3, contract, baseAbi };
};

export default web3Contract;
