import { getTransferEventsCountByProjectId, getTransferEventsCountFromPreviousBlock } from "../../transfers";

const getTransferEventsCount = (projectId: string, hasHolders: boolean) => {
  if (hasHolders) {
    return getTransferEventsCountFromPreviousBlock(projectId);
  }

  return getTransferEventsCountByProjectId(projectId);
};

export default getTransferEventsCount;
