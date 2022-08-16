import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import trackTransferEventsByProject from 'tcl-packages/holders-tracker/services/transfers/trackTransferEventsByProject';
import sleep from 'tcl-packages/utils/sleep';

const trackTransferEvents = async () => {
  const projects = await getEnabledProjectsForHoldersTracking();

  if (!projects || !projects.length) {
    return undefined;
  }

  for (const project of projects) {
    if (!project.network?.url) {
      throw new Error('Project does not have an RPC endpoint.');
    }
    await trackTransferEventsByProject(project);
    await sleep(250);
  }
};

export default trackTransferEvents;
