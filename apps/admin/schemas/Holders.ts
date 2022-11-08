import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, float, integer, relationship, text, timestamp } from '@keystone-6/core/fields';

const Holders: Lists = {
  Block: list({
    fields: {
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      firstBlock: integer({ defaultValue: 0 }),
      previousBlock: integer({ defaultValue: 0 }),
      lastBlock: integer({ defaultValue: 0 }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
  Transfer: list({
    fields: {
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      amount: float({ defaultValue: 0 }),
      type: integer(),
      address: text(),
      fromAddress: text(),
      toAddress: text({ isIndexed: true }),
      hash: text({ isIndexed: true }),
      block: integer(),
      createdAt: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
  Holder: list({
    fields: {
      address: text({ isIndexed: true }),
      balance: float({ defaultValue: 0 }),
      note: text(),
      isContract: checkbox({ defaultValue: false }),
      projects: relationship({ ref: 'Project', many: true }),
      transfers: relationship({ ref: 'Transfer', many: true, ui: { displayMode: 'count' } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Holders;
