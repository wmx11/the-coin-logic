import { Context } from '../../../utils/iterateWithContext';
import { Contract } from 'web3-eth-contract';

import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import { updateBlock } from '../base';
import { addTransferEvent, getPastTransferEvents, getTransferType } from './transfers';
import type { Block, Project } from '../../../types';
import { default as holdersTrackerConfig } from '../../config';

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
  };
};

const iterateTransferEventsAndCreateNewEntriesCallback = async (context: ExtendedContext) => {
  const { iteration, iterations, contract, project, decimals, projectBlock, from, to, config } = context;

  const pastTransferEvents = await getPastTransferEvents({
    contract,
    fromBlock: from,
    toBlock: to,
  });

  console.log(from, to);

  let lastBlock = from;

  for (const event of pastTransferEvents) {
    const { from: fromAddress, to: toAddress, value } = event.returnValues;

    lastBlock = event.blockNumber;

    const result = await addTransferEvent({
      project: { connect: { id: project.id } },
      amount: toDecimals(value, decimals) || 0,
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

  const newFromBlock = from + config.chunks;
  const newToBlock = newFromBlock + config.chunks;

  const updatedContext = { ...context, from: newFromBlock, to: newToBlock };

  return updatedContext;
};

export default iterateTransferEventsAndCreateNewEntriesCallback;
