import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import { getWalletsCountByProjectId } from 'tcl-packages/holders-tracker/services/holders';
import createNewWalletEntries from 'tcl-packages/holders-tracker/services/holders/createNewWalletEntries';

const trackHoldings = async () => {
  const projects = await getEnabledProjectsForHoldersTracking();

  if (!projects || !projects.length) {
    return undefined;
  }

  for (const project of projects) {
    if (!project.network?.url) {
      throw new Error('Project does not have an RPC endpoint.');
    }

    const hasHolders = !!(await getWalletsCountByProjectId(project?.id));

    await createNewWalletEntries(project?.id, hasHolders);
  }
};

export default trackHoldings;
