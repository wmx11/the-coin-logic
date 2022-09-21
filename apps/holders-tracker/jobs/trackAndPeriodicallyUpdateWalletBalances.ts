import cron from 'node-cron';
import trackAndPeriodicallyUpdateWalletBalances from '../services/trackAndPeriodicallyUpdateWalletBalances';

// Run every 30 minutes to update rebasing token balances
cron.schedule('*/30 * * * *', trackAndPeriodicallyUpdateWalletBalances);
