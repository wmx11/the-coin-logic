import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, json, relationship, text, timestamp, integer } from '@keystone-6/core/fields';

const Transcription: Lists = {
  Transcription: list({
    fields: {
      title: text(),
      slug: text(),
      summary: text({ ui: { displayMode: 'textarea' } }),
      transcriptionId: text(),
      isPublic: checkbox({ defaultValue: true }),
      contentUrl: text(),
      content: json(),
      user: relationship({ ref: 'User' }),
      project: relationship({ ref: 'Project' }),
      views: integer(),
      likes: relationship({ ref: 'User', many: true, ui: { displayMode: 'count' } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Transcription;
