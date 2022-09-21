// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'holders-tracker-initial',
      script: './apps/holders-tracker/dist/jobs/initialTrackTransferEventsAndHoldings.js',
    },
    {
      name: 'holders-tracker',
      script: './apps/holders-tracker/dist/jobs/trackTransferEventsAndHoldings.js',
    },
    {
      name: 'holders-tracker-periodical',
      script: './apps/holders-tracker/dist/jobs/trackAndPeriodicallyUpdateWalletBalances.js',
    },
  ],
};
