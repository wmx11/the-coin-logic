import { prismaClient } from 'tcl-packages/prismaClient';
import { Project } from 'tcl-packages/types';
import { startOfToday } from 'date-fns';
import marketStatsContract from 'tcl-packages/web3/marketStatsContract';

const generateMarketStatsNFT = async (project: Project) => {
  const contract = marketStatsContract({ rpc: project.network?.url as string, project });

  const [sales, holdings] = await Promise.all([
    prismaClient?.transfer.aggregate({
      _sum: {
        amount: true,
      },
      _max: {
        amount: true,
      },
      _min: {
        amount: true,
      },
      _avg: {
        amount: true,
      },
      where: {
        createdAt: {
          gte: startOfToday(),
        },
        projectId: project.id,
      },
    }),
    prismaClient.holder.aggregate({
      _sum: {
        balance: true,
      },
      where: {
        dateAdded: {
          gte: startOfToday(),
        },
        projectsId: project.id,
      },
    }),
  ]);

  let totalSupply = 0;

  // NFT contract might not have the totalSupply method and it might fail.
  // This will act as a fallback to 0 if it does fail;
  try {
    const totalSupplyString = await contract.projectContract.totalSupply();
    totalSupply = parseInt(totalSupplyString, 10) || 0;
  } catch (error) {
    console.log(error);
  }

  const burnedTokens = await contract.projectContract.balanceOf(project?.burnAddress as string);
  const marketCap = (totalSupply || 0) * (sales?._avg?.amount || 0);

  return {
    totalSupply: totalSupply || 0,
    marketCap: marketCap || 0,
    avgPrice: sales?._avg?.amount || 0,
    floorPrice: sales?._min?.amount || 0,
    ceilPrice: sales?._max?.amount || 0,
    salesVolume: sales?._sum?.amount || 0,
    burnedTokens: parseInt(burnedTokens, 10) || null,
    totalHoldings: holdings?._sum?.balance || 0,
    txns: undefined,
    volume: undefined,
    fdv: undefined,
    pairPrice: undefined,
    liquidity: undefined,
    price: undefined,
  };
};

export default generateMarketStatsNFT;
