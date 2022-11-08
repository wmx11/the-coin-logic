import cron from 'node-cron';
import addSocialStats from '../services/addSocialStats';

// Every 3 hours
cron.schedule('0 */3 * * *', addSocialStats);
