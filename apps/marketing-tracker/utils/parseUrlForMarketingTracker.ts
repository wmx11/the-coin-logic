import { Request } from 'express';
import { isDev } from './utils';

const parseUrlForMarketingTracker = (req: Request) => {
  if (!req) {
    return null;
  }

  console.log(req);
  
  console.log(req.subdomains);

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
