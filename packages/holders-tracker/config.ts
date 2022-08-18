import { subHours } from 'date-fns';

const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return subHours(new Date(), 1);
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 25,
    updateBalancesForRebasingTokens: 75,
    iterateTransferEventsCreateOrUpdateWalletEntriesCallback: 75,
  },
};

export default config;
