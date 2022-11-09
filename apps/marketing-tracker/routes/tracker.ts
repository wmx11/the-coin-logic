import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';
import path from 'path';

const router = Router();

const trackerPath = isDev ? '/:campaignId/:target' : '/:campaignId';

router.get(trackerPath, checkForBots, async (req, res) => {
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

router.get('/output.css', checkForBots, async (req, res) => {
  try {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'output.css'));
  } catch (error) {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'output.css'));
  }
});

export default router;
