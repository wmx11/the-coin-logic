import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, image, integer, json, relationship, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Quiz: Lists = {
  Quiz: list({
    fields: {
      title: text(),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('slug', 'title')(data),
        },
      }),
      imageUrl: text(),
      image: image({ storage: 'localImages' }),
      enabled: checkbox({ defaultValue: false }),
      hasRewards: checkbox({
        defaultValue: false,
        ui: { description: 'Does the quiz give out rewards upon successful completion' },
      }),
      rewardsAmount: integer({ ui: { description: 'The amount of tokens or anything else' } }),
      rewardType: text({ ui: { description: 'The type of reward - token, busd, usdt, etc.' } }),
      description: json({ ui: { description: 'General description about the quiz' } }),
      onWinDescription: json({
        ui: { description: 'This will be displayed to the player when they guess everything right' },
      }),
      onEndDescription: json({ ui: { description: 'This will be displayed to the player when they end the quiz' } }),
      config: json({ ui: { description: 'General config of the quiz' } }),
      totalWinners: integer({ ui: { description: 'The total number of possible winners for the quiz' } }),
      winners: integer({ ui: { description: 'The amount of winners in this quiz' } }),
      timePerQuestion: integer({
        ui: { description: 'The time in seconds given to each quetsion.' },
        defaultValue: 0,
        validation: {
          max: 60,
          min: 0,
        },
      }),
      views: integer(),
      project: relationship({ ref: 'Project' }),
      user: relationship({ ref: 'User' }),
      likes: relationship({ ref: 'User', many: true, ui: { displayMode: 'count' } }),
      startDate: timestamp(),
      endDate: timestamp(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Quiz;
