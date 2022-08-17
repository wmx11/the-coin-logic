import Web3 from 'web3';
import baseAbi from 'tcl-packages/web3/baseAbi';
import createOrUpdateWalletEntriesFromTransferEvents from 'tcl-packages/holders-tracker/services/holders/createOrUpdateWalletEntriesFromTransferEvents';
import { getEnabledProjectsForHoldersTracking } from 'tcl-packages/graphql/queries';
import { getWalletsCountByProjectId } from 'tcl-packages/holders-tracker/services/holders';

let isRunning = false;

const trackHoldings = async () => {
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

    const hasHolders = !!(await getWalletsCountByProjectId(project?.id));

    const web3 = new Web3(project.network?.url as string);
    const contract = new web3.eth.Contract(baseAbi, project.contractAddress as string);

    await createOrUpdateWalletEntriesFromTransferEvents(project?.id, hasHolders, contract);
  }

  isRunning = false;
};

trackHoldings();

export default trackHoldings;
