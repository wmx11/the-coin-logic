/**
 * @desc - if the project has holders, select transfer events from a previous block
 * If the project has no holders registered (it's the first time running this function), get all transfer events with pagination
 */
declare const getTransferEvents: (projectId: string, hasHolders: boolean, perPage: number, offset: number) => Promise<import(".prisma/client").Transfer[]>;
export default getTransferEvents;
//# sourceMappingURL=getTransferEvents.d.ts.map