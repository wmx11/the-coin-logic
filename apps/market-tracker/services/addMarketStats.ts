import sleep from 'tcl-packages/utils/sleep';
import generateMarketStats from './generateMarketStats';
import { createMarketStats } from 'tcl-packages/graphql/mutations';
import { getEnabledProjects } from 'tcl-packages/graphql/queries';

const addMarketStats = async (): Promise<void> => {
  const projects = await getEnabledProjects();

  if (!projects || !projects.length) {
    throw new Error('No projects found');
  }

  const cache = new Map();

  for (const project of projects) {
    try {
      const marketStats = await generateMarketStats(project, cache);
      await createMarketStats(marketStats);
      await sleep(1000);
    } catch (error) {
      console.log(error);
    }
  }
};

addMarketStats()

export default addMarketStats;
