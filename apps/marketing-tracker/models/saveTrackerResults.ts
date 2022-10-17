import { prismaClient } from 'tcl-packages/prismaClient';

const saveTrackerResults = async ({ data, campaignId }) => {
  try {
    const campaign = await prismaClient.marketingCampaign.findFirst({
      where: {
        campaignId,
      },
      select: {
        id: true,
        project: {
          select: {
            website: true,
            whitepaper: true,
            twitter: true,
            telegram: true,
            reddit: true,
            discord: true,
            youtube: true,
            medium: true,
            liquidityPair: {
              select: {
                tokenAddress: true,
                exchange: {
                  select: {
                    tradeUrl: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const addTrackerResults = await prismaClient.marketingTrackerResult.create({
      data: {
        ...data,
        marketingCampaign: {
          connect: { id: campaign.id },
        },
      },
    });

    // Add exchange key to the campaign
    Object.assign(campaign.project, {
      exchange: campaign.project.liquidityPair.map((item) => `${item.exchange.tradeUrl}${item.tokenAddress}`)[0],
    });

    console.log(addTrackerResults);

    return campaign;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default saveTrackerResults;
