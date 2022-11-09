import { Lists } from '.keystone/types';

import {
  Content,
  ContentBlock,
  ContentType,
  DiscordBot,
  Exchange,
  LiquidityPair,
  MarketStat,
  Network,
  Project,
  Notification,
  Role,
  StableLiquidityPair,
  Tag,
  Token,
  User,
  Image,
  Holders,
  CustomTracker,
  Creator,
  CreatorRating,
  CreatorReview,
  MarketingCampaign,
  MarketingTrackerResult,
  SocialStat,
  Auditor,
  KycGroup,
  Audit,
  Kyc,
  Product,
  ProjectRating,
  ProjectComment,
  Subscription,
  Cart,
  CartItem,
  Order,
  OrderItem,
} from './schemas';

export const lists: Lists = {
  ...User,
  ...Subscription,
  ...Product,
  ...Role,
  ...Project,
  ...Audit,
  ...Kyc,
  ...Notification,
  ...MarketStat,
  ...SocialStat,
  ...CustomTracker,
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
  ...Image,
  ...Holders,
  ...Creator,
  ...Auditor,
  ...KycGroup,
  ...CreatorRating,
  ...CreatorReview,
  ...ProjectRating,
  ...ProjectComment,
  ...MarketingCampaign,
  ...MarketingTrackerResult,
  ...Cart,
  ...CartItem,
  ...Order,
  ...OrderItem,
};
