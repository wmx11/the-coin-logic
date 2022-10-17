import { Router } from 'express';
import getTrackerResults from '../controllers/getTrackerResults';
import checkForBots from '../middlewares/checkForBots';
import { isDev } from '../utils/utils';

const router = Router();

/**
 * Check req.headers.referrer
 * user-agent
 * Get timezone Intl.DateTimeFormat().resolvedOptions().timeZone
 * Get time in UTC
 * Get time in their timezone
 * https://api.ipregistry.co/217.227.93.169?key=z647m7389zw0sd3e
 */

router.get(isDev ? '/:campaignId/:target' : '', checkForBots, async (req, res) => {
  try {
    return getTrackerResults(req, res);
    // return res.status(200).json({ message: 'Success! We have your data!' });
  } catch (error) {
    return res.redirect('/');
  }
});

export default router;
