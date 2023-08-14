import { Project } from 'tcl-packages/types';

const generateMarketStatsCustom = async (project: Project) => {
  const projectId = project.id;

  const customGeneratorFunction = await import(`tcl-packages/custom-tokens/${projectId}`);

  if (!customGeneratorFunction || !customGeneratorFunction?.default) {
    return null;
  }

  const { price, marketCap, pairPrice, liquidity, totalSupply, burnedTokens, txns, volume, fdv } =
    await customGeneratorFunction.default(project);

  return {
    price,
    marketCap,
    pairPrice,
    liquidity,
    totalSupply,
    burnedTokens,
    txns,
    volume,
    fdv,
  };
};

export default generateMarketStatsCustom;
