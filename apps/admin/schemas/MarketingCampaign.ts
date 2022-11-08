import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import {
  calendarDay,
  checkbox,
  float, json, relationship, select, text,
  timestamp
} from '@keystone-6/core/fields';
import { nanoid } from 'nanoid';
import generateInputData from '../utils/generateInputData';

const MarketingCampaign: Lists = {
  MarketingCampaign: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      campaignId: text({
        ui: { description: 'ID of the marketing campaign' },
        hooks: {
          resolveInput: async (data) => generateInputData('campaignId', `tcl_mc_${nanoid(10)}`)(data),
        },
      }),
      users: relationship({ ref: 'User.marketingCampaigns', many: true }),
      enabled: checkbox({ defaultValue: true }),
      status: select({
        defaultValue: 'live',
        options: [
          { label: 'Live', value: 'live' },
          { label: 'Ended', value: 'ended' },
        ],
      }),
      isInternal: checkbox({
        defaultValue: false,
        ui: { description: 'Specifies if this marketing campaign is internal.' },
      }),
      trackMarket: checkbox({
        defaultValue: true,
        ui: { description: 'Should it be used to track market metrics.' },
      }),
      trackSocial: checkbox({
        defaultValue: true,
        ui: { description: 'Should it be used to track social metrics.' },
      }),
      startDate: calendarDay(),
      endDate: calendarDay(),
      budget: float({ ui: { description: 'Budget set for the marketing campaign.' } }),
      description: text({ ui: { displayMode: 'textarea' } }),
      notes: text({ ui: { displayMode: 'textarea' } }),
      agency: text({ ui: { description: 'Name of the agency we are working with.' } }),
      agencyUrl: text({ ui: { description: 'URL of the agency we are working with.' } }),
      creator: relationship({
        ref: 'Creator.marketingCampaigns',
        ui: { description: 'Select from a list of creators on TCL' },
      }),
      project: relationship({ ref: 'Project' }),
      marketStatSnapshot: json({
        ui: { description: 'A market data snapshot taken when STARTING the campaign.' },
      }),
      finalSnapshot: json({
        ui: { description: 'A market data snapshot taken when ENDING the campaign.' },
      }),
      marketBudget: float({ ui: { description: 'Budget set for the market metrics (price, volume, holders etc.)' } }),
      socialBudget: float({ ui: { description: 'Budget set for the socials metrics (followers, clicks)' } }),
      priceGoal: float(),
      marketCapGoal: float(),
      volumeGoal: float(),
      holdersGoal: float(),
      twitterGoal: float(),
      discordGoal: float(),
      telegramGoal: float(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default MarketingCampaign;
