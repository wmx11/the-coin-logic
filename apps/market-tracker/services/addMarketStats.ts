import sleep from 'tcl-packages/utils/sleep';
import generateMarketStats from './generateMarketStats';
import { createMarketStats } from 'tcl-packages/graphql/mutations';
import { getEnabledProjects } from 'tcl-packages/graphql/queries';

const addMarketStats = async (): Promise<void> => {
  const projects = await getEnabledProjects();

  if (!projects || !projects.length) {
    console.log('No projects found');
    return;
  }

  for (const project of projects) {
    try {
      const marketStats = await generateMarketStats(project);
      await createMarketStats(marketStats);
      await sleep(2000);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
};

export default addMarketStats;
