import { Contract } from 'web3-eth-contract';
import config from 'tcl-packages/web3/config';

const balanceOf = async (contract: Contract, address: string) => {
  const balance = await contract.methods.balanceOf(address).call({ from: config.caller });
  return balance;
};

export default balanceOf;
