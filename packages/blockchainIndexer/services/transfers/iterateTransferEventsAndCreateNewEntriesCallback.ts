import { Contract } from 'web3-eth-contract';
import { Context } from '../../../utils/iterateWithContext';
import type { Block, Project } from '../../../types';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import { default as holdersTrackerConfig } from '../../config';
import { getLatestBlock, updateBlock } from '../base';
import {
  addTransferEvent,
  getPastTransferEvents,
  getTransferEventByHashAmountAndProjectId,
  getTransferType,
} from './transfers';
import withRetry from '../../../utils/withRetry';
import Web3 from 'web3';

type ExtendedContext = Context & {
  decimals: number;
  projectBlock: Block | null;
  from: number;
  to: number;
  contract: Contract;
  web3: Web3;
  project: Project;
  config: {
    caller: string;
    chunks: number;
    initialChunks: number;
  };
};

const iterateTransferEventsAndCreateNewEntriesCallback = async (context: ExtendedContext) => {
  const { iteration, iterations, contract, web3, project, decimals, projectBlock, from, to, config } = context;
  const chunks = project.initialized ? config.chunks : config.initialChunks;

  const pastTransferEvents = await withRetry(() =>
    getPastTransferEvents({
      contract,
      fromBlock: from,
      toBlock: to,
    }),
  );

  console.log(from, to);

  let lastBlock = from;

  for (const event of pastTransferEvents) {
    lastBlock = event.blockNumber;

    const { from: fromAddress, to: toAddress, value } = event.returnValues;

    const transerType = getTransferType({ project, fromAddress, toAddress }) as number;
    let amount = toDecimals(value, decimals) || 0;

    // If the project is an NFT, pull additional information from the TX Hash, e.g. Value
    if (project.isNft) {
      // If It's a MINT
      if (transerType === 4) {
        const MINT_TRANSFER_TOPICS_LENGTH = 4;
        const receipt = await web3.eth.getTransactionReceipt(event.transactionHash);
        const numberOfInternalTransfers =
          receipt.logs.filter(
            (item) =>
              item?.topics?.includes(holdersTrackerConfig.topics.transfer) &&
              item?.topics?.length === MINT_TRANSFER_TOPICS_LENGTH &&
              item?.topics[2]?.includes(toAddress?.toLowerCase()?.substring(2)),
          ).length || 1;
        amount = numberOfInternalTransfers * project.mintPrice || 0;
      } else {
        const txInfo = await web3.eth.getTransaction(event.transactionHash);
        amount = toDecimals(txInfo?.value, decimals) || 0;
      }
    }

    const existingTransferEvent = await getTransferEventByHashAmountAndProjectId(
      event.transactionHash,
      amount,
      project.id,
    );

    // If the hash and the amount is the same, continue to the next event. Prevent duplicates
    if (existingTransferEvent) {
      continue;
    }

    const result = await addTransferEvent({
      project: { connect: { id: project.id } },
      amount,
      block: event.blockNumber,
      type: transerType,
      address: event.address,
      fromAddress,
      toAddress,
      hash: event.transactionHash,
      ...(project?.isNft ? { tokenId: event?.returnValues?.tokenId || undefined } : {}),
    });

    console.log(iteration + ' ===>', iterations, result);

    await sleep(holdersTrackerConfig.timeouts.iterateTransferEventsAndCreateNewEntriesCallback);
  }

  if (projectBlock) {
    await updateBlock(projectBlock.id, {
      lastBlock,
    });
  }

  const latestBlock = await getLatestBlock(web3);

  const newFromBlock = from + chunks;
  const newToBlockValue = newFromBlock + chunks;
  // Prevent from querying beyong available blocks
  const newToBlock = newToBlockValue >= latestBlock ? latestBlock : newToBlockValue;
  const updatedContext = { ...context, from: newFromBlock, to: newToBlock };

  await sleep(holdersTrackerConfig.timeouts.iterateTransferEventsAndCreateNewEntriesCallback);

  return updatedContext;
};

export default iterateTransferEventsAndCreateNewEntriesCallback;
