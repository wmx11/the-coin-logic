import { Lists } from '.keystone/types';

import {
  Content,
  ContentBlock, ContentType, DiscordBot,
  Exchange,
  LiquidityPair,
  MarketStat,
  Network, Payment, Project, Notification,
  Role,
  StableLiquidityPair,
  Tag,
  Token,
  User,
  Image
} from './schemas';

export const lists: Lists = {
  ...User,
  ...Payment,
  ...Role,
  ...Project,
  ...Notification,
  ...MarketStat,
  ...LiquidityPair,
  ...Tag,
  ...Exchange,
  ...Token,
  ...Network,
  ...StableLiquidityPair,
  ...DiscordBot,
  ...Content,
  ...ContentBlock,
  ...ContentType,
  ...Image
};
