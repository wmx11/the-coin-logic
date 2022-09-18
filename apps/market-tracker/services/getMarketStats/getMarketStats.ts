import { Project } from 'tcl-packages/types';
import generateMarketStats from '../generateMarketStats';
import generateHoldersStats from '../generateMarketStats/generateHoldersStats';
import resolveCustomTrackers from '../resolveCustomTrackers';

const getMarketStats = async (project: Project) => {
  const marketStats = await generateMarketStats(project);
  const holders = await generateHoldersStats(project);
  const customTrackers = await resolveCustomTrackers(project, marketStats);

  return {
    id: project.id,
    ...marketStats,
    ...holders,
    customTrackers,
  };
};

export default getMarketStats;
