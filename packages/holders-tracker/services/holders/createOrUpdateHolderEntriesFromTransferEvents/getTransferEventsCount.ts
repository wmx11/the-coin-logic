import { getTransferEventsCountByProjectId, getTransferEventsCountFromPreviousBlock } from '../../transfers';

/**
 * @desc - if the project has holders, get transfer events count from a previous block
 * If the project has no holders registered (it's the first time running this function), get all transfer events count for pagination
 */
const getTransferEventsCount = (projectId: string, hasHolders: boolean) => {
  if (hasHolders) {
    return getTransferEventsCountFromPreviousBlock(projectId);
  }

  return getTransferEventsCountByProjectId(projectId);
};

export default getTransferEventsCount;
