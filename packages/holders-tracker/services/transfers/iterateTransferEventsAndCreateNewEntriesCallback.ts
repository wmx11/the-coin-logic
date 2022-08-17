import { Context } from '../../../utils/iterateWithContext';
import { Contract } from 'web3-eth-contract';

import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import { updateBlock } from '../base';
import { addTransferEvent, getPastTransferEvents, getTransferType } from './transfers';
import { Blocks } from '@prisma/client';
import type { Project } from '../../../types';
import { default as holdersTrackerConfig } from '../../config';

type ExtendedContext = Context & {
  decimals: number;
  projectBlock: Blocks | null;
  from: number;
  to: number;
  contract: Contract;
  project: Project;
  config: {
    caller: string;
    chunks: number;
  };
};

const iterateTransferEventsAndCreateNewEntriesCallback = async (context: ExtendedContext) => {
  const { iteration, iterations, contract, project, decimals, projectBlock, from, to, config } = context;

  if (iteration >= iterations) {
    return null;
  }

  const pastTransferEvents = await getPastTransferEvents({
    contract,
    fromBlock: from,
    toBlock: to,
  });

  if (!pastTransferEvents || !pastTransferEvents.length) {
    return null;
  }

  for (const event of pastTransferEvents) {
    const { from: fromAddress, to: toAddress, value } = event.returnValues;

    const result = await addTransferEvent({
      projectId: project.id,
      amount: toDecimals(value, decimals) || 0,
      block: event.blockNumber,
      type: getTransferType({ project, fromAddress, toAddress }) as number,
      address: event.address,
      fromAddress,
      toAddress,
      hash: event.transactionHash,
    });

    if (projectBlock) {
      await updateBlock(projectBlock.id, {
        lastBlock: event.blockNumber,
      });
    }

    console.log(iteration + ' ===>', iterations, result);

    await sleep(holdersTrackerConfig.timeouts.iterateTransferEventsAndCreateNewEntriesCallback);
  }

  const newFromBlock = from + config.chunks;
  const newToBlock = newFromBlock + config.chunks;

  const updatedContext = { ...context, from: newFromBlock, to: newToBlock };

  return updatedContext;
};

export default iterateTransferEventsAndCreateNewEntriesCallback;
