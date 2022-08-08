import { Project } from '../types/project';
import sleep from '../utils/sleep';
import getMarketStatsByProject from './getMarketStatsByProject';
import { getEnabledProjectsForTracking } from './graphql/getters';
import { createMarketStats } from './graphql/mutations';

const addProjectStats = async () => {
  const projects: Project[] = await getEnabledProjectsForTracking();

  for (const project of projects) {
    try {
      const results = await getMarketStatsByProject(project);
      await createMarketStats(results);
      await sleep(1500);
    } catch (error) {}
  }
};

export default addProjectStats;
