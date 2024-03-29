import Web3 from 'web3';
import baseAbi from 'tcl-packages/web3/baseAbi';
import createOrUpdateHolderEntriesFromTransferEvents from 'tcl-packages/blockchainIndexer/services/holders/createOrUpdateHolderEntriesFromTransferEvents';
import { getHoldersCountByProjectId } from 'tcl-packages/blockchainIndexer/services/holders';
import { getProjects, setProjectStatus } from 'tcl-packages/blockchainIndexer/services/projects';
import { getLatestBlock } from 'tcl-packages/blockchainIndexer/services/base';
import nftAbi from 'tcl-packages/web3/nftAbi';
import { AbiItem } from 'web3-utils';

let isRunning = false;

const trackHoldings = async (initial = false, reset = false) => {
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

      const holdersCountByProjectId = await getHoldersCountByProjectId(project?.id);
      const hasHolders = !!holdersCountByProjectId;

      let abi: AbiItem[];

      if (project.isNft) {
        abi = nftAbi;
      } else abi = baseAbi;

      const web3 = new Web3(project.network?.url as string);
      const contract = new web3.eth.Contract(abi, project.contractAddress as string);
      const latestBlock = await getLatestBlock(web3);

      await setProjectStatus(project.id, 'tracking_holdings');

      await createOrUpdateHolderEntriesFromTransferEvents({
        project,
        hasHolders: reset ? false : hasHolders,
        contract,
        latestBlock,
        initial,
      });

      await setProjectStatus(project.id, 'idle');
    } catch (error) {
      await setProjectStatus(project.id, 'failed');
      console.log(error);
      isRunning = false;
      return null;
    }
  }

  isRunning = false;
};

export default trackHoldings;
