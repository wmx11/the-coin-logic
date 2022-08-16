import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import trackTransferEventsByProject from 'tcl-packages/holders-tracker/services/transfers/trackTransferEventsByProject';
import sleep from 'tcl-packages/utils/sleep';

let isRunning = false;

const trackTransferEvents = async () => {
  if (isRunning) {
    return undefined;
  }

  const projects = await getEnabledProjectsForHoldersTracking();

  if (!projects || !projects.length) {
    return undefined;
  }

  isRunning = true;

  for (const project of projects) {
    if (!project.network?.url) {
      throw new Error('Project does not have an RPC endpoint.');
    }
    await trackTransferEventsByProject(project);
    await sleep(250);
  }

  isRunning = false;
};

export default trackTransferEvents;
