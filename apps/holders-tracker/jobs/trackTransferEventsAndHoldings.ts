import cron from 'node-cron';
import trackTransferEventsAndHoldings from '../services/trackTransferEventsAndHoldings';

// Run every 5 minutes to get transfer events and create/update wallet balances
cron.schedule('*/5 * * * *', () => trackTransferEventsAndHoldings());
