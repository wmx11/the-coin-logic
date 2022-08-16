import cron from 'node-cron';
import addMarketStats from '../services/addMarketStats';

// Run the job every 5 minutes
cron.schedule('*/5 * * * *', addMarketStats);
