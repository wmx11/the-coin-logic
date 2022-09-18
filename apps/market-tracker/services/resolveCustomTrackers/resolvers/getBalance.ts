import { CustomTracker } from 'tcl-packages/types';
import toDecimals from 'tcl-packages/utils/toDecimals';
import web3Contract from 'tcl-packages/web3/web3Contract';

const getBalance = async (customTracker: CustomTracker) => {
  const { web3 } = web3Contract(customTracker.network.url, customTracker.address);
  const result = await web3.eth.getBalance(customTracker.address);
  return toDecimals(result, customTracker.decimals);
};

export default getBalance;
