export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Content = {
  __typename?: 'Content';
  blockName?: Maybe<ContentBlock>;
  content?: Maybe<Content_Content_Document>;
  contentType?: Maybe<ContentType>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentBlock = {
  __typename?: 'ContentBlock';
  blockName?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ContentBlockCreateInput = {
  blockName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentBlockOrderByInput = {
  blockName?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ContentBlockRelateToOneForCreateInput = {
  connect?: InputMaybe<ContentBlockWhereUniqueInput>;
  create?: InputMaybe<ContentBlockCreateInput>;
};

export type ContentBlockRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContentBlockWhereUniqueInput>;
  create?: InputMaybe<ContentBlockCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ContentBlockUpdateArgs = {
  data: ContentBlockUpdateInput;
  where: ContentBlockWhereUniqueInput;
};

export type ContentBlockUpdateInput = {
  blockName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentBlockWhereInput = {
  AND?: InputMaybe<Array<ContentBlockWhereInput>>;
  NOT?: InputMaybe<Array<ContentBlockWhereInput>>;
  OR?: InputMaybe<Array<ContentBlockWhereInput>>;
  blockName?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContentBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ContentCreateInput = {
  blockName?: InputMaybe<ContentBlockRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  contentType?: InputMaybe<ContentTypeRelateToOneForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ContentType = {
  __typename?: 'ContentType';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ContentTypeCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentTypeOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ContentTypeRelateToOneForCreateInput = {
  connect?: InputMaybe<ContentTypeWhereUniqueInput>;
  create?: InputMaybe<ContentTypeCreateInput>;
};

export type ContentTypeRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContentTypeWhereUniqueInput>;
  create?: InputMaybe<ContentTypeCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ContentTypeUpdateArgs = {
  data: ContentTypeUpdateInput;
  where: ContentTypeWhereUniqueInput;
};

export type ContentTypeUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentTypeWhereInput = {
  AND?: InputMaybe<Array<ContentTypeWhereInput>>;
  NOT?: InputMaybe<Array<ContentTypeWhereInput>>;
  OR?: InputMaybe<Array<ContentTypeWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContentTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ContentUpdateArgs = {
  data: ContentUpdateInput;
  where: ContentWhereUniqueInput;
};

export type ContentUpdateInput = {
  blockName?: InputMaybe<ContentBlockRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  contentType?: InputMaybe<ContentTypeRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentWhereInput = {
  AND?: InputMaybe<Array<ContentWhereInput>>;
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  OR?: InputMaybe<Array<ContentWhereInput>>;
  blockName?: InputMaybe<ContentBlockWhereInput>;
  contentType?: InputMaybe<ContentTypeWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Content_Content_Document = {
  __typename?: 'Content_content_Document';
  document: Scalars['JSON'];
};


export type Content_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DiscordBot = {
  __typename?: 'DiscordBot';
  apiKey?: Maybe<Scalars['String']>;
  botId?: Maybe<Scalars['String']>;
  customTracking?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  tracking?: Maybe<Scalars['String']>;
};

export type DiscordBotCreateInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  botId?: InputMaybe<Scalars['String']>;
  customTracking?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  tracking?: InputMaybe<Scalars['String']>;
};

export type DiscordBotOrderByInput = {
  apiKey?: InputMaybe<OrderDirection>;
  botId?: InputMaybe<OrderDirection>;
  customTracking?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  presence?: InputMaybe<OrderDirection>;
  tracking?: InputMaybe<OrderDirection>;
};

export type DiscordBotUpdateArgs = {
  data: DiscordBotUpdateInput;
  where: DiscordBotWhereUniqueInput;
};

export type DiscordBotUpdateInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  botId?: InputMaybe<Scalars['String']>;
  customTracking?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  tracking?: InputMaybe<Scalars['String']>;
};

export type DiscordBotWhereInput = {
  AND?: InputMaybe<Array<DiscordBotWhereInput>>;
  NOT?: InputMaybe<Array<DiscordBotWhereInput>>;
  OR?: InputMaybe<Array<DiscordBotWhereInput>>;
  apiKey?: InputMaybe<StringFilter>;
  botId?: InputMaybe<StringFilter>;
  customTracking?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  presence?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  tracking?: InputMaybe<StringNullableFilter>;
};

export type DiscordBotWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Exchange = {
  __typename?: 'Exchange';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  logo?: Maybe<ImageFieldOutput>;
  name?: Maybe<Scalars['String']>;
  tradeUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ExchangeCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  tradeUrl?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ExchangeOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  tradeUrl?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type ExchangeRelateToOneForCreateInput = {
  connect?: InputMaybe<ExchangeWhereUniqueInput>;
  create?: InputMaybe<ExchangeCreateInput>;
};

export type ExchangeRelateToOneForUpdateInput = {
  connect?: InputMaybe<ExchangeWhereUniqueInput>;
  create?: InputMaybe<ExchangeCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ExchangeUpdateArgs = {
  data: ExchangeUpdateInput;
  where: ExchangeWhereUniqueInput;
};

export type ExchangeUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  tradeUrl?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ExchangeWhereInput = {
  AND?: InputMaybe<Array<ExchangeWhereInput>>;
  NOT?: InputMaybe<Array<ExchangeWhereInput>>;
  OR?: InputMaybe<Array<ExchangeWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  tradeUrl?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type ExchangeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LiquidityPair = {
  __typename?: 'LiquidityPair';
  address?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  exchange?: Maybe<Exchange>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  project?: Maybe<Project>;
  stablePair?: Maybe<StableLiquidityPair>;
};

export type LiquidityPairCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  exchange?: InputMaybe<ExchangeRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  stablePair?: InputMaybe<StableLiquidityPairRelateToOneForCreateInput>;
};

export type LiquidityPairManyRelationFilter = {
  every?: InputMaybe<LiquidityPairWhereInput>;
  none?: InputMaybe<LiquidityPairWhereInput>;
  some?: InputMaybe<LiquidityPairWhereInput>;
};

export type LiquidityPairOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type LiquidityPairRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LiquidityPairWhereUniqueInput>>;
  create?: InputMaybe<Array<LiquidityPairCreateInput>>;
};

export type LiquidityPairRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LiquidityPairWhereUniqueInput>>;
  create?: InputMaybe<Array<LiquidityPairCreateInput>>;
  disconnect?: InputMaybe<Array<LiquidityPairWhereUniqueInput>>;
  set?: InputMaybe<Array<LiquidityPairWhereUniqueInput>>;
};

export type LiquidityPairUpdateArgs = {
  data: LiquidityPairUpdateInput;
  where: LiquidityPairWhereUniqueInput;
};

export type LiquidityPairUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  exchange?: InputMaybe<ExchangeRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  stablePair?: InputMaybe<StableLiquidityPairRelateToOneForUpdateInput>;
};

export type LiquidityPairWhereInput = {
  AND?: InputMaybe<Array<LiquidityPairWhereInput>>;
  NOT?: InputMaybe<Array<LiquidityPairWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPairWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  exchange?: InputMaybe<ExchangeWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  project?: InputMaybe<ProjectWhereInput>;
  stablePair?: InputMaybe<StableLiquidityPairWhereInput>;
};

export type LiquidityPairWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type MarketStat = {
  __typename?: 'MarketStat';
  avgHoldings?: Maybe<Scalars['Float']>;
  customData?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  holders?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  leavingHolders?: Maybe<Scalars['Float']>;
  liquidity?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  newHolders?: Maybe<Scalars['Float']>;
  pairPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  project?: Maybe<Project>;
  recurringHolders?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

export type MarketStatCreateInput = {
  avgHoldings?: InputMaybe<Scalars['Float']>;
  customData?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  holders?: InputMaybe<Scalars['Float']>;
  leavingHolders?: InputMaybe<Scalars['Float']>;
  liquidity?: InputMaybe<Scalars['Float']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  newHolders?: InputMaybe<Scalars['Float']>;
  pairPrice?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  recurringHolders?: InputMaybe<Scalars['Float']>;
  totalSupply?: InputMaybe<Scalars['Float']>;
};

export type MarketStatOrderByInput = {
  avgHoldings?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  holders?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  leavingHolders?: InputMaybe<OrderDirection>;
  liquidity?: InputMaybe<OrderDirection>;
  marketCap?: InputMaybe<OrderDirection>;
  newHolders?: InputMaybe<OrderDirection>;
  pairPrice?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  recurringHolders?: InputMaybe<OrderDirection>;
  totalSupply?: InputMaybe<OrderDirection>;
};

export type MarketStatUpdateArgs = {
  data: MarketStatUpdateInput;
  where: MarketStatWhereUniqueInput;
};

export type MarketStatUpdateInput = {
  avgHoldings?: InputMaybe<Scalars['Float']>;
  customData?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  holders?: InputMaybe<Scalars['Float']>;
  leavingHolders?: InputMaybe<Scalars['Float']>;
  liquidity?: InputMaybe<Scalars['Float']>;
  marketCap?: InputMaybe<Scalars['Float']>;
  newHolders?: InputMaybe<Scalars['Float']>;
  pairPrice?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  recurringHolders?: InputMaybe<Scalars['Float']>;
  totalSupply?: InputMaybe<Scalars['Float']>;
};

export type MarketStatWhereInput = {
  AND?: InputMaybe<Array<MarketStatWhereInput>>;
  NOT?: InputMaybe<Array<MarketStatWhereInput>>;
  OR?: InputMaybe<Array<MarketStatWhereInput>>;
  avgHoldings?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  holders?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  leavingHolders?: InputMaybe<FloatNullableFilter>;
  liquidity?: InputMaybe<FloatNullableFilter>;
  marketCap?: InputMaybe<FloatNullableFilter>;
  newHolders?: InputMaybe<FloatNullableFilter>;
  pairPrice?: InputMaybe<FloatNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  recurringHolders?: InputMaybe<FloatNullableFilter>;
  totalSupply?: InputMaybe<FloatNullableFilter>;
};

export type MarketStatWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createContent?: Maybe<Content>;
  createContentBlock?: Maybe<ContentBlock>;
  createContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  createContentType?: Maybe<ContentType>;
  createContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  createContents?: Maybe<Array<Maybe<Content>>>;
  createDiscordBot?: Maybe<DiscordBot>;
  createDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  createExchange?: Maybe<Exchange>;
  createExchanges?: Maybe<Array<Maybe<Exchange>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createLiquidityPair?: Maybe<LiquidityPair>;
  createLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  createMarketStat?: Maybe<MarketStat>;
  createMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  createNetwork?: Maybe<Network>;
  createNetworks?: Maybe<Array<Maybe<Network>>>;
  createPayment?: Maybe<Payment>;
  createPayments?: Maybe<Array<Maybe<Payment>>>;
  createProject?: Maybe<Project>;
  createProjectNotification?: Maybe<ProjectNotification>;
  createProjectNotifications?: Maybe<Array<Maybe<ProjectNotification>>>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createRoadmap?: Maybe<Roadmap>;
  createRoadmaps?: Maybe<Array<Maybe<Roadmap>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createStableLiquidityPair?: Maybe<StableLiquidityPair>;
  createStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createToken?: Maybe<Token>;
  createTokens?: Maybe<Array<Maybe<Token>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteContent?: Maybe<Content>;
  deleteContentBlock?: Maybe<ContentBlock>;
  deleteContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  deleteContentType?: Maybe<ContentType>;
  deleteContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  deleteContents?: Maybe<Array<Maybe<Content>>>;
  deleteDiscordBot?: Maybe<DiscordBot>;
  deleteDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  deleteExchange?: Maybe<Exchange>;
  deleteExchanges?: Maybe<Array<Maybe<Exchange>>>;
  deleteLiquidityPair?: Maybe<LiquidityPair>;
  deleteLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  deleteMarketStat?: Maybe<MarketStat>;
  deleteMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  deleteNetwork?: Maybe<Network>;
  deleteNetworks?: Maybe<Array<Maybe<Network>>>;
  deletePayment?: Maybe<Payment>;
  deletePayments?: Maybe<Array<Maybe<Payment>>>;
  deleteProject?: Maybe<Project>;
  deleteProjectNotification?: Maybe<ProjectNotification>;
  deleteProjectNotifications?: Maybe<Array<Maybe<ProjectNotification>>>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteRoadmap?: Maybe<Roadmap>;
  deleteRoadmaps?: Maybe<Array<Maybe<Roadmap>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteStableLiquidityPair?: Maybe<StableLiquidityPair>;
  deleteStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteToken?: Maybe<Token>;
  deleteTokens?: Maybe<Array<Maybe<Token>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateContent?: Maybe<Content>;
  updateContentBlock?: Maybe<ContentBlock>;
  updateContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  updateContentType?: Maybe<ContentType>;
  updateContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  updateContents?: Maybe<Array<Maybe<Content>>>;
  updateDiscordBot?: Maybe<DiscordBot>;
  updateDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  updateExchange?: Maybe<Exchange>;
  updateExchanges?: Maybe<Array<Maybe<Exchange>>>;
  updateLiquidityPair?: Maybe<LiquidityPair>;
  updateLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  updateMarketStat?: Maybe<MarketStat>;
  updateMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  updateNetwork?: Maybe<Network>;
  updateNetworks?: Maybe<Array<Maybe<Network>>>;
  updatePayment?: Maybe<Payment>;
  updatePayments?: Maybe<Array<Maybe<Payment>>>;
  updateProject?: Maybe<Project>;
  updateProjectNotification?: Maybe<ProjectNotification>;
  updateProjectNotifications?: Maybe<Array<Maybe<ProjectNotification>>>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateRoadmap?: Maybe<Roadmap>;
  updateRoadmaps?: Maybe<Array<Maybe<Roadmap>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateStableLiquidityPair?: Maybe<StableLiquidityPair>;
  updateStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateToken?: Maybe<Token>;
  updateTokens?: Maybe<Array<Maybe<Token>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateContentArgs = {
  data: ContentCreateInput;
};


export type MutationCreateContentBlockArgs = {
  data: ContentBlockCreateInput;
};


export type MutationCreateContentBlocksArgs = {
  data: Array<ContentBlockCreateInput>;
};


export type MutationCreateContentTypeArgs = {
  data: ContentTypeCreateInput;
};


export type MutationCreateContentTypesArgs = {
  data: Array<ContentTypeCreateInput>;
};


export type MutationCreateContentsArgs = {
  data: Array<ContentCreateInput>;
};


export type MutationCreateDiscordBotArgs = {
  data: DiscordBotCreateInput;
};


export type MutationCreateDiscordBotsArgs = {
  data: Array<DiscordBotCreateInput>;
};


export type MutationCreateExchangeArgs = {
  data: ExchangeCreateInput;
};


export type MutationCreateExchangesArgs = {
  data: Array<ExchangeCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateLiquidityPairArgs = {
  data: LiquidityPairCreateInput;
};


export type MutationCreateLiquidityPairsArgs = {
  data: Array<LiquidityPairCreateInput>;
};


export type MutationCreateMarketStatArgs = {
  data: MarketStatCreateInput;
};


export type MutationCreateMarketStatsArgs = {
  data: Array<MarketStatCreateInput>;
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput;
};


export type MutationCreateNetworksArgs = {
  data: Array<NetworkCreateInput>;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreatePaymentsArgs = {
  data: Array<PaymentCreateInput>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectNotificationArgs = {
  data: ProjectNotificationCreateInput;
};


export type MutationCreateProjectNotificationsArgs = {
  data: Array<ProjectNotificationCreateInput>;
};


export type MutationCreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationCreateRoadmapArgs = {
  data: RoadmapCreateInput;
};


export type MutationCreateRoadmapsArgs = {
  data: Array<RoadmapCreateInput>;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};


export type MutationCreateStableLiquidityPairArgs = {
  data: StableLiquidityPairCreateInput;
};


export type MutationCreateStableLiquidityPairsArgs = {
  data: Array<StableLiquidityPairCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationCreateTokensArgs = {
  data: Array<TokenCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteContentArgs = {
  where: ContentWhereUniqueInput;
};


export type MutationDeleteContentBlockArgs = {
  where: ContentBlockWhereUniqueInput;
};


export type MutationDeleteContentBlocksArgs = {
  where: Array<ContentBlockWhereUniqueInput>;
};


export type MutationDeleteContentTypeArgs = {
  where: ContentTypeWhereUniqueInput;
};


export type MutationDeleteContentTypesArgs = {
  where: Array<ContentTypeWhereUniqueInput>;
};


export type MutationDeleteContentsArgs = {
  where: Array<ContentWhereUniqueInput>;
};


export type MutationDeleteDiscordBotArgs = {
  where: DiscordBotWhereUniqueInput;
};


export type MutationDeleteDiscordBotsArgs = {
  where: Array<DiscordBotWhereUniqueInput>;
};


export type MutationDeleteExchangeArgs = {
  where: ExchangeWhereUniqueInput;
};


export type MutationDeleteExchangesArgs = {
  where: Array<ExchangeWhereUniqueInput>;
};


export type MutationDeleteLiquidityPairArgs = {
  where: LiquidityPairWhereUniqueInput;
};


export type MutationDeleteLiquidityPairsArgs = {
  where: Array<LiquidityPairWhereUniqueInput>;
};


export type MutationDeleteMarketStatArgs = {
  where: MarketStatWhereUniqueInput;
};


export type MutationDeleteMarketStatsArgs = {
  where: Array<MarketStatWhereUniqueInput>;
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput;
};


export type MutationDeleteNetworksArgs = {
  where: Array<NetworkWhereUniqueInput>;
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeletePaymentsArgs = {
  where: Array<PaymentWhereUniqueInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectNotificationArgs = {
  where: ProjectNotificationWhereUniqueInput;
};


export type MutationDeleteProjectNotificationsArgs = {
  where: Array<ProjectNotificationWhereUniqueInput>;
};


export type MutationDeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationDeleteRoadmapArgs = {
  where: RoadmapWhereUniqueInput;
};


export type MutationDeleteRoadmapsArgs = {
  where: Array<RoadmapWhereUniqueInput>;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};


export type MutationDeleteStableLiquidityPairArgs = {
  where: StableLiquidityPairWhereUniqueInput;
};


export type MutationDeleteStableLiquidityPairsArgs = {
  where: Array<StableLiquidityPairWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationDeleteTokensArgs = {
  where: Array<TokenWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateContentArgs = {
  data: ContentUpdateInput;
  where: ContentWhereUniqueInput;
};


export type MutationUpdateContentBlockArgs = {
  data: ContentBlockUpdateInput;
  where: ContentBlockWhereUniqueInput;
};


export type MutationUpdateContentBlocksArgs = {
  data: Array<ContentBlockUpdateArgs>;
};


export type MutationUpdateContentTypeArgs = {
  data: ContentTypeUpdateInput;
  where: ContentTypeWhereUniqueInput;
};


export type MutationUpdateContentTypesArgs = {
  data: Array<ContentTypeUpdateArgs>;
};


export type MutationUpdateContentsArgs = {
  data: Array<ContentUpdateArgs>;
};


export type MutationUpdateDiscordBotArgs = {
  data: DiscordBotUpdateInput;
  where: DiscordBotWhereUniqueInput;
};


export type MutationUpdateDiscordBotsArgs = {
  data: Array<DiscordBotUpdateArgs>;
};


export type MutationUpdateExchangeArgs = {
  data: ExchangeUpdateInput;
  where: ExchangeWhereUniqueInput;
};


export type MutationUpdateExchangesArgs = {
  data: Array<ExchangeUpdateArgs>;
};


export type MutationUpdateLiquidityPairArgs = {
  data: LiquidityPairUpdateInput;
  where: LiquidityPairWhereUniqueInput;
};


export type MutationUpdateLiquidityPairsArgs = {
  data: Array<LiquidityPairUpdateArgs>;
};


export type MutationUpdateMarketStatArgs = {
  data: MarketStatUpdateInput;
  where: MarketStatWhereUniqueInput;
};


export type MutationUpdateMarketStatsArgs = {
  data: Array<MarketStatUpdateArgs>;
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpdateNetworksArgs = {
  data: Array<NetworkUpdateArgs>;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdatePaymentsArgs = {
  data: Array<PaymentUpdateArgs>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectNotificationArgs = {
  data: ProjectNotificationUpdateInput;
  where: ProjectNotificationWhereUniqueInput;
};


export type MutationUpdateProjectNotificationsArgs = {
  data: Array<ProjectNotificationUpdateArgs>;
};


export type MutationUpdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationUpdateRoadmapArgs = {
  data: RoadmapUpdateInput;
  where: RoadmapWhereUniqueInput;
};


export type MutationUpdateRoadmapsArgs = {
  data: Array<RoadmapUpdateArgs>;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};


export type MutationUpdateStableLiquidityPairArgs = {
  data: StableLiquidityPairUpdateInput;
  where: StableLiquidityPairWhereUniqueInput;
};


export type MutationUpdateStableLiquidityPairsArgs = {
  data: Array<StableLiquidityPairUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpdateTokensArgs = {
  data: Array<TokenUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Network = {
  __typename?: 'Network';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  logo?: Maybe<ImageFieldOutput>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NetworkCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type NetworkOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type NetworkRelateToOneForCreateInput = {
  connect?: InputMaybe<NetworkWhereUniqueInput>;
  create?: InputMaybe<NetworkCreateInput>;
};

export type NetworkRelateToOneForUpdateInput = {
  connect?: InputMaybe<NetworkWhereUniqueInput>;
  create?: InputMaybe<NetworkCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type NetworkUpdateArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};

export type NetworkUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type NetworkWhereInput = {
  AND?: InputMaybe<Array<NetworkWhereInput>>;
  NOT?: InputMaybe<Array<NetworkWhereInput>>;
  OR?: InputMaybe<Array<NetworkWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NetworkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']>;
  billedTo?: Maybe<User>;
  dateIssued?: Maybe<Scalars['DateTime']>;
  datePaid?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoiceUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentAddress?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['Float']>;
};

export type PaymentCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  billedTo?: InputMaybe<UserRelateToOneForCreateInput>;
  dateIssued?: InputMaybe<Scalars['DateTime']>;
  datePaid?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  invoiceUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paymentAddress?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['Float']>;
};

export type PaymentManyRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  dateIssued?: InputMaybe<OrderDirection>;
  datePaid?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  invoiceUrl?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  paymentAddress?: InputMaybe<OrderDirection>;
  paymentMethod?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
};

export type PaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
};

export type PaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
};

export type PaymentUpdateArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  billedTo?: InputMaybe<UserRelateToOneForUpdateInput>;
  dateIssued?: InputMaybe<Scalars['DateTime']>;
  datePaid?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  invoiceUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paymentAddress?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['Float']>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  billedTo?: InputMaybe<UserWhereInput>;
  dateIssued?: InputMaybe<DateTimeNullableFilter>;
  datePaid?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  invoiceUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  paymentAddress?: InputMaybe<StringFilter>;
  paymentMethod?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  quantity?: InputMaybe<FloatFilter>;
  status?: InputMaybe<StringNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
};

export type PaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Project = {
  __typename?: 'Project';
  ABI?: Maybe<Scalars['JSON']>;
  apy?: Maybe<Scalars['Float']>;
  burnAddress?: Maybe<Scalars['String']>;
  buyTax?: Maybe<Scalars['Float']>;
  contractAddress?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['JSON']>;
  dailyApy?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialized?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  isRebasing?: Maybe<Scalars['Boolean']>;
  launchBlock?: Maybe<Scalars['Int']>;
  launchDate?: Maybe<Scalars['DateTime']>;
  liquidityPair?: Maybe<Array<LiquidityPair>>;
  liquidityPairCount?: Maybe<Scalars['Int']>;
  logo?: Maybe<ImageFieldOutput>;
  medium?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  notifications?: Maybe<Array<ProjectNotification>>;
  notificationsCount?: Maybe<Scalars['Int']>;
  pairAddress?: Maybe<Scalars['String']>;
  rebasePeriod?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  sellTax?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  telegram?: Maybe<Scalars['String']>;
  trackFromBlock?: Maybe<Scalars['Int']>;
  trackHolders?: Maybe<Scalars['Boolean']>;
  trackHoldersFromTokenAmount?: Maybe<Scalars['Float']>;
  twitter?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
  whitepaper?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


export type ProjectLiquidityPairArgs = {
  orderBy?: Array<LiquidityPairOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LiquidityPairWhereInput;
};


export type ProjectLiquidityPairCountArgs = {
  where?: LiquidityPairWhereInput;
};


export type ProjectNotificationsArgs = {
  orderBy?: Array<ProjectNotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectNotificationWhereInput;
};


export type ProjectNotificationsCountArgs = {
  where?: ProjectNotificationWhereInput;
};


export type ProjectTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type ProjectTagsCountArgs = {
  where?: TagWhereInput;
};

export type ProjectCreateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  apy?: InputMaybe<Scalars['Float']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customData?: InputMaybe<Scalars['JSON']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isRebasing?: InputMaybe<Scalars['Boolean']>;
  launchBlock?: InputMaybe<Scalars['Int']>;
  launchDate?: InputMaybe<Scalars['DateTime']>;
  liquidityPair?: InputMaybe<LiquidityPairRelateToManyForCreateInput>;
  logo?: InputMaybe<ImageFieldInput>;
  medium?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  notifications?: InputMaybe<ProjectNotificationRelateToManyForCreateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  trackFromBlock?: InputMaybe<Scalars['Int']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProjectManyRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectNotification = {
  __typename?: 'ProjectNotification';
  content?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProjectNotificationCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ProjectNotificationManyRelationFilter = {
  every?: InputMaybe<ProjectNotificationWhereInput>;
  none?: InputMaybe<ProjectNotificationWhereInput>;
  some?: InputMaybe<ProjectNotificationWhereInput>;
};

export type ProjectNotificationOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ProjectNotificationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectNotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectNotificationCreateInput>>;
};

export type ProjectNotificationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectNotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectNotificationCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectNotificationWhereUniqueInput>>;
};

export type ProjectNotificationUpdateArgs = {
  data: ProjectNotificationUpdateInput;
  where: ProjectNotificationWhereUniqueInput;
};

export type ProjectNotificationUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ProjectNotificationWhereInput = {
  AND?: InputMaybe<Array<ProjectNotificationWhereInput>>;
  NOT?: InputMaybe<Array<ProjectNotificationWhereInput>>;
  OR?: InputMaybe<Array<ProjectNotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringNullableFilter>;
};

export type ProjectNotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProjectOrderByInput = {
  apy?: InputMaybe<OrderDirection>;
  burnAddress?: InputMaybe<OrderDirection>;
  buyTax?: InputMaybe<OrderDirection>;
  contractAddress?: InputMaybe<OrderDirection>;
  dailyApy?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  github?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  initialized?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  isRebasing?: InputMaybe<OrderDirection>;
  launchBlock?: InputMaybe<OrderDirection>;
  launchDate?: InputMaybe<OrderDirection>;
  medium?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  pairAddress?: InputMaybe<OrderDirection>;
  rebasePeriod?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  sellTax?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  trackFromBlock?: InputMaybe<OrderDirection>;
  trackHolders?: InputMaybe<OrderDirection>;
  trackHoldersFromTokenAmount?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  whitepaper?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type ProjectRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectRelateToOneForCreateInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  create?: InputMaybe<ProjectCreateInput>;
};

export type ProjectRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  create?: InputMaybe<ProjectCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectUpdateArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  apy?: InputMaybe<Scalars['Float']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customData?: InputMaybe<Scalars['JSON']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isRebasing?: InputMaybe<Scalars['Boolean']>;
  launchBlock?: InputMaybe<Scalars['Int']>;
  launchDate?: InputMaybe<Scalars['DateTime']>;
  liquidityPair?: InputMaybe<LiquidityPairRelateToManyForUpdateInput>;
  logo?: InputMaybe<ImageFieldInput>;
  medium?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  notifications?: InputMaybe<ProjectNotificationRelateToManyForUpdateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  trackFromBlock?: InputMaybe<Scalars['Int']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  apy?: InputMaybe<FloatNullableFilter>;
  burnAddress?: InputMaybe<StringFilter>;
  buyTax?: InputMaybe<FloatNullableFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  dailyApy?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  github?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  initialized?: InputMaybe<BooleanFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  isRebasing?: InputMaybe<BooleanFilter>;
  launchBlock?: InputMaybe<IntNullableFilter>;
  launchDate?: InputMaybe<DateTimeNullableFilter>;
  liquidityPair?: InputMaybe<LiquidityPairManyRelationFilter>;
  medium?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  notifications?: InputMaybe<ProjectNotificationManyRelationFilter>;
  pairAddress?: InputMaybe<StringFilter>;
  rebasePeriod?: InputMaybe<StringFilter>;
  reddit?: InputMaybe<StringFilter>;
  sellTax?: InputMaybe<FloatNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  telegram?: InputMaybe<StringFilter>;
  trackFromBlock?: InputMaybe<IntNullableFilter>;
  trackHolders?: InputMaybe<BooleanFilter>;
  trackHoldersFromTokenAmount?: InputMaybe<FloatNullableFilter>;
  twitter?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<StringFilter>;
  whitepaper?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  content?: Maybe<Content>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlocks?: Maybe<Array<ContentBlock>>;
  contentBlocksCount?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentType>;
  contentTypes?: Maybe<Array<ContentType>>;
  contentTypesCount?: Maybe<Scalars['Int']>;
  contents?: Maybe<Array<Content>>;
  contentsCount?: Maybe<Scalars['Int']>;
  discordBot?: Maybe<DiscordBot>;
  discordBots?: Maybe<Array<DiscordBot>>;
  discordBotsCount?: Maybe<Scalars['Int']>;
  exchange?: Maybe<Exchange>;
  exchanges?: Maybe<Array<Exchange>>;
  exchangesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  liquidityPair?: Maybe<LiquidityPair>;
  liquidityPairs?: Maybe<Array<LiquidityPair>>;
  liquidityPairsCount?: Maybe<Scalars['Int']>;
  marketStat?: Maybe<MarketStat>;
  marketStats?: Maybe<Array<MarketStat>>;
  marketStatsCount?: Maybe<Scalars['Int']>;
  network?: Maybe<Network>;
  networks?: Maybe<Array<Network>>;
  networksCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectNotification?: Maybe<ProjectNotification>;
  projectNotifications?: Maybe<Array<ProjectNotification>>;
  projectNotificationsCount?: Maybe<Scalars['Int']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  roadmap?: Maybe<Roadmap>;
  roadmaps?: Maybe<Array<Roadmap>>;
  roadmapsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  stableLiquidityPair?: Maybe<StableLiquidityPair>;
  stableLiquidityPairs?: Maybe<Array<StableLiquidityPair>>;
  stableLiquidityPairsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  token?: Maybe<Token>;
  tokens?: Maybe<Array<Token>>;
  tokensCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryContentArgs = {
  where: ContentWhereUniqueInput;
};


export type QueryContentBlockArgs = {
  where: ContentBlockWhereUniqueInput;
};


export type QueryContentBlocksArgs = {
  orderBy?: Array<ContentBlockOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContentBlockWhereInput;
};


export type QueryContentBlocksCountArgs = {
  where?: ContentBlockWhereInput;
};


export type QueryContentTypeArgs = {
  where: ContentTypeWhereUniqueInput;
};


export type QueryContentTypesArgs = {
  orderBy?: Array<ContentTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContentTypeWhereInput;
};


export type QueryContentTypesCountArgs = {
  where?: ContentTypeWhereInput;
};


export type QueryContentsArgs = {
  orderBy?: Array<ContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContentWhereInput;
};


export type QueryContentsCountArgs = {
  where?: ContentWhereInput;
};


export type QueryDiscordBotArgs = {
  where: DiscordBotWhereUniqueInput;
};


export type QueryDiscordBotsArgs = {
  orderBy?: Array<DiscordBotOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordBotWhereInput;
};


export type QueryDiscordBotsCountArgs = {
  where?: DiscordBotWhereInput;
};


export type QueryExchangeArgs = {
  where: ExchangeWhereUniqueInput;
};


export type QueryExchangesArgs = {
  orderBy?: Array<ExchangeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ExchangeWhereInput;
};


export type QueryExchangesCountArgs = {
  where?: ExchangeWhereInput;
};


export type QueryLiquidityPairArgs = {
  where: LiquidityPairWhereUniqueInput;
};


export type QueryLiquidityPairsArgs = {
  orderBy?: Array<LiquidityPairOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LiquidityPairWhereInput;
};


export type QueryLiquidityPairsCountArgs = {
  where?: LiquidityPairWhereInput;
};


export type QueryMarketStatArgs = {
  where: MarketStatWhereUniqueInput;
};


export type QueryMarketStatsArgs = {
  orderBy?: Array<MarketStatOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MarketStatWhereInput;
};


export type QueryMarketStatsCountArgs = {
  where?: MarketStatWhereInput;
};


export type QueryNetworkArgs = {
  where: NetworkWhereUniqueInput;
};


export type QueryNetworksArgs = {
  orderBy?: Array<NetworkOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NetworkWhereInput;
};


export type QueryNetworksCountArgs = {
  where?: NetworkWhereInput;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type QueryPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectNotificationArgs = {
  where: ProjectNotificationWhereUniqueInput;
};


export type QueryProjectNotificationsArgs = {
  orderBy?: Array<ProjectNotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectNotificationWhereInput;
};


export type QueryProjectNotificationsCountArgs = {
  where?: ProjectNotificationWhereInput;
};


export type QueryProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryRoadmapArgs = {
  where: RoadmapWhereUniqueInput;
};


export type QueryRoadmapsArgs = {
  orderBy?: Array<RoadmapOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoadmapWhereInput;
};


export type QueryRoadmapsCountArgs = {
  where?: RoadmapWhereInput;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryRolesArgs = {
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoleWhereInput;
};


export type QueryRolesCountArgs = {
  where?: RoleWhereInput;
};


export type QueryStableLiquidityPairArgs = {
  where: StableLiquidityPairWhereUniqueInput;
};


export type QueryStableLiquidityPairsArgs = {
  orderBy?: Array<StableLiquidityPairOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StableLiquidityPairWhereInput;
};


export type QueryStableLiquidityPairsCountArgs = {
  where?: StableLiquidityPairWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QueryTokensArgs = {
  orderBy?: Array<TokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TokenWhereInput;
};


export type QueryTokensCountArgs = {
  where?: TokenWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Roadmap = {
  __typename?: 'Roadmap';
  content?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  estimated?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFinished?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type RoadmapCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  estimated?: InputMaybe<Scalars['String']>;
  isFinished?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RoadmapOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  estimated?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isFinished?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type RoadmapUpdateArgs = {
  data: RoadmapUpdateInput;
  where: RoadmapWhereUniqueInput;
};

export type RoadmapUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  estimated?: InputMaybe<Scalars['String']>;
  isFinished?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RoadmapWhereInput = {
  AND?: InputMaybe<Array<RoadmapWhereInput>>;
  NOT?: InputMaybe<Array<RoadmapWhereInput>>;
  OR?: InputMaybe<Array<RoadmapWhereInput>>;
  content?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  estimated?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isFinished?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
};

export type RoadmapWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Role = {
  __typename?: 'Role';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEditor?: Maybe<Scalars['Boolean']>;
  isModerator?: Maybe<Scalars['Boolean']>;
  isProjectOwner?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type RoleUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type RoleUsersCountArgs = {
  where?: UserWhereInput;
};

export type RoleCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isEditor?: InputMaybe<Scalars['Boolean']>;
  isModerator?: InputMaybe<Scalars['Boolean']>;
  isProjectOwner?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type RoleManyRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  isEditor?: InputMaybe<OrderDirection>;
  isModerator?: InputMaybe<OrderDirection>;
  isProjectOwner?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
};

export type RoleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
};

export type RoleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleUpdateArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isEditor?: InputMaybe<Scalars['Boolean']>;
  isModerator?: InputMaybe<Scalars['Boolean']>;
  isProjectOwner?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isEditor?: InputMaybe<BooleanFilter>;
  isModerator?: InputMaybe<BooleanFilter>;
  isProjectOwner?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserManyRelationFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StableLiquidityPair = {
  __typename?: 'StableLiquidityPair';
  address?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  pairToken?: Maybe<Array<Token>>;
  pairTokenCount?: Maybe<Scalars['Int']>;
};


export type StableLiquidityPairPairTokenArgs = {
  orderBy?: Array<TokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TokenWhereInput;
};


export type StableLiquidityPairPairTokenCountArgs = {
  where?: TokenWhereInput;
};

export type StableLiquidityPairCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  pairToken?: InputMaybe<TokenRelateToManyForCreateInput>;
};

export type StableLiquidityPairOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type StableLiquidityPairRelateToOneForCreateInput = {
  connect?: InputMaybe<StableLiquidityPairWhereUniqueInput>;
  create?: InputMaybe<StableLiquidityPairCreateInput>;
};

export type StableLiquidityPairRelateToOneForUpdateInput = {
  connect?: InputMaybe<StableLiquidityPairWhereUniqueInput>;
  create?: InputMaybe<StableLiquidityPairCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type StableLiquidityPairUpdateArgs = {
  data: StableLiquidityPairUpdateInput;
  where: StableLiquidityPairWhereUniqueInput;
};

export type StableLiquidityPairUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  pairToken?: InputMaybe<TokenRelateToManyForUpdateInput>;
};

export type StableLiquidityPairWhereInput = {
  AND?: InputMaybe<Array<StableLiquidityPairWhereInput>>;
  NOT?: InputMaybe<Array<StableLiquidityPairWhereInput>>;
  OR?: InputMaybe<Array<StableLiquidityPairWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  pairToken?: InputMaybe<TokenManyRelationFilter>;
};

export type StableLiquidityPairWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
};


export type TagProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type TagProjectsCountArgs = {
  where?: ProjectWhereInput;
};

export type TagCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Token = {
  __typename?: 'Token';
  ABI?: Maybe<Scalars['JSON']>;
  address?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
};

export type TokenCreateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
};

export type TokenManyRelationFilter = {
  every?: InputMaybe<TokenWhereInput>;
  none?: InputMaybe<TokenWhereInput>;
  some?: InputMaybe<TokenWhereInput>;
};

export type TokenOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TokenRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  create?: InputMaybe<Array<TokenCreateInput>>;
};

export type TokenRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  create?: InputMaybe<Array<TokenCreateInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
};

export type TokenUpdateArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpdateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  dateCreated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerificationExpiresIn?: Maybe<Scalars['DateTime']>;
  emailVerificationString?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isNotChargeable?: Maybe<Scalars['Boolean']>;
  isSubscribedToEmail?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  referralCode?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  subscribedTill?: Maybe<Scalars['DateTime']>;
};


export type UserPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type UserPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type UserProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type UserProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type UserRolesArgs = {
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoleWhereInput;
};


export type UserRolesCountArgs = {
  where?: RoleWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationExpiresIn?: InputMaybe<Scalars['DateTime']>;
  emailVerificationString?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<PaymentRelateToManyForCreateInput>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForCreateInput>;
  subscribedTill?: InputMaybe<Scalars['DateTime']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  dateCreated?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailVerificationExpiresIn?: InputMaybe<OrderDirection>;
  emailVerificationString?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  isNotChargeable?: InputMaybe<OrderDirection>;
  isSubscribedToEmail?: InputMaybe<OrderDirection>;
  isVerified?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  referralCode?: InputMaybe<OrderDirection>;
  referrer?: InputMaybe<OrderDirection>;
  subscribedTill?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationExpiresIn?: InputMaybe<Scalars['DateTime']>;
  emailVerificationString?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<PaymentRelateToManyForUpdateInput>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForUpdateInput>;
  subscribedTill?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  dateCreated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerificationExpiresIn?: InputMaybe<DateTimeNullableFilter>;
  emailVerificationString?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isNotChargeable?: InputMaybe<BooleanFilter>;
  isSubscribedToEmail?: InputMaybe<BooleanFilter>;
  isVerified?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  payments?: InputMaybe<PaymentManyRelationFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  referralCode?: InputMaybe<StringFilter>;
  referrer?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleManyRelationFilter>;
  subscribedTill?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};
