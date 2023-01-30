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
      amount: float({ defaultValue: 0, isIndexed: true }),
      type: integer({ isIndexed: true }),
      address: text({ isIndexed: true }),
      fromAddress: text({ isIndexed: true }),
      toAddress: text({ isIndexed: true }),
      tokenId: text({ isIndexed: true }),
      hash: text({ isIndexed: true }),
      block: integer(),
      createdAt: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
        isIndexed: true,
      }),
    },
  }),
  Holder: list({
    fields: {
      address: text({ isIndexed: true }),
      balance: float({ defaultValue: 0, isIndexed: true }),
      note: text(),
      isContract: checkbox({ defaultValue: false }),
      projects: relationship({ ref: 'Project', db: { foreignKey: true } }),
      transfers: relationship({ ref: 'Transfer', many: true, ui: { displayMode: 'count' } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
        isIndexed: true,
      }),
    },
  }),
};
export default Holders;
