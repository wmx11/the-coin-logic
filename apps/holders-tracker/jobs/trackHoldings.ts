import cron from 'node-cron';
import trackHoldings from '../services/trackHoldings';

// Run every minute to get new wallets or update existing ones from transfer events
cron.schedule('*/1 * * * *', trackHoldings);
