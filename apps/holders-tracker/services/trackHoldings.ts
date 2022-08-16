import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import { getWalletsCountByProjectId } from 'tcl-packages/holders-tracker/services/holders';
import createOrUpdateWalletEntriesFromTransferEvents from 'tcl-packages/holders-tracker/services/holders/createOrUpdateWalletEntriesFromTransferEvents';

let isRunning = false;

const trackHoldings = async () => {
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

    const hasHolders = !!(await getWalletsCountByProjectId(project?.id));

    await createOrUpdateWalletEntriesFromTransferEvents(project?.id, hasHolders);
  }

  isRunning = false;
};

export default trackHoldings;
