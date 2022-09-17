import { CustomTracker } from 'tcl-packages/types';
import toDecimals from 'tcl-packages/utils/toDecimals';
import config from 'tcl-packages/web3/config';
import web3Contract from 'tcl-packages/web3/web3Contract';

const balanceOf = async (customTracker: CustomTracker) => {
  const { contract } = web3Contract(customTracker.network.url, customTracker.address);
  const result = await contract.methods.balanceOf(customTracker.getBalanceOf).call({ from: config.caller });
  return toDecimals(result, customTracker.decimals);
};

export default balanceOf;
