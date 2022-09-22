import { subHours } from 'date-fns';

const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return subHours(new Date(), 1);
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 35,
    updateWalletBalancesPeriodically: 75,
    createOrUpdateHolderEntriesCallback: 75,
  },
};

export default config;
