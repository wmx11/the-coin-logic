import { Request } from 'express';
import { isDev } from './utils';

const parseUrlForMarketingTracker = (req: Request) => {
  if (!req) {
    return null;
  }

  const params = req.params;
  const subdomains = req.subdomains[0] as string || req.headers['subdomain'] as string;

  const campaignId = params.campaignId;
  const target = isDev ? params.target : subdomains;

  return {
    target,
    campaignId,
  };
};

export default parseUrlForMarketingTracker;
