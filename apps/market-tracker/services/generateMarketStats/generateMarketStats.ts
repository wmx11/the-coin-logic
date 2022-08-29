import { Project } from 'tcl-packages/types';
import toDecimals from 'tcl-packages/utils/toDecimals';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';
import {
  getHoldersCountByProjectIdFrom,
  getAverageHoldingsByProjectId,
  getNewHoldersCountByProjectId,
  getLeavingHoldersCountByProjectId,
  getRecurringHoldersCountByProjectId,
} from 'tcl-packages/holders-tracker/services/holders';
import { getHoldersDataByProjectId } from 'tcl-packages/graphql/queries';
import resolveCustomData from '../resolveCustomData';
import sleep from 'tcl-packages/utils/sleep';

type Cache = {
  pairTokensInPairLiquidityPool: string;
  pairStableInPairLiquidityPool: string;
  pairTokensDecimal: string;
  pairStableTokensDecimal: string;
};

const generateMarketStats = async (project: Project, cache: Map<string, Cache>) => {
  if (!project) {
    throw new Error('No project found. Please provide a project.');
  }

  if (!project.contractAddress || !project.liquidityPair) {
    throw new Error(
      'Project has no contract address or liquidity pairs set. Please add the contract address and liquidity pairs  to the project.',
    );
  }

  const contract = marketStatsContract({ rpc: project.network?.url as string, project });

  if (!contract) {
    throw new Error('Some data is missing to initialize the contract. Please check the RPC address or project data');
  }

  const stablePairAddress = project?.liquidityPair[0].stablePair?.address;

  if (!cache.has(stablePairAddress as string)) {
    const pairTokensInPairLiquidityPool = await contract.projectPairContract.balanceOf(stablePairAddress as string);
    const pairStableInPairLiquidityPool = await contract.pairStableContract.balanceOf(stablePairAddress as string);
    const pairTokensDecimal = await contract.projectPairContract.decimals();
    const pairStableTokensDecimal = await contract.pairStableContract.decimals();

    cache.set(stablePairAddress as string, {
      pairTokensInPairLiquidityPool,
      pairStableInPairLiquidityPool,
      pairTokensDecimal,
      pairStableTokensDecimal,
    });

    await sleep(5);
  }

  const fromCache = cache.get(stablePairAddress as string);

  /** Get project token and its pair balance in the liquidity pool (TITANO/WBNB)*/
  const projectTokensInLiquidityPool = await contract.projectContract.balanceOf(project.pairAddress as string);
  const projectPairTokensInLiquidityPool = await contract.projectPairContract.balanceOf(project.pairAddress as string);

  /** Get the project pair token balance and the stable coin balance in the stable liquidity pair (WBNB/BUSD) */
  const pairTokensInPairLiquidityPool = fromCache?.pairTokensInPairLiquidityPool;
  const pairStableInPairLiquidityPool = fromCache?.pairStableInPairLiquidityPool;

  /** Get the total supply of the project token */
  const projectTokensTotalSupply = await contract.projectContract.totalSupply();

  /** Get all related decimals */
  const projectTokensDecimal = await contract.projectContract.decimals();

  const pairTokensDecimal = fromCache?.pairTokensDecimal;
  const pairStableTokensDecimal = fromCache?.pairStableTokensDecimal;

  const holders = await getHoldersCountByProjectIdFrom(project.id, project.trackHoldersFromTokenAmount || 0);

  const avgHoldings = await getAverageHoldingsByProjectId(project.id);

  /** Get previous holders data in case holders or avgHoldings getters fail */
  const prevHoldersData = await getHoldersDataByProjectId({ id: project.id });

  /** Calculate the token price in its pair token (1 Titano = 0.000007 BNB) */
  const tokenPriceInPairTokens =
    toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal) /
    toDecimals(projectTokensInLiquidityPool, projectTokensDecimal);

  /** Calculate the price of the pair token (1 BNB = $270) */
  const pairPrice =
    toDecimals(pairStableInPairLiquidityPool as string, pairStableTokensDecimal) /
    toDecimals(pairTokensInPairLiquidityPool as string, pairTokensDecimal);

  /** Calculate the price of the token in USD (1 Titano = $0.0025) */
  const tokenPrice = tokenPriceInPairTokens * pairPrice;

  /** Calculate the liquidity value of the liquidity pool based on its pair token (TITANO/WBNB) */
  const liquidity = pairPrice * toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal);

  /** Calculate the market cap of the token based on its token price (USD) */
  const marketCap = tokenPrice * toDecimals(projectTokensTotalSupply, projectTokensDecimal);

  const totalSupply = toDecimals(projectTokensTotalSupply, projectTokensDecimal);

  const customData = await resolveCustomData(project.customData, { pairPrice, tokenPrice });

  const newHolders = await getNewHoldersCountByProjectId(project.id, project.trackHoldersFromTokenAmount as number);

  const leavingHolders = await getLeavingHoldersCountByProjectId(
    project.id,
    project.trackHoldersFromTokenAmount as number,
  );

  const recurringHolders = await getRecurringHoldersCountByProjectId(
    project.id,
    project.trackHoldersFromTokenAmount as number,
  );

  const results = {
    id: project.id,
    price: tokenPrice,
    totalSupply,
    marketCap,
    liquidity,
    pairPrice,
    holders: holders || prevHoldersData?.holders,
    avgHoldings: avgHoldings || prevHoldersData?.avgHoldings,
    newHolders: newHolders || prevHoldersData?.newHolders,
    recurringHolders: recurringHolders || prevHoldersData?.recurringHolders,
    leavingHolders: leavingHolders || prevHoldersData?.leavingHolders,
    customData,
  };

  return results;
};

export default generateMarketStats;
