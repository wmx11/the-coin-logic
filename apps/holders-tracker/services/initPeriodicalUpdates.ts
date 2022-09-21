import trackAndPeriodicallyUpdateWalletBalances from './trackAndPeriodicallyUpdateWalletBalances';

(async () => {
  console.log('Initiating tracking');
  await trackAndPeriodicallyUpdateWalletBalances();
  console.log('Tracking done');
})();
