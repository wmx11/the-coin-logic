import Web3 from 'web3';
import baseAbi from 'tcl-packages/web3/baseAbi';
import createOrUpdateHolderEntriesFromTransferEvents from 'tcl-packages/holders-tracker/services/holders/createOrUpdateHolderEntriesFromTransferEvents';
import { getHoldersCountByProjectId } from 'tcl-packages/holders-tracker/services/holders';
import { getProjects, setProjectStatus } from 'tcl-packages/holders-tracker/services/projects';

let isRunning = false;

const trackHoldings = async (initial = false) => {
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

      const hasHolders = !!(await getHoldersCountByProjectId(project?.id));

      const web3 = new Web3(project.network?.url as string);
      const contract = new web3.eth.Contract(baseAbi, project.contractAddress as string);

      await setProjectStatus(project.id, 'tracking_holdings');

      await createOrUpdateHolderEntriesFromTransferEvents({ project, hasHolders, contract });

      await setProjectStatus(project.id, 'idle');
    } catch (error) {
      console.log(error);
      await setProjectStatus(project.id, 'failed');
      return null;
    }
  }

  isRunning = false;
};

trackHoldings()

export default trackHoldings;