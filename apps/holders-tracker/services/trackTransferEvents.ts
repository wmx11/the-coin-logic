import sleep from 'tcl-packages/utils/sleep';
import trackTransferEventsByProject from 'tcl-packages/holders-tracker/services/transfers/trackTransferEventsByProject';
import { getProjects } from 'tcl-packages/holders-tracker/services/projects';

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
    if (!project.network?.url) {
      throw new Error('Project does not have an RPC endpoint.');
    }

    await trackTransferEventsByProject(project);
    await sleep(500);
  }

  isRunning = false;
};

export default trackTransferEvents;
