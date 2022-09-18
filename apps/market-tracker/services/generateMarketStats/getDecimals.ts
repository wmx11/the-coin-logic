import marketStatsContract from 'tcl-packages/web3/marketStatsContract';

const getDecimals = (contract: ReturnType<typeof marketStatsContract>) => {
  const getPairTokensDecimal = async () => await contract.projectPairContract.decimals();
  const getPairStableTokensDecimal = async () => await contract.pairStableContract.decimals();
  const getProjectTokensDecimal = async () => await contract.projectContract.decimals();

  return {
    getPairTokensDecimal,
    getPairStableTokensDecimal,
    getProjectTokensDecimal,
  };
};

export default getDecimals;
