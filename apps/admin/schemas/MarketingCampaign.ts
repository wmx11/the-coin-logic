import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { calendarDay, checkbox, float, relationship, text, timestamp, select } from '@keystone-6/core/fields';
import { nanoid } from 'nanoid';
import generateInputData from '../utils/generateInputData';

const MarketingCampaign: Lists = {
  MarketingCampaign: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      campaignId: text({
        ui: { description: 'ID of the marketing campaign' },
        hooks: {
          resolveInput: async (data) => generateInputData('referralCode', `tcl_mc_${nanoid(10)}`)(data),
        },
      }),
      users: relationship({ ref: 'User.marketingCampaigns', many: true }),
      status: select({
        options: [
          { label: 'Planning', value: 'planning' },
          { label: 'In Progress', value: 'inProgress' },
          { label: 'Success', value: 'success' },
          { label: 'Failed', value: 'failed' },
        ],
      }),
      enabled: checkbox({ defaultValue: false }),
      isPercentage: checkbox({
        defaultValue: false,
        ui: { description: 'Should the goals be calculated in percentages.' },
      }),
      isInternal: checkbox({
        defaultValue: false,
        ui: { description: 'Specifies if this marketing campaign is internal.' },
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
      marketBudget: float({ ui: { description: 'Budget set for the market metrics (price, volume, holders etc.)' } }),
      socialsBudget: float({ ui: { description: 'Budget set for the socials metrics (followers, clicks)' } }),
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
