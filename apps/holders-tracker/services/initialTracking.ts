// Start syncing up with the Transfer events
// Generate a list of Holders from the Transfer events and relate them
// Set "Initialized" flag

import trackHoldings from './trackHoldings';
import trackTransferEvents from './trackTransferEvents';

const initialTracking = async () => {
  await trackTransferEvents(true);
  await trackHoldings(true);
};

initialTracking()

export default initialTracking;
