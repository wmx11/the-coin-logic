// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'holders-tracker-initial',
      script: './apps/holders-tracker/dist/jobs/initialTrackTransferEventsAndHoldings.js',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'holders-tracker',
      script: './apps/holders-tracker/dist/jobs/trackTransferEventsAndHoldings.js',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'holders-tracker-periodical',
      script: './apps/holders-tracker/dist/jobs/trackAndPeriodicallyUpdateWalletBalances.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
