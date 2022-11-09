import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';

const router = Router();

router.get(isDev ? '/:campaignId/:target' : '', checkForBots, async (req, res) => {
  try {
    return getTrackerResults(req, res);
  } catch (error) {
    return res.redirect('/');
  }
});

export default router;
