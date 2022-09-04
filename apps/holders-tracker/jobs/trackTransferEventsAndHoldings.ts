import cron from 'node-cron';
import trackTransferEventsAndHoldings from '../services/trackTransferEventsAndHoldings';

// Run every 10 minutes to get transfer events and create/update wallet balances
cron.schedule('*/10 * * * *', () => trackTransferEventsAndHoldings());
