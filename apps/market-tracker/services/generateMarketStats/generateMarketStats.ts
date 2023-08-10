import { getPairInformationByChainId } from 'tcl-packages/dexscreener';
import { Project } from 'tcl-packages/types';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';
import generateMarketStatsDefault from './generateMarketStatsDefault';
import generateMarketStatsDexScreener from './generateMarketStatsDexScreener';
import getPrimaryPairAddress from 'tcl-packages/utils/getPrimaryPairAddress';
import { MarketStats } from './types';
import generateMarketStatsNFT from './generateMarketStatsNFT';

const generateMarketStats = async (project: Project): Promise<MarketStats> => {
  if (!project) {
    throw new Error('No project found. Please provide a project.');
  }

  if (project.isNft && project.contractAddress) {
    const marketStats = await generateMarketStatsNFT(project);
    return marketStats;
  }

  if (!project.contractAddress || !project.liquidityPair) {
    throw new Error(
      'Project has no contract address or liquidity pairs set. Please add the contract address and liquidity pairs to the project.',
    );
  }

  const contract = marketStatsContract({ rpc: project.network?.url as string, project });

  if (!contract) {
    throw new Error('Some data is missing to initialize the contract. Please check the RPC address or project data');
  }

  const primaryPairAddress = getPrimaryPairAddress(project);

  if (!primaryPairAddress.length) {
    throw new Error(`No primary liquidity pair found for ${project.name}.`);
  }

  const defaultMarketStatsGenerator = await generateMarketStatsDefault(project);

  if (project.useDexScreener || primaryPairAddress[0].useDexScreener) {
    const marketStats = await generateMarketStatsDexScreener(project, defaultMarketStatsGenerator);
    return marketStats;
  }

  // If the project has the lowest payment plan available and is not NFT
  if (project.trackPrice && project.trackMarketCap && !project.trackData && !project.isNft) {
    const price = await defaultMarketStatsGenerator.prices.getTokenPrice();
    const marketCap = await defaultMarketStatsGenerator.supply.getMarketCap();

    return {
      price,
      marketCap,
      pairPrice: undefined,
      liquidity: undefined,
      totalSupply: undefined,
      burnedTokens: undefined,
      txns: undefined,
      volume: undefined,
      fdv: undefined,
    };
  }

  const price = await defaultMarketStatsGenerator.prices.getTokenPrice();
  const pairPrice = await defaultMarketStatsGenerator.prices.getPairPrice();
  const liquidity = await defaultMarketStatsGenerator.supply.getLiquidity();
  const marketCap = await defaultMarketStatsGenerator.supply.getMarketCap();
  const totalSupply = await defaultMarketStatsGenerator.supply.getTotalSupply();
  const burnedTokens = await defaultMarketStatsGenerator.supply.getBurnedTokens();

  const dexData = await getPairInformationByChainId(project.network.slug, project.pairAddress);
  const pair = dexData[0];

  return {
    price,
    pairPrice,
    liquidity,
    marketCap,
    totalSupply,
    burnedTokens,
    txns: pair.txns || undefined,
    volume: pair.volume || undefined,
    fdv: pair.fdv || undefined,
  };
};

export default generateMarketStats;
