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
        return !!parseFloat(data) ? data * marketStats.pairPrice : data;
      }

      if (customTracker.applyProjectTokenPrice) {
        return !!parseFloat(data) ? data * marketStats.price : data;
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
