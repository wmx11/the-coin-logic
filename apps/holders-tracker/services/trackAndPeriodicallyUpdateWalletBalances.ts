import updateWalletBalancesPeriodically from 'tcl-packages/blockchainIndexer/services/holders/updateWalletBalancesPeriodically';

let isRunning = false;

const trackAndPeriodicallyUpdateWalletBalances = async () => {
  if (isRunning) {
    return null;
  }

  isRunning = true;

  try {
    await updateWalletBalancesPeriodically();
  } catch (error) {
    isRunning = false;
    console.log(error);
  }

  isRunning = false;
};

export default trackAndPeriodicallyUpdateWalletBalances;
