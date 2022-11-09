import { Lists } from '.keystone/types';
import { graphql, list } from '@keystone-6/core';
import { relationship, text, timestamp, virtual } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';

const socials = ['website', 'whitepaper', 'twitter', 'telegram', 'discord', 'reddit', 'youtube', 'medium', 'exchange'];

const MarketingTrackerResult: Lists = {
  MarketingTrackerResult: list({
    graphql: {
      cacheHint: {
        maxAge: 5 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      referer: text(),
      ipAddress: text(),
      userAgent: text(),
      device: text(),
      os: text(),
      timezone: text(),
      city: text(),
      country: text(),
      countryCode: text(),
      target: text(),
      marketingCampaign: relationship({ ref: 'MarketingCampaign', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
      totalClicks: virtual({
        field: graphql.field({
          type: graphql.JSON,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const total = await context.prisma.MarketingTrackerResult.count({
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });
            return total;
          },
        }),
      }),
      countryResults: virtual({
        field: graphql.field({
          type: graphql.JSON,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const total = await context.prisma.MarketingTrackerResult.groupBy({
              by: ['countryCode', 'country'],
              _count: {
                _all: true,
              },
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });
            return total;
          },
        }),
      }),
      deviceResults: virtual({
        field: graphql.field({
          type: graphql.JSON,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const total = await context.prisma.MarketingTrackerResult.groupBy({
              by: ['device', 'os'],
              _count: {
                _all: true,
              },
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });
            return total;
          },
        }),
      }),
      refererResults: virtual({
        field: graphql.field({
          type: graphql.JSON,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const total = await context.prisma.MarketingTrackerResult.groupBy({
              by: ['referer'],
              _count: {
                _all: true,
              },
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });
            return total;
          },
        }),
      }),
      uniqueClicks: virtual({
        field: graphql.field({
          type: graphql.Int,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const unique = await context.prisma.MarketingTrackerResult.groupBy({
              by: ['ipAddress'],
              _count: {
                _all: true,
                ipAddress: true,
              },
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });
            return unique.length;
          },
        }),
      }),
      socialClicks: virtual({
        field: graphql.field({
          type: graphql.JSON,
          args: {
            campaignId: graphql.arg({
              type: graphql.String,
            }),
          },
          async resolve(item, { campaignId }, context) {
            const clicks = await context.prisma.MarketingTrackerResult.groupBy({
              by: ['target', 'ipAddress'],
              _count: {
                _all: true,
              },
              where: {
                marketingCampaign: {
                  campaignId: {
                    equals: campaignId,
                  },
                },
              },
            });

            const socialClicksCount = socials.reduce((obj: { [key: string]: number }, currVal) => {
              obj[currVal] = 0;
              return obj;
            }, {});

            return clicks.reduce((obj: { [key: string]: number }, currVal: { target: string }) => {
              if (!currVal.target) {
                return obj;
              }

              const target = socials.find((item) => item === currVal.target);

              if (!target) {
                return obj;
              }

              obj[target] = obj[target] + 1;

              return obj;
            }, socialClicksCount);
          },
        }),
      }),
    },
  }),
};
export default MarketingTrackerResult;
