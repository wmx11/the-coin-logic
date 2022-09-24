import trackHoldings from './trackHoldings';
import trackTransferEvents from './trackTransferEvents';

/**
 * @param initial - Whether this call is initial (first time for new projects) or a regular call (tracking starts from a previous block)
 */
let isRunning = false;

const trackTransferEventsAndHoldings = async (initial?: boolean, reset?: boolean) => {
  if (isRunning) {
    return null;
  }

  isRunning = true;

  try {
    await trackTransferEvents(initial);
    await trackHoldings(initial, reset);
  } catch (error) {
    isRunning = false;
    console.log(error);
  }

  isRunning = false;
};

export default trackTransferEventsAndHoldings;
