import { Project } from 'tcl-packages/types';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';
import getDecimals from './getDecimals';
import getLiquidityPoolBalances from './getLiquidityPoolBalances';
import getPrices from './getPrices';
import getSupplyData from './getSupplyData';

const generateMarketStatsDefault = async (project: Project) => {
  const contract = marketStatsContract({ rpc: project.network?.url as string, project });
  const liquidityPoolBalances = getLiquidityPoolBalances(contract, project);
  const decimals = getDecimals(contract);
  const prices = getPrices(liquidityPoolBalances, decimals);
  const supply = getSupplyData({ contract, prices, liquidityPools: liquidityPoolBalances, decimals, project });

  return {
    supply,
    prices,
  };
};

export default generateMarketStatsDefault;
