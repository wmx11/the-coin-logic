import cron from 'node-cron';
import trackTransferEvents from '../services/trackTransferEvents';

cron.schedule('*/5 * * * *', trackTransferEvents);
