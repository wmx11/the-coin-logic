/**
 * @desc - if the project has holders, get transfer events count from a previous block
 * If the project has no holders registered (it's the first time running this function), get all transfer events count for pagination
 */
declare const getTransferEventsCount: (projectId: string, hasHolders: boolean) => Promise<number>;
export default getTransferEventsCount;
//# sourceMappingURL=getTransferEventsCount.d.ts.map