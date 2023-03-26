import { Project } from 'tcl-packages/types';
import { MarketStats } from '../generateMarketStats/types';

const resolveCustomTrackers = async (project: Project, marketStats: MarketStats) => {
  if (!project.customTrackers || !project.customTrackers.length) {
    return [];
  }

  const results = [];

  for (const customTracker of project.customTrackers) {
    const resolver = await (() => {
      if (customTracker.useDexScreener) {
        return import(`./resolvers/dexScreener`);
      }
      return import(`./resolvers/${customTracker.method}`);
    })();

    const data = await resolver.default(customTracker);

    if (!data) {
      return null;
    }

    const resolvedData = (() => {
      if (customTracker.applyProjectNativeTokenPrice) {
        return (data * marketStats.pairPrice);
      }

      if (customTracker.applyProjectTokenPrice) {
        return (data * marketStats.price);
      }

      return data;
    })();

    const result = {
      label: customTracker.label,
      id: customTracker.id,
      description: customTracker.description,
      value: resolvedData,
      isCurrency: customTracker.isCurrency,
    };

    results.push(result);
  }

  return results;
};

export default resolveCustomTrackers;
