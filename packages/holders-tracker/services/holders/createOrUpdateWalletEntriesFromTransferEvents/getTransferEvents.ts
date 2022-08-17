import { getTransferEventsByProjectId, getTransferEventsFromPreviousBlock } from '../../transfers';

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
