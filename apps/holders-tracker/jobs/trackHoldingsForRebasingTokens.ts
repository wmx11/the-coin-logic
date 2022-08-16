import cron from 'node-cron';
import trackHoldingsForRebasingTokens from '../services/trackHoldingsForRebasingTokens';

// Run every 30 minutes to update rebasing token balances
cron.schedule('*/30 * * * *', trackHoldingsForRebasingTokens)