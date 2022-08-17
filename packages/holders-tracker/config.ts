import { sub } from 'date-fns';
const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return sub(new Date(), { hours: 1 });
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 25,
    updateBalancesForRebasingTokens: 90,
    iterateTransferEventsCreateOrUpdateWalletEntriesCallback: 60,
  },
};

export default config;
