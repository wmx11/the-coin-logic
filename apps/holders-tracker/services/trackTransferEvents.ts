import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import sleep from 'tcl-packages/utils/sleep';
import trackTransferEventsByProject from 'tcl-packages/holders-tracker/services/transfers/trackTransferEventsByProject';

let isRunning = false;

const trackTransferEvents = async () => {
  if (isRunning) {
    return null;
  }

  const projects = await getEnabledProjectsForHoldersTracking();

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

trackTransferEvents();

export default trackTransferEvents;
