import { getTransferEventsByProjectId, getTransferEventsFromPreviousBlock } from '../../transfers';

/**
 * @desc - if the project has holders, select transfer events from a previous block
 * If the project has no holders registered (it's the first time running this function), get all transfer events with pagination
 */
const getTransferEvents = (projectId: string, hasHolders: boolean, perPage: number, offset: number) => {
  if (hasHolders) {
    return getTransferEventsFromPreviousBlock(projectId, {
      take: perPage,
      skip: offset,
    });
  }

  return getTransferEventsByProjectId(projectId, {
    take: perPage,
    skip: offset,
  });
};

export default getTransferEvents;
