import Web3 from 'web3';
import {
  createOrUpdateBlock,
  getBlockByProjectId,
  getIterations,
  getLatestBlock,
} from 'tcl-packages/holders-tracker/services/base';
import baseAbi from 'tcl-packages/web3/baseAbi';
import createNewTransferEventEntries from './createNewTransferEventEntries';
import type { Project } from '../../../types';

const trackTransferEventsByProject = async (project: Project) => {
  if (!project) {
    throw new Error('Please provide a project.');
  }

  if (!project.network?.url) {
    throw new Error('Project does not have an RPC endpoint.');
  }

  const web3 = new Web3(project.network?.url as string);
  const contract = new web3.eth.Contract(baseAbi, project.contractAddress as string);

  const lastBlock = await getBlockByProjectId(project.id);
  const toBlock = await getLatestBlock(web3);

  const fromBlock = (lastBlock?.lastBlock || project.launchBlock) as number;

  const iterations = getIterations(fromBlock as number, toBlock);

  await createOrUpdateBlock(
    lastBlock?.id as string,
    {
      projectId: project.id,
      firstBlock: project.launchBlock as number,
      previousBlock: project.launchBlock as number,
      lastBlock: lastBlock?.lastBlock as number,
    },
    { previousBlock: fromBlock as number },
  );

  createNewTransferEventEntries({ contract, iterations, project, fromBlock, toBlock });
};

export default trackTransferEventsByProject;
