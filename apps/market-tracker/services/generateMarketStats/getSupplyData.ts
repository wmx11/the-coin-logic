import { Project } from 'tcl-packages/types';
import toDecimals from 'tcl-packages/utils/toDecimals';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';
import getDecimals from './getDecimals';
import getLiquidityPoolBalances from './getLiquidityPoolBalances';
import getPrices from './getPrices';

type SupplyDataObject = {
  contract: ReturnType<typeof marketStatsContract>;
  prices: ReturnType<typeof getPrices>;
  liquidityPools: ReturnType<typeof getLiquidityPoolBalances>;
  decimals: ReturnType<typeof getDecimals>;
  project: Project;
};

const getSupplyData = ({ contract, prices, liquidityPools, decimals, project }: SupplyDataObject) => {
  const getProjectTokensTotalSupply = async () => await contract.projectContract.totalSupply();
  const getBurnedTokensBalance = async () => await contract.projectContract.balanceOf(project.burnAddress.trim());

  /** Calculate the liquidity value of the liquidity pool based on its pair token (TITANO/WBNB) */
  const getLiquidity = async () => {
    const pairPrice = await prices.getPairPrice();
    const projectPairTokensInLiquidityPool = await liquidityPools.getProjectPairTokensInLiquidityPool();
    const pairTokensDecimal = await decimals.getPairTokensDecimal();

    return pairPrice * toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal);
  };

  /** Calculate the market cap of the token based on its token price (USD) */
  const getMarketCap = async () => {
    const tokenPrice = await prices.getTokenPrice();
    const projectTokensDecimal = await decimals.getProjectTokensDecimal();
    const projectTokensTotalSupply = await getProjectTokensTotalSupply();

    return tokenPrice * toDecimals(projectTokensTotalSupply, projectTokensDecimal);
  };

  const getTotalSupply = async () => {
    const projectTokensDecimal = await decimals.getProjectTokensDecimal();
    const projectTokensTotalSupply = await getProjectTokensTotalSupply();

    return toDecimals(projectTokensTotalSupply, projectTokensDecimal);
  };

  const getBurnedTokens = async () => {
    const projectTokensDecimal = await decimals.getProjectTokensDecimal();
    const burnedTokensBalance = await getBurnedTokensBalance();

    return toDecimals(burnedTokensBalance, projectTokensDecimal);
  };

  return {
    getLiquidity,
    getMarketCap,
    getTotalSupply,
    getBurnedTokens,
  };
};

export default getSupplyData;
