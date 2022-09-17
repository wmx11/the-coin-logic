import toDecimals from 'tcl-packages/utils/toDecimals';
import getDecimals from './getDecimals';
import getLiquidityPoolBalances from './getLiquidityPoolBalances';

const getPrices = (
  liquidityPools: ReturnType<typeof getLiquidityPoolBalances>,
  decimals: ReturnType<typeof getDecimals>,
) => {
  const getTokenPriceInPairTokens = async () => {
    const { getProjectPairTokensInLiquidityPool, getProjectTokensInLiquidityPool } = liquidityPools;
    const { getPairTokensDecimal, getProjectTokensDecimal } = decimals;

    const projectPairTokensInLiquidityPool = await getProjectPairTokensInLiquidityPool();
    const projectTokensInLiquidityPool = await getProjectTokensInLiquidityPool();
    const pairTokensDecimal = await getPairTokensDecimal();
    const projectTokensDecimal = await getProjectTokensDecimal();

    return (
      toDecimals(projectPairTokensInLiquidityPool, pairTokensDecimal) /
      toDecimals(projectTokensInLiquidityPool, projectTokensDecimal)
    );
  };

  const getPairPrice = async () => {
    const { getPairStableInPairLiquidityPool, getPairTokensInPairLiquidityPool } = liquidityPools;
    const { getPairStableTokensDecimal, getPairTokensDecimal } = decimals;

    const pairStableInPairLiquidityPool = await getPairStableInPairLiquidityPool();
    const pairTokensInPairLiquidityPool = await getPairTokensInPairLiquidityPool();
    const pairStableTokensDecimal = await getPairStableTokensDecimal();
    const pairTokensDecimal = await getPairTokensDecimal();

    return (
      toDecimals(pairStableInPairLiquidityPool as string, pairStableTokensDecimal) /
      toDecimals(pairTokensInPairLiquidityPool as string, pairTokensDecimal)
    );
  };

  /** Calculate the price of the token in USD (1 Titano = $0.0025) */
  const getTokenPrice = async () => {
    const tokenPriceInPairTokens = await getTokenPriceInPairTokens();
    const pairPrice = await getPairPrice();

    return tokenPriceInPairTokens * pairPrice;
  };

  return {
    getTokenPriceInPairTokens,
    getPairPrice,
    getTokenPrice,
  };
};

export default getPrices;
