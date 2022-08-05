import { CreateMarketStatsType } from '../types/marketStats';
import { Project } from '../types/project';
import toDecimals from '../utils/toDecimals';
import Contract from '../web3/contract';

const getMarketStatsByProject = (project: Project): Promise<CreateMarketStatsType> => {
  return new Promise(async (resolve) => {
    try {
      if (!project.contractAddress) {
        return console.log('Project has no contract address');
      }

      const contract = new Contract({ rpc: project.network.url, project });

      /** Get project token and its pair balance in the liquidity pool (TITANO/WBNB)*/
      const projectTokensInLiquidityPool = await contract.projectContract.balanceOf(project.pairAddress);
      const projectPairTokensInLiquidityPool = await contract.projectPairContract.balanceOf(project.pairAddress);

      /** Get the project pair token balance and the stable coin balance in the stable liquidity pair (WBNB/BUSD) */
      const pairTokensInPairLiquidityPool = await contract.projectPairContract.balanceOf(
        project.stableLiquidityPair.address,
      );
      const pairStableInPairLiquidityPool = await contract.pairStableContract.balanceOf(
        project.stableLiquidityPair.address,
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

      /** Persist the restults in the database */
      const results = {
        id: project.id,
        price: tokenPrice,
        totalSupply: toDecimals(projectTokensTotalSupply, projectTokensDecimal),
        marketCap,
        liquidity,
        pairPrice,
      };

      return resolve(results);
    } catch (error) {
      console.log(error);
    }
  });
};

export default getMarketStatsByProject;
