import { Contract } from 'web3-eth-contract';
import { Context } from '../../../utils/iterateWithContext';

import type { Block, Project } from '../../../types';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import { default as holdersTrackerConfig } from '../../config';
import { updateBlock } from '../base';
import {
  addTransferEvent,
  getPastTransferEvents,
  getTransferEventByHashAmountAndProjectId,
  getTransferType,
} from './transfers';
import withRetry from '../../../utils/withRetry';

type ExtendedContext = Context & {
  decimals: number;
  projectBlock: Block | null;
  from: number;
  to: number;
  contract: Contract;
  project: Project;
  config: {
    caller: string;
    chunks: number;
    initialChunks: number;
  };
};

const iterateTransferEventsAndCreateNewEntriesCallback = async (context: ExtendedContext) => {
  const { iteration, iterations, contract, project, decimals, projectBlock, from, to, config } = context;
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

    const amount = toDecimals(value, decimals) || 0;

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
      type: getTransferType({ project, fromAddress, toAddress }) as number,
      address: event.address,
      fromAddress,
      toAddress,
      hash: event.transactionHash,
    });

    console.log(iteration + ' ===>', iterations, result);

    await sleep(holdersTrackerConfig.timeouts.iterateTransferEventsAndCreateNewEntriesCallback);
  }

  if (projectBlock) {
    await updateBlock(projectBlock.id, {
      lastBlock,
    });
  }

  const newFromBlock = from + chunks;
  const newToBlock = newFromBlock + chunks;
  const updatedContext = { ...context, from: newFromBlock, to: newToBlock };

  await sleep(holdersTrackerConfig.timeouts.iterateTransferEventsAndCreateNewEntriesCallback);

  return updatedContext;
};

export default iterateTransferEventsAndCreateNewEntriesCallback;
