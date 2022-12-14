import { prismaClient } from 'tcl-packages/prismaClient';
import { isAfter, isBefore } from 'date-fns';

const saveTrackerResults = async ({ data, campaignId }) => {
  const currentDate = new Date();

  if (!campaignId) {
    return null;
  }

  try {
    const campaign = await prismaClient?.marketingCampaign.findFirst({
      where: {
        campaignId: {
          equals: campaignId,
        },
        enabled: true,
        status: {
          equals: 'live',
        },
      },
      select: {
        id: true,
        endDate: true,
        startDate: true,
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

    // If  it's not ended and it's started, save the data
    if (
      campaign &&
      isBefore(currentDate, new Date(campaign?.endDate)) &&
      isAfter(currentDate, new Date(campaign?.startDate))
    ) {
      await prismaClient?.marketingTrackerResult.create({
        data: {
          ...data,
          marketingCampaignId: campaign.id,
        },
      });
    }

    if (campaign?.project) {
      // Add exchange key to the campaign
      Object.assign(campaign?.project, {
        exchange: campaign?.project?.liquidityPair.map((item) => `${item?.exchange?.tradeUrl}${item?.tokenAddress}`)[0],
      });
    }

    return campaign;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default saveTrackerResults;
