import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';
import path from 'path';

const router = Router();

router.get(isDev ? '/:campaignId/:target' : '/:campaignId', checkForBots, async (req, res) => {
  try {
    return getTrackerResults(req, res);
  } catch (error) {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'index.html'));
  }
});

router.get('/', checkForBots, async (req, res) => {
  try {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'index.html'));
  } catch (error) {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'index.html'));
  }
});

export default router;
