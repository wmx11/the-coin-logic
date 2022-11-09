import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';

const router = Router();

const trackerPath = isDev ? '/:campaignId/:target' : '/:campaignId';

router.get(trackerPath, checkForBots, async (req, res) => {
  try {
    return getTrackerResults(req, res);
  } catch (error) {
    return res.status(500).json({ message: 'There has been an issue handling your request.' });
  }
});

export default router;
