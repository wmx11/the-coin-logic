import updateWalletBalancesPeriodically from 'tcl-packages/holders-tracker/services/holders/updateWalletBalancesPeriodically';

let isRunning = false;

const trackAndPeriodicallyUpdateWalletBalances = async () => {
  if (isRunning) {
    return null;
  }

  isRunning = true;

  await updateWalletBalancesPeriodically();

  isRunning = false;
};

export default trackAndPeriodicallyUpdateWalletBalances;
