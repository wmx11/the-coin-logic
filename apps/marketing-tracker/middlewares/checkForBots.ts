import isbot from 'isbot';

const checkForBots = (req, res, next) => {
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
