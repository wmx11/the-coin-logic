import { subHours } from 'date-fns';

const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return subHours(new Date(), 1);
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 25,
    updateBalancesForRebasingTokens: 60,
    iterateTransferEventsCreateOrUpdateWalletEntriesCallback: 60,
  },
};

export default config;
