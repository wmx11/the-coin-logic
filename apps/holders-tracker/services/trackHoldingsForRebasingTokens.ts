import updateBalancesForRebasingTokens from 'tcl-packages/holders-tracker/services/holders/updateBalancesForRebasingTokens';

let isRunning = false;

const trackHoldingsForRebasingTokens = async () => {
  if (isRunning) {
    return null;
  }

  isRunning = true;

  await updateBalancesForRebasingTokens();

  isRunning = false;
};

export default trackHoldingsForRebasingTokens;
