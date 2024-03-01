import { ethers } from 'ethers';
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
  const getProjectTokensTotalSupply = async () => {
    const totalSupply = await contract.projectContract.totalSupply();
    const parsedTotalSupply = parseFloat(ethers.formatUnits(totalSupply) || '0');
    return parsedTotalSupply;
  };
  const getBurnedTokensBalance = async () => {
    const burnedTokensAmount = await contract.projectContract.balanceOf(project.burnAddress.trim());
    const parsedBurnedTokensAmount = parseFloat(ethers.formatUnits(burnedTokensAmount).substring(0, 15) || '0');
    return parsedBurnedTokensAmount;
  };

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
    const projectTokensTotalSupply = await getProjectTokensTotalSupply();

    return tokenPrice * projectTokensTotalSupply;
  };

  const getTotalSupply = async () => {
    const projectTokensTotalSupply = await getProjectTokensTotalSupply();

    return projectTokensTotalSupply;
  };

  const getBurnedTokens = async () => {
    const burnedTokensBalance = await getBurnedTokensBalance();
    return burnedTokensBalance;
  };

  return {
    getLiquidity,
    getMarketCap,
    getTotalSupply,
    getBurnedTokens,
  };
};

export default getSupplyData;
