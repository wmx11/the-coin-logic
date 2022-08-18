import sleep from 'tcl-packages/utils/sleep';
import trackTransferEventsByProject from 'tcl-packages/holders-tracker/services/transfers/trackTransferEventsByProject';
import { getProjects, setProjectStatus } from 'tcl-packages/holders-tracker/services/projects';

let isRunning = false;

const trackTransferEvents = async (initial = false) => {
  if (isRunning) {
    return null;
  }

  const projects = await getProjects(initial);

  if (!projects || !projects.length) {
    return null;
  }

  isRunning = true;

  for (const project of projects) {
    try {
      if (!project.network?.url) {
        throw new Error('Project does not have an RPC endpoint.');
      }

      await setProjectStatus(project.id, 'syncing');

      await trackTransferEventsByProject(project);

      await setProjectStatus(project.id, 'idle');
      await sleep(500);
    } catch (error) {
      console.log(error);
      await setProjectStatus(project.id, 'failed');
      return null;
    }
  }

  isRunning = false;
};

export default trackTransferEvents;
