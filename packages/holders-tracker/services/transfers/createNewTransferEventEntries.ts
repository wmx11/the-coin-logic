import prisma from '../../../prisma';
import sleep from '../../../utils/sleep';
import toDecimals from '../../../utils/toDecimals';
import config from '../../../web3/config';
import { getBlockByProjectId, updateBlock } from '../base';
import { addTransferEvent, getPastTransferEvents, getTransferType } from './transfers';
import type { Contract } from 'web3-eth-contract';
import type { Project } from '../../../types';

type CreateNewTransferEventEntries = {
  contract: Contract;
  iterations: number;
  fromBlock: number;
  toBlock: number;
  project: Project;
};

const createNewTransferEventEntries = async ({
  contract,
  iterations,
  fromBlock,
  toBlock,
  project,
}: CreateNewTransferEventEntries) => {
  const decimals = await contract.methods.decimals().call({ from: config.caller });

  let iteration = 0;

  const iterate = async (from: number, to: number) => {
    if (iteration >= iterations) {
      return undefined;
    }

    const pastTransferEvents = await getPastTransferEvents({ contract, fromBlock: from, toBlock: to });

    if (!pastTransferEvents || !pastTransferEvents.length) {
      return undefined;
    }

    iteration++;

    for (const event of pastTransferEvents) {
      const { from: fromAddress, to: toAddress, value } = event.returnValues;

      await addTransferEvent({
        projectId: project.id,
        amount: toDecimals(value, decimals) || 0,
        block: event.blockNumber,
        type: getTransferType({ project, fromAddress, toAddress }) as number,
        address: event.address,
        fromAddress,
        toAddress,
        hash: event.transactionHash,
      });

      await sleep(250);
    }

    const lastTransferEvent = await prisma.transfers.findFirst({
      where: {
        projectId: project.id,
      },
      orderBy: [{ id: 'desc' }],
      take: 1,
    });

    const block = await getBlockByProjectId(project.id);

    if (block?.lastBlock && lastTransferEvent) {
      await updateBlock(block.id, {
        lastBlock: lastTransferEvent.block,
      });
    }

    const newFromBlock = fromBlock + config.chunks;
    const newToBlock = newFromBlock + config.chunks;

    iterate(newFromBlock, newToBlock);
  };

  iterate(fromBlock, toBlock);
};

export default createNewTransferEventEntries;
