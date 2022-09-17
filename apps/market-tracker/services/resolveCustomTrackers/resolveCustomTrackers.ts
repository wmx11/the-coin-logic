import { Project } from 'tcl-packages/types';

const resolveCustomTrackers = async (project: Project) => {
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

    results.push({
      label: customTracker.label,
      description: customTracker.description,
      value: data
    });
  }

  return results;
};

export default resolveCustomTrackers;
