import trackTransferEventsAndHoldings from './trackTransferEventsAndHoldings';

(async () => {
  await trackTransferEventsAndHoldings(true);
  console.log('Init Done');
})();
