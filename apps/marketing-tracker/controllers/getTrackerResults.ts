import saveTrackerResults from '../models/saveTrackerResults';
import { ipLookup } from '../utils/ipClient';
import parseUrlForMarketingTracker from '../utils/parseUrlForMarketingTracker';
import parseUserAgent from '../utils/parseUserAgent';

const getTrackerResults = async (req, res) => {
  try {
    const userData = await ipLookup(req);
    const userAgentData = parseUserAgent(req.get('user-agent'));
    const marketingTrackerData = parseUrlForMarketingTracker(req);

    const trackerData = await saveTrackerResults({
      data: {
        ...userData.data,
        ...userAgentData,
        target: marketingTrackerData.target,
      },
      campaignId: marketingTrackerData.campaignId,
    });

    return res.redirect(trackerData.project[marketingTrackerData.target]);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Looks like there was an issue with the tracker. Please contact The Coin Logic support.' });
  }
};

export default getTrackerResults;
