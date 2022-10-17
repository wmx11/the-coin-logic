import { isDev } from './utils';

const parseUrlForMarketingTracker = (req) => {
  if (!req) {
    return null;
  }

  const params = req.params;
  const subdomains = req.subdomains;
  
  const campaignId = params.campaignId;
  const target = isDev ? params.target : subdomains[0];

  return {
    target,
    campaignId,
  };
};

export default parseUrlForMarketingTracker;
