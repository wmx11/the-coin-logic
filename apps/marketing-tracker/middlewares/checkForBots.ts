import { NextFunction, Request, Response } from 'express';
import isbot from 'isbot';

const checkForBots = (req: Request, res: Response, next: NextFunction) => {
  const isBotRequest = isbot(req.get('user-agent'));

  if (!isBotRequest) {
    return next();
  }

  return res.status(200).json({
    message: 'Tracker is not available for bots and crawlers.',
    agent: JSON.stringify(req.get('user-agent')),
  });
};

export default checkForBots;
