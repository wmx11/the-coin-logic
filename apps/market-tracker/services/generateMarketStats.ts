import { Project } from 'tcl-packages/types';
import toDecimals from 'tcl-packages/utils/toDecimals';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';

const generateMarketStats = async (project: Project) => {
  if (!project) {
    console.log('Please provide a project');
    throw new Error('No project found. Please provide a project.');
  }

  if (!project.contractAddress || !project.liquidityPair) {
    console.log('Project has no contract address or liquidity pairs set.');
    throw new Error(
      'Project has no contract address or liquidity pairs set. Please add the contract address and liquidity pairs  to the project.',
    );
  }

  const contract = marketStatsContract({ rpc: project.network?.url as string, project });

  if (!contract) {
    console.log(project.network?.url, project, 'Some data is missing to initialize the contract');
    throw new Error('Some data is missing to initialize the contract. Please check the RPC address or project data');
  }

  /** Get project token and its pair balance in the liquidity pool (TITANO/WBNB)*/
  const projectTokensInLiquidityPool = await contract.projectContract.balanceOf(project.pairAddress as string);
  const projectPairTokensInLiquidityPool = await contract.projectPairContract.balanceOf(project.pairAddress as string);

  /** Get the project pair token balance and the stable coin balance in the stable liquidity pair (WBNB/BUSD) */
  const pairTokensInPairLiquidityPool = await contract.projectPairContract.balanceOf(
    project?.liquidityPair[0].stablePair?.address as string,
  );
  const pairStableInPairLiquidityPool = await contract.pairStableContract.balanceOf(
    project?.liquidityPair[0].stablePair?.address as string,
  );

  /** Get the total supply of the project token */
  const projectTokensTotalSupply = await contract.projectContract.totalSupply();

  /** Get all related decimals */
  const projectTokensDecimal = await contract.projectContract.decimals();
  const pairTokensDecimal = await contract.projectContract.decimals();
  const pairStableTokensDecimal = await contract.pairStableContract.decimals();

  /** Calculate the token price in its pair token (1 Titano = 0.000007 BNB) */
  const tokenPriceInPairTokens =
    toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal) /
    toDecimals(projectTokensInLiquidityPool, projectTokensDecimal);

  /** Calculate the price of the pair token (1 BNB = $270) */
  const pairPrice =
    toDecimals(pairStableInPairLiquidityPool, pairStableTokensDecimal) /
    toDecimals(pairTokensInPairLiquidityPool, pairTokensDecimal);

  /** Calculate the price of the token in USD (1 Titano = $0.0025) */
  const tokenPrice = tokenPriceInPairTokens * pairPrice;

  /** Calculate the liquidity value of the liquidity pool based on its pair token (TITANO/WBNB) */
  const liquidity = pairPrice * toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal);

  /** Calculate the market cap of the token based on its token price (USD) */
  const marketCap = tokenPrice * toDecimals(projectTokensTotalSupply, projectTokensDecimal);

  const results = {
    id: project.id,
    price: tokenPrice,
    totalSupply: toDecimals(projectTokensTotalSupply, projectTokensDecimal),
    marketCap,
    liquidity,
    pairPrice,
  };

  return results;
};

export default generateMarketStats;
