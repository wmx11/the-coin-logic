import cron from 'node-cron';
import trackTransferEventsAndHoldings from '../services/trackTransferEventsAndHoldings';

// Run every hour to get newly listed projects and start syncing with the blockchain.
cron.schedule('0 * * * *', () => trackTransferEventsAndHoldings(true, true));
