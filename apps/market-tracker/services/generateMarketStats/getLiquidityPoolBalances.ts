import { Project } from 'tcl-packages/types';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';

const getLiquidityPoolBalances = (contract: ReturnType<typeof marketStatsContract>, project: Project) => {
  const primaryPairAddress = project.liquidityPair.filter((pair) => pair.isPrimary);

  /** Get project token and its pair balance in the liquidity pool (TITANO/WBNB)*/
  const getProjectTokensInLiquidityPool = async () =>
    await contract.projectContract.balanceOf(project.pairAddress as string);

  const getProjectPairTokensInLiquidityPool = async () =>
    await contract.projectPairContract.balanceOf(project.pairAddress as string);

  /** Get the project pair token balance and the stable coin balance in the stable liquidity pair (WBNB/BUSD) */
  const getPairTokensInPairLiquidityPool = async () => {
    const stablePairAddress = primaryPairAddress[0].stablePair.address;
    const data = await contract.projectPairContract.balanceOf(stablePairAddress as string);
    return data;
  };

  const getPairStableInPairLiquidityPool = async () => {
    const stablePairAddress = primaryPairAddress[0].stablePair.address;
    const data = await contract.pairStableContract.balanceOf(stablePairAddress as string);
    return data;
  };

  return {
    getProjectTokensInLiquidityPool,
    getProjectPairTokensInLiquidityPool,
    getPairTokensInPairLiquidityPool,
    getPairStableInPairLiquidityPool,
  };
};

export default getLiquidityPoolBalances;
