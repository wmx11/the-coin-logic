import { Request, Response } from 'express';
import saveTrackerResults from '../models/saveTrackerResults';
import { ipLookup } from '../utils/ipClient';
import parseUrlForMarketingTracker from '../utils/parseUrlForMarketingTracker';
import parseUserAgent from '../utils/parseUserAgent';

const getTrackerResults = async (req: Request, res: Response) => {
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

    // If the tracker fails or the campaign is deleted, redirect to TCL website
    if (trackerData === null || trackerData === undefined || !trackerData.project) {
      return res.redirect('https://thecoinlogic.com');
    }

    return res.redirect(trackerData.project[marketingTrackerData.target]);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Looks like there was an issue with the tracker. Please contact The Coin Logic support.' });
  }
};

export default getTrackerResults;
