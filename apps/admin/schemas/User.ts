import { Lists } from '.keystone/types';
import { graphql, list } from '@keystone-6/core';
import { checkbox, password, relationship, text, timestamp, virtual } from '@keystone-6/core/fields';
import { isBefore } from 'date-fns';
import { nanoid } from 'nanoid';
import { Product } from '../types';
import generateInputData from '../utils/generateInputData';
import { isAdmin, isAdminOrPerson } from '../utils/rbac';

const User: Lists = {
  User: list({
    fields: {
      name: text(),
      firstName: text({
        access: {
          read: isAdminOrPerson,
          update: isAdminOrPerson,
        },
      }),
      lastName: text({
        access: {
          read: isAdminOrPerson,
          update: isAdminOrPerson,
        },
      }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
        access: {
          update: isAdmin,
        },
      }),
      ip: text({
        access: {
          read: isAdminOrPerson,
        },
      }),
      userAuth: relationship({ ref: 'UserAuth.user'}),
      roles: relationship({
        ref: 'Role.users',
        many: true,
        access: {
          read: isAdmin,
          update: isAdmin,
        },
      }),
      password: password({
        validation: { isRequired: true },
        access: {
          update: isAdminOrPerson,
        },
      }),
      isAdmin: checkbox({
        defaultValue: false,
        access: {
          update: isAdmin,
        },
      }),
      isSubscribedToEmail: checkbox({
        defaultValue: false,
        ui: { description: 'Is the user subscribed to the email notifications' },
        access: {
          read: isAdminOrPerson,
          update: isAdminOrPerson,
        },
      }),
      isNotChargeable: checkbox({
        defaultValue: false,
        ui: { description: 'Allows to use the services without paying' },
        access: {
          read: isAdminOrPerson,
          update: isAdminOrPerson,
        },
      }),
      isVerified: checkbox({
        defaultValue: false,
        ui: { description: "Is user's email verified" },
      }),
      subscription: relationship({ ref: 'Subscription.user' }),
      referrer: text({ ui: { description: 'Refferring person' } }),
      referralCode: text({
        ui: { description: 'Personal referral code' },
        hooks: {
          resolveInput: async (data) => generateInputData('referralCode', `tcl_${nanoid()}`)(data),
        },
      }),
      walletAddress: text({ ui: { description: 'Wallet address of the user. Used for referral rewards.' } }),
      content: relationship({ ref: 'Content.user', many: true }),
      projects: relationship({ ref: 'Project.user', many: true }),
      managedProjects: relationship({ ref: 'Project', many: true }),
      marketingCampaigns: relationship({ ref: 'MarketingCampaign.users', many: true }),
      followedProviders: relationship({ ref: 'Provider.followers', many: true }),
      serviceTokens: relationship({ ref: 'ServiceToken.user' }),
      providerProfile: relationship({ ref: 'Provider.user' }),
      dateCreated: timestamp({ defaultValue: { kind: 'now' } }),
      subscriptionStatus: virtual({
        field: graphql.field({
          type: graphql.object<{
            isValid: boolean;
            products: Product[];
            dateFrom: Date;
            dateTo: Date;
          }>()({
            name: 'subscriptionStatus',
            fields: {
              isValid: graphql.field({ type: graphql.Boolean }),
              products: graphql.field({ type: graphql.JSON }),
              dateFrom: graphql.field({ type: graphql.DateTime }),
              dateTo: graphql.field({ type: graphql.DateTime }),
            },
          }),
          args: {
            userId: graphql.arg({
              type: graphql.ID,
            }),
          },
          async resolve(item, { userId }, context) {
            const { subscription } = await context.prisma.User.findFirst({
              where: {
                id: {
                  equals: userId,
                },
              },
              select: {
                subscription: {
                  select: {
                    dateFrom: true,
                    dateTo: true,
                    product: {
                      select: {
                        slug: true,
                        name: true,
                        sku: true,
                      },
                    },
                  },
                },
              },
            });

            if (!subscription) {
              return null;
            }

            const { product, dateFrom, dateTo } = subscription;
            const isValid = isBefore(new Date(), new Date(dateTo));

            return { isValid, products: product, dateFrom, dateTo };
          },
        }),
        ui: { query: '{ dateFrom dateTo }' },
      }),
    },
  }),
};

export default User;
