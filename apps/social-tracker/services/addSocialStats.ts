import { getEnabledProjects } from 'tcl-packages/graphql/queries';
import { createSocialStats } from 'tcl-packages/graphql/mutations';
import sleep from 'tcl-packages/utils/sleep';
import getSocialStats from './getSocialStats';

const addSocialStats = async (): Promise<void> => {
  const projects = await getEnabledProjects();

  if (!projects || !projects.length) {
    throw new Error('No projects found');
  }

  for (const project of projects) {
    try {
      const socialStats = await getSocialStats(project);
      await createSocialStats(socialStats);
      await sleep(1000);
    } catch (error) {
      console.log(error);
    }
  }

  return undefined;
};

export default addSocialStats;
