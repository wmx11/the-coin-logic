import {
  createOrUpdateBlock,
  getBlockByProjectId,
  getIterations,
  getLatestBlock,
} from 'tcl-packages/blockchainIndexer/services/base';

import type { Project } from '../../../types';
import Web3 from 'web3';
import baseAbi from 'tcl-packages/web3/baseAbi';
import createNewTransferEventEntries from './createNewTransferEventEntries';
import nftAbi from '../../../web3/nftAbi';
import { AbiItem } from 'web3-utils';

const trackTransferEventsByProject = async (project: Project) => {
  if (!project) {
    throw new Error('Please provide a project.');
  }

  if (!project.network?.url) {
    throw new Error('Project does not have an RPC endpoint.');
  }

  let abi: AbiItem[];

  if (project.isNft) {
    abi = nftAbi;
  } else abi = baseAbi;

  const web3 = new Web3(project.network?.url as string);
  const contract = new web3.eth.Contract(abi, project.contractAddress as string);

  const lastBlock = await getBlockByProjectId(project.id);
  const toBlock = await getLatestBlock(web3);

  const fromBlock = (lastBlock?.lastBlock || project.launchBlock) as number;

  const iterations = getIterations(fromBlock as number, toBlock, project.initialized);

  await createOrUpdateBlock(
    lastBlock?.id as string,
    {
      project: { connect: { id: project.id } },
      firstBlock: project.launchBlock as number,
      previousBlock: project.launchBlock as number,
      lastBlock: lastBlock?.lastBlock as number,
    },
    { previousBlock: fromBlock as number },
  );

  await createNewTransferEventEntries({ contract, web3, iterations, project, fromBlock });
};

export default trackTransferEventsByProject;
