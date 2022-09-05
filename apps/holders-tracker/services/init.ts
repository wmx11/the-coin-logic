import trackTransferEventsAndHoldings from './trackTransferEventsAndHoldings';

(async () => {
  await trackTransferEventsAndHoldings(true, true);
  console.log('Init Done');
})();
