import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';
import path from 'path';

const router = Router();

const trackerPath = isDev ? '/:campaignId/:target' : '/:campaignId';
const index = path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'index.html');
const css = path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'output.css');

router.get(trackerPath, checkForBots, async (req, res) => {
  try {
    if (req.subdomains.length > 0) {
      return getTrackerResults(req, res);
    }
    return res.sendFile(index);
  } catch (error) {
    return res.sendFile(index);
  }
});

router.get('/', checkForBots, async (req, res) => {
  try {
    return res.sendFile(index);
  } catch (error) {
    return res.sendFile(index);
  }
});

router.get('/output.css', checkForBots, async (req, res) => {
  try {
    return res.sendFile(css);
  } catch (error) {
    return res.sendFile(css);
  }
});

export default router;
