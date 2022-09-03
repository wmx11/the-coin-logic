import { subHours } from 'date-fns';

const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return subHours(new Date(), 0);
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 35,
    updateBalancesForRebasingTokens: 75,
    createOrUpdateHolderEntriesCallback: 75,
  },
};

export default config;
