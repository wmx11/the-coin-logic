const cron = require('node-cron');
import addProjectStats from '../services/addProjectStats';

cron.schedule('*/5 * * * *', addProjectStats);
