import { Lists } from '.keystone/types';

import {
  Content,
  Comment,
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
  Provider,
  MarketingCampaign,
  MarketingTrackerResult,
  SocialStat,
  Auditor,
  KycGroup,
  Audit,
  Kyc,
  Product,
  TransparencyRating,
  Subscription,
  Cart,
  CartItem,
  Order,
  OrderItem,
  DiscordConfig,
  DiscordEvent,
  DiscordAnnouncement,
  Vote,
  PaymentPlan,
  Coupon,
  Quiz,
  Transcription,
  EmailList,
  ServiceToken,
  ServiceTokenUsage,
  Account,
  Session,
  VerificationToken,
  UserAuth
} from './schemas';

export const lists: Lists = {
  ...User,
  ...Subscription,
  ...Product,
  ...Role,
  ...Project,
  ...PaymentPlan,
  ...Coupon,
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
  ...DiscordConfig,
  ...DiscordEvent,
  ...DiscordAnnouncement,
  ...DiscordBot,
  ...Content,
  ...Comment,
  ...ContentBlock,
  ...ContentType,
  ...Image,
  ...Holders,
  ...Provider,
  ...Auditor,
  ...KycGroup,
  ...TransparencyRating,
  ...MarketingCampaign,
  ...MarketingTrackerResult,
  ...Cart,
  ...CartItem,
  ...Order,
  ...OrderItem,
  ...Vote,
  ...Quiz,
  ...Transcription,
  ...EmailList,
  ...ServiceToken,
  ...ServiceTokenUsage,
  ...Account,
  ...Session,
  ...VerificationToken,
  ...UserAuth
};
