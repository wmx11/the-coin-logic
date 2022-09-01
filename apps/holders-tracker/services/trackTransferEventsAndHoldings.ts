import trackHoldings from './trackHoldings';
import trackTransferEvents from './trackTransferEvents';

/**
 * @param initial - Whether this call is initial (first time for new projects) or a regular call (tracking starts from a previous block)
 */

const trackTransferEventsAndHoldings = async (initial?: boolean) => {
  await trackTransferEvents(initial);
  await trackHoldings(initial);
};

export default trackTransferEventsAndHoldings;
