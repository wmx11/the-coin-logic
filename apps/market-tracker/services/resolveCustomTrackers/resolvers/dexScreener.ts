import { getPairInformationByChainId } from 'tcl-packages/dexscreener';
import { CustomTracker } from 'tcl-packages/types';

const dexScreener = async (customTracker: CustomTracker) => {
  const data = await getPairInformationByChainId(customTracker.network.slug, customTracker.pairAddress);

  if (!data || !data.length) {
    return null;
  }

  const pair = data[0];

  switch (customTracker.method) {
    case 'volume':
      return pair.volume;
    case 'txns':
      return pair.txns;
    case 'priceUsd':
      return pair.priceUsd;
    case 'liquidity':
      return pair.liquidity;
    case 'fdv':
      return pair.fdv;
    default:
      break;
  }
};

export default dexScreener;
