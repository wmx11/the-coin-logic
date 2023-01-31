import { subHours } from 'date-fns';

const config = {
  take: 10000,
  getDateForRebasingTokens() {
    return subHours(new Date(), 1);
  },
  topics: {
    transfer: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  },
  timeouts: {
    iterateTransferEventsAndCreateNewEntriesCallback: 35,
    updateWalletBalancesPeriodically: 40,
    createOrUpdateHolderEntriesCallback: 40,
  },
};

export default config;
