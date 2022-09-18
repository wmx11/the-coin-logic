import { createMarketStats } from 'tcl-packages/graphql/mutations';
import { getEnabledProjects } from 'tcl-packages/graphql/queries';
import sleep from 'tcl-packages/utils/sleep';
import getMarketStats from './getMarketStats';

const addMarketStats = async (): Promise<void> => {
  const projects = await getEnabledProjects();

  if (!projects || !projects.length) {
    throw new Error('No projects found');
  }

  for (const project of projects) {
    try {
      const marketStats = await getMarketStats(project);
      // await createMarketStats(marketStats);
      await sleep(1000);
    } catch (error) {
      console.log(error);
    }
  }
};

addMarketStats();

export default addMarketStats;
