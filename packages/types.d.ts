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
  CalendarDay: any;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Audit = {
  __typename?: 'Audit';
  auditor?: Maybe<Auditor>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  url?: Maybe<Scalars['String']>;
};

export type AuditCreateInput = {
  auditor?: InputMaybe<AuditorRelateToOneForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type AuditManyRelationFilter = {
  every?: InputMaybe<AuditWhereInput>;
  none?: InputMaybe<AuditWhereInput>;
  some?: InputMaybe<AuditWhereInput>;
};

export type AuditOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type AuditRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AuditWhereUniqueInput>>;
  create?: InputMaybe<Array<AuditCreateInput>>;
};

export type AuditRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AuditWhereUniqueInput>>;
  create?: InputMaybe<Array<AuditCreateInput>>;
  disconnect?: InputMaybe<Array<AuditWhereUniqueInput>>;
  set?: InputMaybe<Array<AuditWhereUniqueInput>>;
};

export type AuditUpdateArgs = {
  data: AuditUpdateInput;
  where: AuditWhereUniqueInput;
};

export type AuditUpdateInput = {
  auditor?: InputMaybe<AuditorRelateToOneForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type AuditWhereInput = {
  AND?: InputMaybe<Array<AuditWhereInput>>;
  NOT?: InputMaybe<Array<AuditWhereInput>>;
  OR?: InputMaybe<Array<AuditWhereInput>>;
  auditor?: InputMaybe<AuditorWhereInput>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  url?: InputMaybe<StringFilter>;
};

export type AuditWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Auditor = {
  __typename?: 'Auditor';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  isListed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceFrom?: Maybe<Scalars['Float']>;
  priceTo?: Maybe<Scalars['Float']>;
  reddit?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type AuditorCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type AuditorOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type AuditorRelateToOneForCreateInput = {
  connect?: InputMaybe<AuditorWhereUniqueInput>;
  create?: InputMaybe<AuditorCreateInput>;
};

export type AuditorRelateToOneForUpdateInput = {
  connect?: InputMaybe<AuditorWhereUniqueInput>;
  create?: InputMaybe<AuditorCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AuditorUpdateArgs = {
  data: AuditorUpdateInput;
  where: AuditorWhereUniqueInput;
};

export type AuditorUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type AuditorWhereInput = {
  AND?: InputMaybe<Array<AuditorWhereInput>>;
  NOT?: InputMaybe<Array<AuditorWhereInput>>;
  OR?: InputMaybe<Array<AuditorWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  priceFrom?: InputMaybe<FloatNullableFilter>;
  priceTo?: InputMaybe<FloatNullableFilter>;
  reddit?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  telegram?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  website?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type AuditorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticatedItem = User;

export type Block = {
  __typename?: 'Block';
  dateAdded?: Maybe<Scalars['DateTime']>;
  firstBlock?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  lastBlock?: Maybe<Scalars['Int']>;
  previousBlock?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlockCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  firstBlock?: InputMaybe<Scalars['Int']>;
  lastBlock?: InputMaybe<Scalars['Int']>;
  previousBlock?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlockOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  firstBlock?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastBlock?: InputMaybe<OrderDirection>;
  previousBlock?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BlockUpdateArgs = {
  data: BlockUpdateInput;
  where: BlockWhereUniqueInput;
};

export type BlockUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  firstBlock?: InputMaybe<Scalars['Int']>;
  lastBlock?: InputMaybe<Scalars['Int']>;
  previousBlock?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlockWhereInput = {
  AND?: InputMaybe<Array<BlockWhereInput>>;
  NOT?: InputMaybe<Array<BlockWhereInput>>;
  OR?: InputMaybe<Array<BlockWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  firstBlock?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  lastBlock?: InputMaybe<IntNullableFilter>;
  previousBlock?: InputMaybe<IntNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type BlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CalendarDayNullableFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']>;
  gt?: InputMaybe<Scalars['CalendarDay']>;
  gte?: InputMaybe<Scalars['CalendarDay']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']>>;
  lt?: InputMaybe<Scalars['CalendarDay']>;
  lte?: InputMaybe<Scalars['CalendarDay']>;
  not?: InputMaybe<CalendarDayNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']>>;
};

export type Cart = {
  __typename?: 'Cart';
  cartItem?: Maybe<Array<CartItem>>;
  cartItemCount?: Maybe<Scalars['Int']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type CartCartItemArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CartItemWhereInput;
};


export type CartCartItemCountArgs = {
  where?: CartItemWhereInput;
};

export type CartCreateInput = {
  cartItem?: InputMaybe<CartItemRelateToManyForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cart?: Maybe<Cart>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartItemCreateInput = {
  cart?: InputMaybe<CartRelateToOneForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CartItemManyRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  cart?: InputMaybe<CartRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  cart?: InputMaybe<CartWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CartOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CartRelateToOneForCreateInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  create?: InputMaybe<CartCreateInput>;
};

export type CartRelateToOneForUpdateInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  create?: InputMaybe<CartCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CartUpdateArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};

export type CartUpdateInput = {
  cartItem?: InputMaybe<CartItemRelateToManyForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  cartItem?: InputMaybe<CartItemManyRelationFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  typeName?: Maybe<Scalars['String']>;
};

export type ContentTypeCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  typeName?: InputMaybe<Scalars['String']>;
};

export type ContentTypeOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  typeName?: InputMaybe<OrderDirection>;
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
  typeName?: InputMaybe<Scalars['String']>;
};

export type ContentTypeWhereInput = {
  AND?: InputMaybe<Array<ContentTypeWhereInput>>;
  NOT?: InputMaybe<Array<ContentTypeWhereInput>>;
  OR?: InputMaybe<Array<ContentTypeWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  typeName?: InputMaybe<StringFilter>;
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

export type Creator = {
  __typename?: 'Creator';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  isListed?: Maybe<Scalars['Boolean']>;
  marketingCampaigns?: Maybe<Array<MarketingCampaign>>;
  marketingCampaignsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  priceFrom?: Maybe<Scalars['Float']>;
  priceTo?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Array<CreatorRating>>;
  ratingsCount?: Maybe<Scalars['Int']>;
  reddit?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<CreatorReview>>;
  reviewsCount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


export type CreatorMarketingCampaignsArgs = {
  orderBy?: Array<MarketingCampaignOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MarketingCampaignWhereInput;
};


export type CreatorMarketingCampaignsCountArgs = {
  where?: MarketingCampaignWhereInput;
};


export type CreatorRatingsArgs = {
  orderBy?: Array<CreatorRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CreatorRatingWhereInput;
};


export type CreatorRatingsCountArgs = {
  where?: CreatorRatingWhereInput;
};


export type CreatorReviewsArgs = {
  orderBy?: Array<CreatorReviewOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CreatorReviewWhereInput;
};


export type CreatorReviewsCountArgs = {
  where?: CreatorReviewWhereInput;
};

export type CreatorCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  ratings?: InputMaybe<CreatorRatingRelateToManyForCreateInput>;
  reddit?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<CreatorReviewRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type CreatorOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nickname?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type CreatorRating = {
  __typename?: 'CreatorRating';
  creator?: Maybe<Creator>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type CreatorRatingCreateInput = {
  creator?: InputMaybe<CreatorRelateToOneForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CreatorRatingManyRelationFilter = {
  every?: InputMaybe<CreatorRatingWhereInput>;
  none?: InputMaybe<CreatorRatingWhereInput>;
  some?: InputMaybe<CreatorRatingWhereInput>;
};

export type CreatorRatingOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  rating?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CreatorRatingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CreatorRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<CreatorRatingCreateInput>>;
};

export type CreatorRatingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CreatorRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<CreatorRatingCreateInput>>;
  disconnect?: InputMaybe<Array<CreatorRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<CreatorRatingWhereUniqueInput>>;
};

export type CreatorRatingUpdateArgs = {
  data: CreatorRatingUpdateInput;
  where: CreatorRatingWhereUniqueInput;
};

export type CreatorRatingUpdateInput = {
  creator?: InputMaybe<CreatorRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CreatorRatingWhereInput = {
  AND?: InputMaybe<Array<CreatorRatingWhereInput>>;
  NOT?: InputMaybe<Array<CreatorRatingWhereInput>>;
  OR?: InputMaybe<Array<CreatorRatingWhereInput>>;
  creator?: InputMaybe<CreatorWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  rating?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CreatorRatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreatorRelateToOneForCreateInput = {
  connect?: InputMaybe<CreatorWhereUniqueInput>;
  create?: InputMaybe<CreatorCreateInput>;
};

export type CreatorRelateToOneForUpdateInput = {
  connect?: InputMaybe<CreatorWhereUniqueInput>;
  create?: InputMaybe<CreatorCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CreatorReview = {
  __typename?: 'CreatorReview';
  creator?: Maybe<Creator>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  review?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type CreatorReviewCreateInput = {
  creator?: InputMaybe<CreatorRelateToOneForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  review?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CreatorReviewManyRelationFilter = {
  every?: InputMaybe<CreatorReviewWhereInput>;
  none?: InputMaybe<CreatorReviewWhereInput>;
  some?: InputMaybe<CreatorReviewWhereInput>;
};

export type CreatorReviewOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  review?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CreatorReviewRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CreatorReviewWhereUniqueInput>>;
  create?: InputMaybe<Array<CreatorReviewCreateInput>>;
};

export type CreatorReviewRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CreatorReviewWhereUniqueInput>>;
  create?: InputMaybe<Array<CreatorReviewCreateInput>>;
  disconnect?: InputMaybe<Array<CreatorReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<CreatorReviewWhereUniqueInput>>;
};

export type CreatorReviewUpdateArgs = {
  data: CreatorReviewUpdateInput;
  where: CreatorReviewWhereUniqueInput;
};

export type CreatorReviewUpdateInput = {
  creator?: InputMaybe<CreatorRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  review?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CreatorReviewWhereInput = {
  AND?: InputMaybe<Array<CreatorReviewWhereInput>>;
  NOT?: InputMaybe<Array<CreatorReviewWhereInput>>;
  OR?: InputMaybe<Array<CreatorReviewWhereInput>>;
  creator?: InputMaybe<CreatorWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  review?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CreatorReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreatorUpdateArgs = {
  data: CreatorUpdateInput;
  where: CreatorWhereUniqueInput;
};

export type CreatorUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  ratings?: InputMaybe<CreatorRatingRelateToManyForUpdateInput>;
  reddit?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<CreatorReviewRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type CreatorWhereInput = {
  AND?: InputMaybe<Array<CreatorWhereInput>>;
  NOT?: InputMaybe<Array<CreatorWhereInput>>;
  OR?: InputMaybe<Array<CreatorWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  marketingCampaigns?: InputMaybe<MarketingCampaignManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  priceFrom?: InputMaybe<FloatNullableFilter>;
  priceTo?: InputMaybe<FloatNullableFilter>;
  ratings?: InputMaybe<CreatorRatingManyRelationFilter>;
  reddit?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<CreatorReviewManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  telegram?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  website?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type CreatorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CustomTracker = {
  __typename?: 'CustomTracker';
  address?: Maybe<Scalars['String']>;
  applyProjectNativeTokenPrice?: Maybe<Scalars['Boolean']>;
  applyProjectTokenPrice?: Maybe<Scalars['Boolean']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  decimals?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  getBalanceOf?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCurrency?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  pairAddress?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Project>>;
  projectCount?: Maybe<Scalars['Int']>;
  useDexScreener?: Maybe<Scalars['Boolean']>;
};


export type CustomTrackerProjectArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type CustomTrackerProjectCountArgs = {
  where?: ProjectWhereInput;
};

export type CustomTrackerCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  applyProjectNativeTokenPrice?: InputMaybe<Scalars['Boolean']>;
  applyProjectTokenPrice?: InputMaybe<Scalars['Boolean']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  decimals?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  getBalanceOf?: InputMaybe<Scalars['String']>;
  isCurrency?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToManyForCreateInput>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
};

export type CustomTrackerManyRelationFilter = {
  every?: InputMaybe<CustomTrackerWhereInput>;
  none?: InputMaybe<CustomTrackerWhereInput>;
  some?: InputMaybe<CustomTrackerWhereInput>;
};

export type CustomTrackerOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  applyProjectNativeTokenPrice?: InputMaybe<OrderDirection>;
  applyProjectTokenPrice?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  decimals?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  getBalanceOf?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isCurrency?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  pairAddress?: InputMaybe<OrderDirection>;
  useDexScreener?: InputMaybe<OrderDirection>;
};

export type CustomTrackerRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CustomTrackerWhereUniqueInput>>;
  create?: InputMaybe<Array<CustomTrackerCreateInput>>;
};

export type CustomTrackerRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CustomTrackerWhereUniqueInput>>;
  create?: InputMaybe<Array<CustomTrackerCreateInput>>;
  disconnect?: InputMaybe<Array<CustomTrackerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomTrackerWhereUniqueInput>>;
};

export type CustomTrackerUpdateArgs = {
  data: CustomTrackerUpdateInput;
  where: CustomTrackerWhereUniqueInput;
};

export type CustomTrackerUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  applyProjectNativeTokenPrice?: InputMaybe<Scalars['Boolean']>;
  applyProjectTokenPrice?: InputMaybe<Scalars['Boolean']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  decimals?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  getBalanceOf?: InputMaybe<Scalars['String']>;
  isCurrency?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
};

export type CustomTrackerWhereInput = {
  AND?: InputMaybe<Array<CustomTrackerWhereInput>>;
  NOT?: InputMaybe<Array<CustomTrackerWhereInput>>;
  OR?: InputMaybe<Array<CustomTrackerWhereInput>>;
  address?: InputMaybe<StringFilter>;
  applyProjectNativeTokenPrice?: InputMaybe<BooleanFilter>;
  applyProjectTokenPrice?: InputMaybe<BooleanFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  decimals?: InputMaybe<FloatNullableFilter>;
  description?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  getBalanceOf?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isCurrency?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  method?: InputMaybe<StringNullableFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  pairAddress?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectManyRelationFilter>;
  useDexScreener?: InputMaybe<BooleanFilter>;
};

export type CustomTrackerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type Holder = {
  __typename?: 'Holder';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isContract?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  projects?: Maybe<Project>;
  transfers?: Maybe<Array<Transfer>>;
  transfersCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HolderTransfersArgs = {
  orderBy?: Array<TransferOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TransferWhereInput;
};


export type HolderTransfersCountArgs = {
  where?: TransferWhereInput;
};

export type HolderCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isContract?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToOneForCreateInput>;
  transfers?: InputMaybe<TransferRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HolderOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  balance?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isContract?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type HolderUpdateArgs = {
  data: HolderUpdateInput;
  where: HolderWhereUniqueInput;
};

export type HolderUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isContract?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  transfers?: InputMaybe<TransferRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HolderWhereInput = {
  AND?: InputMaybe<Array<HolderWhereInput>>;
  NOT?: InputMaybe<Array<HolderWhereInput>>;
  OR?: InputMaybe<Array<HolderWhereInput>>;
  address?: InputMaybe<StringFilter>;
  balance?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isContract?: InputMaybe<BooleanFilter>;
  note?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectWhereInput>;
  transfers?: InputMaybe<TransferManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type HolderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type Image = {
  __typename?: 'Image';
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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

export type ImageOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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

export type Kyc = {
  __typename?: 'Kyc';
  id: Scalars['ID'];
  kycGroup?: Maybe<KycGroup>;
  project?: Maybe<Project>;
  url?: Maybe<Scalars['String']>;
};

export type KycCreateInput = {
  kycGroup?: InputMaybe<KycGroupRelateToOneForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type KycGroup = {
  __typename?: 'KycGroup';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  isListed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceFrom?: Maybe<Scalars['Float']>;
  priceTo?: Maybe<Scalars['Float']>;
  reddit?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type KycGroupCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type KycGroupOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type KycGroupRelateToOneForCreateInput = {
  connect?: InputMaybe<KycGroupWhereUniqueInput>;
  create?: InputMaybe<KycGroupCreateInput>;
};

export type KycGroupRelateToOneForUpdateInput = {
  connect?: InputMaybe<KycGroupWhereUniqueInput>;
  create?: InputMaybe<KycGroupCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type KycGroupUpdateArgs = {
  data: KycGroupUpdateInput;
  where: KycGroupWhereUniqueInput;
};

export type KycGroupUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type KycGroupWhereInput = {
  AND?: InputMaybe<Array<KycGroupWhereInput>>;
  NOT?: InputMaybe<Array<KycGroupWhereInput>>;
  OR?: InputMaybe<Array<KycGroupWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  priceFrom?: InputMaybe<FloatNullableFilter>;
  priceTo?: InputMaybe<FloatNullableFilter>;
  reddit?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  telegram?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  website?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type KycGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KycManyRelationFilter = {
  every?: InputMaybe<KycWhereInput>;
  none?: InputMaybe<KycWhereInput>;
  some?: InputMaybe<KycWhereInput>;
};

export type KycOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type KycRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<KycWhereUniqueInput>>;
  create?: InputMaybe<Array<KycCreateInput>>;
};

export type KycRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<KycWhereUniqueInput>>;
  create?: InputMaybe<Array<KycCreateInput>>;
  disconnect?: InputMaybe<Array<KycWhereUniqueInput>>;
  set?: InputMaybe<Array<KycWhereUniqueInput>>;
};

export type KycUpdateArgs = {
  data: KycUpdateInput;
  where: KycWhereUniqueInput;
};

export type KycUpdateInput = {
  kycGroup?: InputMaybe<KycGroupRelateToOneForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type KycWhereInput = {
  AND?: InputMaybe<Array<KycWhereInput>>;
  NOT?: InputMaybe<Array<KycWhereInput>>;
  OR?: InputMaybe<Array<KycWhereInput>>;
  id?: InputMaybe<IdFilter>;
  kycGroup?: InputMaybe<KycGroupWhereInput>;
  project?: InputMaybe<ProjectWhereInput>;
  url?: InputMaybe<StringFilter>;
};

export type KycWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type LiquidityPair = {
  __typename?: 'LiquidityPair';
  address?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  exchange?: Maybe<Exchange>;
  id: Scalars['ID'];
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  order?: Maybe<Scalars['Int']>;
  project?: Maybe<Array<Project>>;
  projectCount?: Maybe<Scalars['Int']>;
  stablePair?: Maybe<StableLiquidityPair>;
  tokenAddress?: Maybe<Scalars['String']>;
  useDexScreener?: Maybe<Scalars['Boolean']>;
};


export type LiquidityPairProjectArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type LiquidityPairProjectCountArgs = {
  where?: ProjectWhereInput;
};

export type LiquidityPairCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  exchange?: InputMaybe<ExchangeRelateToOneForCreateInput>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  order?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<ProjectRelateToManyForCreateInput>;
  stablePair?: InputMaybe<StableLiquidityPairRelateToOneForCreateInput>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
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
  isPrimary?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  tokenAddress?: InputMaybe<OrderDirection>;
  useDexScreener?: InputMaybe<OrderDirection>;
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
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  order?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  stablePair?: InputMaybe<StableLiquidityPairRelateToOneForUpdateInput>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
};

export type LiquidityPairWhereInput = {
  AND?: InputMaybe<Array<LiquidityPairWhereInput>>;
  NOT?: InputMaybe<Array<LiquidityPairWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPairWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  exchange?: InputMaybe<ExchangeWhereInput>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  order?: InputMaybe<IntNullableFilter>;
  project?: InputMaybe<ProjectManyRelationFilter>;
  stablePair?: InputMaybe<StableLiquidityPairWhereInput>;
  tokenAddress?: InputMaybe<StringFilter>;
  useDexScreener?: InputMaybe<BooleanFilter>;
};

export type LiquidityPairWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type MarketStat = {
  __typename?: 'MarketStat';
  annotation?: Maybe<Scalars['String']>;
  avgHoldings?: Maybe<Scalars['Float']>;
  burnedTokens?: Maybe<Scalars['Float']>;
  customTrackers?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  fdv?: Maybe<Scalars['Float']>;
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
  txns?: Maybe<Scalars['JSON']>;
  volume?: Maybe<Scalars['JSON']>;
};

export type MarketStatCreateInput = {
  annotation?: InputMaybe<Scalars['String']>;
  avgHoldings?: InputMaybe<Scalars['Float']>;
  burnedTokens?: InputMaybe<Scalars['Float']>;
  customTrackers?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  fdv?: InputMaybe<Scalars['Float']>;
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
  txns?: InputMaybe<Scalars['JSON']>;
  volume?: InputMaybe<Scalars['JSON']>;
};

export type MarketStatOrderByInput = {
  annotation?: InputMaybe<OrderDirection>;
  avgHoldings?: InputMaybe<OrderDirection>;
  burnedTokens?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  fdv?: InputMaybe<OrderDirection>;
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
  annotation?: InputMaybe<Scalars['String']>;
  avgHoldings?: InputMaybe<Scalars['Float']>;
  burnedTokens?: InputMaybe<Scalars['Float']>;
  customTrackers?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  fdv?: InputMaybe<Scalars['Float']>;
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
  txns?: InputMaybe<Scalars['JSON']>;
  volume?: InputMaybe<Scalars['JSON']>;
};

export type MarketStatWhereInput = {
  AND?: InputMaybe<Array<MarketStatWhereInput>>;
  NOT?: InputMaybe<Array<MarketStatWhereInput>>;
  OR?: InputMaybe<Array<MarketStatWhereInput>>;
  annotation?: InputMaybe<StringFilter>;
  avgHoldings?: InputMaybe<FloatNullableFilter>;
  burnedTokens?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  fdv?: InputMaybe<FloatNullableFilter>;
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

export type MarketingCampaign = {
  __typename?: 'MarketingCampaign';
  agency?: Maybe<Scalars['String']>;
  agencyUrl?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Float']>;
  campaignId?: Maybe<Scalars['String']>;
  creator?: Maybe<Creator>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discordGoal?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['CalendarDay']>;
  finalSnapshot?: Maybe<Scalars['JSON']>;
  holdersGoal?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  isInternal?: Maybe<Scalars['Boolean']>;
  marketBudget?: Maybe<Scalars['Float']>;
  marketCapGoal?: Maybe<Scalars['Float']>;
  marketStatSnapshot?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  priceGoal?: Maybe<Scalars['Float']>;
  project?: Maybe<Project>;
  socialBudget?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['CalendarDay']>;
  status?: Maybe<Scalars['String']>;
  telegramGoal?: Maybe<Scalars['Float']>;
  trackMarket?: Maybe<Scalars['Boolean']>;
  trackSocial?: Maybe<Scalars['Boolean']>;
  twitterGoal?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  volumeGoal?: Maybe<Scalars['Float']>;
};


export type MarketingCampaignUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type MarketingCampaignUsersCountArgs = {
  where?: UserWhereInput;
};

export type MarketingCampaignCreateInput = {
  agency?: InputMaybe<Scalars['String']>;
  agencyUrl?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['Float']>;
  campaignId?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<CreatorRelateToOneForCreateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discordGoal?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['CalendarDay']>;
  finalSnapshot?: InputMaybe<Scalars['JSON']>;
  holdersGoal?: InputMaybe<Scalars['Float']>;
  isInternal?: InputMaybe<Scalars['Boolean']>;
  marketBudget?: InputMaybe<Scalars['Float']>;
  marketCapGoal?: InputMaybe<Scalars['Float']>;
  marketStatSnapshot?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  priceGoal?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  socialBudget?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['CalendarDay']>;
  status?: InputMaybe<Scalars['String']>;
  telegramGoal?: InputMaybe<Scalars['Float']>;
  trackMarket?: InputMaybe<Scalars['Boolean']>;
  trackSocial?: InputMaybe<Scalars['Boolean']>;
  twitterGoal?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
  volumeGoal?: InputMaybe<Scalars['Float']>;
};

export type MarketingCampaignManyRelationFilter = {
  every?: InputMaybe<MarketingCampaignWhereInput>;
  none?: InputMaybe<MarketingCampaignWhereInput>;
  some?: InputMaybe<MarketingCampaignWhereInput>;
};

export type MarketingCampaignOrderByInput = {
  agency?: InputMaybe<OrderDirection>;
  agencyUrl?: InputMaybe<OrderDirection>;
  budget?: InputMaybe<OrderDirection>;
  campaignId?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discordGoal?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  holdersGoal?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isInternal?: InputMaybe<OrderDirection>;
  marketBudget?: InputMaybe<OrderDirection>;
  marketCapGoal?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  notes?: InputMaybe<OrderDirection>;
  priceGoal?: InputMaybe<OrderDirection>;
  socialBudget?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  telegramGoal?: InputMaybe<OrderDirection>;
  trackMarket?: InputMaybe<OrderDirection>;
  trackSocial?: InputMaybe<OrderDirection>;
  twitterGoal?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  volumeGoal?: InputMaybe<OrderDirection>;
};

export type MarketingCampaignRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MarketingCampaignWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketingCampaignCreateInput>>;
};

export type MarketingCampaignRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MarketingCampaignWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketingCampaignCreateInput>>;
  disconnect?: InputMaybe<Array<MarketingCampaignWhereUniqueInput>>;
  set?: InputMaybe<Array<MarketingCampaignWhereUniqueInput>>;
};

export type MarketingCampaignRelateToOneForCreateInput = {
  connect?: InputMaybe<MarketingCampaignWhereUniqueInput>;
  create?: InputMaybe<MarketingCampaignCreateInput>;
};

export type MarketingCampaignRelateToOneForUpdateInput = {
  connect?: InputMaybe<MarketingCampaignWhereUniqueInput>;
  create?: InputMaybe<MarketingCampaignCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type MarketingCampaignUpdateArgs = {
  data: MarketingCampaignUpdateInput;
  where: MarketingCampaignWhereUniqueInput;
};

export type MarketingCampaignUpdateInput = {
  agency?: InputMaybe<Scalars['String']>;
  agencyUrl?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['Float']>;
  campaignId?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<CreatorRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discordGoal?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['CalendarDay']>;
  finalSnapshot?: InputMaybe<Scalars['JSON']>;
  holdersGoal?: InputMaybe<Scalars['Float']>;
  isInternal?: InputMaybe<Scalars['Boolean']>;
  marketBudget?: InputMaybe<Scalars['Float']>;
  marketCapGoal?: InputMaybe<Scalars['Float']>;
  marketStatSnapshot?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  priceGoal?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  socialBudget?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['CalendarDay']>;
  status?: InputMaybe<Scalars['String']>;
  telegramGoal?: InputMaybe<Scalars['Float']>;
  trackMarket?: InputMaybe<Scalars['Boolean']>;
  trackSocial?: InputMaybe<Scalars['Boolean']>;
  twitterGoal?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
  volumeGoal?: InputMaybe<Scalars['Float']>;
};

export type MarketingCampaignWhereInput = {
  AND?: InputMaybe<Array<MarketingCampaignWhereInput>>;
  NOT?: InputMaybe<Array<MarketingCampaignWhereInput>>;
  OR?: InputMaybe<Array<MarketingCampaignWhereInput>>;
  agency?: InputMaybe<StringFilter>;
  agencyUrl?: InputMaybe<StringFilter>;
  budget?: InputMaybe<FloatNullableFilter>;
  campaignId?: InputMaybe<StringFilter>;
  creator?: InputMaybe<CreatorWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discordGoal?: InputMaybe<FloatNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  endDate?: InputMaybe<CalendarDayNullableFilter>;
  holdersGoal?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isInternal?: InputMaybe<BooleanFilter>;
  marketBudget?: InputMaybe<FloatNullableFilter>;
  marketCapGoal?: InputMaybe<FloatNullableFilter>;
  name?: InputMaybe<StringFilter>;
  notes?: InputMaybe<StringFilter>;
  priceGoal?: InputMaybe<FloatNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  socialBudget?: InputMaybe<FloatNullableFilter>;
  startDate?: InputMaybe<CalendarDayNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  telegramGoal?: InputMaybe<FloatNullableFilter>;
  trackMarket?: InputMaybe<BooleanFilter>;
  trackSocial?: InputMaybe<BooleanFilter>;
  twitterGoal?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  users?: InputMaybe<UserManyRelationFilter>;
  volumeGoal?: InputMaybe<FloatNullableFilter>;
};

export type MarketingCampaignWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type MarketingTrackerResult = {
  __typename?: 'MarketingTrackerResult';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryResults?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  device?: Maybe<Scalars['String']>;
  deviceResults?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  ipAddress?: Maybe<Scalars['String']>;
  marketingCampaign?: Maybe<MarketingCampaign>;
  os?: Maybe<Scalars['String']>;
  referer?: Maybe<Scalars['String']>;
  refererResults?: Maybe<Scalars['JSON']>;
  socialClicks?: Maybe<Scalars['JSON']>;
  target?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  totalClicks?: Maybe<Scalars['JSON']>;
  uniqueClicks?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userAgent?: Maybe<Scalars['String']>;
};


export type MarketingTrackerResultCountryResultsArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};


export type MarketingTrackerResultDeviceResultsArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};


export type MarketingTrackerResultRefererResultsArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};


export type MarketingTrackerResultSocialClicksArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};


export type MarketingTrackerResultTotalClicksArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};


export type MarketingTrackerResultUniqueClicksArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
};

export type MarketingTrackerResultCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  device?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  marketingCampaign?: InputMaybe<MarketingCampaignRelateToOneForCreateInput>;
  os?: InputMaybe<Scalars['String']>;
  referer?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userAgent?: InputMaybe<Scalars['String']>;
};

export type MarketingTrackerResultOrderByInput = {
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  countryCode?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  device?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ipAddress?: InputMaybe<OrderDirection>;
  os?: InputMaybe<OrderDirection>;
  referer?: InputMaybe<OrderDirection>;
  target?: InputMaybe<OrderDirection>;
  timezone?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userAgent?: InputMaybe<OrderDirection>;
};

export type MarketingTrackerResultUpdateArgs = {
  data: MarketingTrackerResultUpdateInput;
  where: MarketingTrackerResultWhereUniqueInput;
};

export type MarketingTrackerResultUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  device?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  marketingCampaign?: InputMaybe<MarketingCampaignRelateToOneForUpdateInput>;
  os?: InputMaybe<Scalars['String']>;
  referer?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userAgent?: InputMaybe<Scalars['String']>;
};

export type MarketingTrackerResultWhereInput = {
  AND?: InputMaybe<Array<MarketingTrackerResultWhereInput>>;
  NOT?: InputMaybe<Array<MarketingTrackerResultWhereInput>>;
  OR?: InputMaybe<Array<MarketingTrackerResultWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  device?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  ipAddress?: InputMaybe<StringFilter>;
  marketingCampaign?: InputMaybe<MarketingCampaignWhereInput>;
  os?: InputMaybe<StringFilter>;
  referer?: InputMaybe<StringFilter>;
  target?: InputMaybe<StringFilter>;
  timezone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userAgent?: InputMaybe<StringFilter>;
};

export type MarketingTrackerResultWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAudit?: Maybe<Audit>;
  createAuditor?: Maybe<Auditor>;
  createAuditors?: Maybe<Array<Maybe<Auditor>>>;
  createAudits?: Maybe<Array<Maybe<Audit>>>;
  createBlock?: Maybe<Block>;
  createBlocks?: Maybe<Array<Maybe<Block>>>;
  createCart?: Maybe<Cart>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createCarts?: Maybe<Array<Maybe<Cart>>>;
  createContent?: Maybe<Content>;
  createContentBlock?: Maybe<ContentBlock>;
  createContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  createContentType?: Maybe<ContentType>;
  createContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  createContents?: Maybe<Array<Maybe<Content>>>;
  createCreator?: Maybe<Creator>;
  createCreatorRating?: Maybe<CreatorRating>;
  createCreatorRatings?: Maybe<Array<Maybe<CreatorRating>>>;
  createCreatorReview?: Maybe<CreatorReview>;
  createCreatorReviews?: Maybe<Array<Maybe<CreatorReview>>>;
  createCreators?: Maybe<Array<Maybe<Creator>>>;
  createCustomTracker?: Maybe<CustomTracker>;
  createCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  createDiscordBot?: Maybe<DiscordBot>;
  createDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  createExchange?: Maybe<Exchange>;
  createExchanges?: Maybe<Array<Maybe<Exchange>>>;
  createHolder?: Maybe<Holder>;
  createHolders?: Maybe<Array<Maybe<Holder>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createKyc?: Maybe<Kyc>;
  createKycGroup?: Maybe<KycGroup>;
  createKycGroups?: Maybe<Array<Maybe<KycGroup>>>;
  createKycs?: Maybe<Array<Maybe<Kyc>>>;
  createLiquidityPair?: Maybe<LiquidityPair>;
  createLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  createMarketStat?: Maybe<MarketStat>;
  createMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  createMarketingCampaign?: Maybe<MarketingCampaign>;
  createMarketingCampaigns?: Maybe<Array<Maybe<MarketingCampaign>>>;
  createMarketingTrackerResult?: Maybe<MarketingTrackerResult>;
  createMarketingTrackerResults?: Maybe<Array<Maybe<MarketingTrackerResult>>>;
  createNetwork?: Maybe<Network>;
  createNetworks?: Maybe<Array<Maybe<Network>>>;
  createNotification?: Maybe<Notification>;
  createNotifications?: Maybe<Array<Maybe<Notification>>>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  createProduct?: Maybe<Product>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createProject?: Maybe<Project>;
  createProjectComment?: Maybe<ProjectComment>;
  createProjectComments?: Maybe<Array<Maybe<ProjectComment>>>;
  createProjectRating?: Maybe<ProjectRating>;
  createProjectRatings?: Maybe<Array<Maybe<ProjectRating>>>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createSocialStat?: Maybe<SocialStat>;
  createSocialStats?: Maybe<Array<Maybe<SocialStat>>>;
  createStableLiquidityPair?: Maybe<StableLiquidityPair>;
  createStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  createSubscription?: Maybe<Subscription>;
  createSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createToken?: Maybe<Token>;
  createTokens?: Maybe<Array<Maybe<Token>>>;
  createTransfer?: Maybe<Transfer>;
  createTransfers?: Maybe<Array<Maybe<Transfer>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAudit?: Maybe<Audit>;
  deleteAuditor?: Maybe<Auditor>;
  deleteAuditors?: Maybe<Array<Maybe<Auditor>>>;
  deleteAudits?: Maybe<Array<Maybe<Audit>>>;
  deleteBlock?: Maybe<Block>;
  deleteBlocks?: Maybe<Array<Maybe<Block>>>;
  deleteCart?: Maybe<Cart>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteCarts?: Maybe<Array<Maybe<Cart>>>;
  deleteContent?: Maybe<Content>;
  deleteContentBlock?: Maybe<ContentBlock>;
  deleteContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  deleteContentType?: Maybe<ContentType>;
  deleteContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  deleteContents?: Maybe<Array<Maybe<Content>>>;
  deleteCreator?: Maybe<Creator>;
  deleteCreatorRating?: Maybe<CreatorRating>;
  deleteCreatorRatings?: Maybe<Array<Maybe<CreatorRating>>>;
  deleteCreatorReview?: Maybe<CreatorReview>;
  deleteCreatorReviews?: Maybe<Array<Maybe<CreatorReview>>>;
  deleteCreators?: Maybe<Array<Maybe<Creator>>>;
  deleteCustomTracker?: Maybe<CustomTracker>;
  deleteCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  deleteDiscordBot?: Maybe<DiscordBot>;
  deleteDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  deleteExchange?: Maybe<Exchange>;
  deleteExchanges?: Maybe<Array<Maybe<Exchange>>>;
  deleteHolder?: Maybe<Holder>;
  deleteHolders?: Maybe<Array<Maybe<Holder>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteKyc?: Maybe<Kyc>;
  deleteKycGroup?: Maybe<KycGroup>;
  deleteKycGroups?: Maybe<Array<Maybe<KycGroup>>>;
  deleteKycs?: Maybe<Array<Maybe<Kyc>>>;
  deleteLiquidityPair?: Maybe<LiquidityPair>;
  deleteLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  deleteMarketStat?: Maybe<MarketStat>;
  deleteMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  deleteMarketingCampaign?: Maybe<MarketingCampaign>;
  deleteMarketingCampaigns?: Maybe<Array<Maybe<MarketingCampaign>>>;
  deleteMarketingTrackerResult?: Maybe<MarketingTrackerResult>;
  deleteMarketingTrackerResults?: Maybe<Array<Maybe<MarketingTrackerResult>>>;
  deleteNetwork?: Maybe<Network>;
  deleteNetworks?: Maybe<Array<Maybe<Network>>>;
  deleteNotification?: Maybe<Notification>;
  deleteNotifications?: Maybe<Array<Maybe<Notification>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deleteProduct?: Maybe<Product>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteProject?: Maybe<Project>;
  deleteProjectComment?: Maybe<ProjectComment>;
  deleteProjectComments?: Maybe<Array<Maybe<ProjectComment>>>;
  deleteProjectRating?: Maybe<ProjectRating>;
  deleteProjectRatings?: Maybe<Array<Maybe<ProjectRating>>>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteSocialStat?: Maybe<SocialStat>;
  deleteSocialStats?: Maybe<Array<Maybe<SocialStat>>>;
  deleteStableLiquidityPair?: Maybe<StableLiquidityPair>;
  deleteStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  deleteSubscription?: Maybe<Subscription>;
  deleteSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteToken?: Maybe<Token>;
  deleteTokens?: Maybe<Array<Maybe<Token>>>;
  deleteTransfer?: Maybe<Transfer>;
  deleteTransfers?: Maybe<Array<Maybe<Transfer>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateAudit?: Maybe<Audit>;
  updateAuditor?: Maybe<Auditor>;
  updateAuditors?: Maybe<Array<Maybe<Auditor>>>;
  updateAudits?: Maybe<Array<Maybe<Audit>>>;
  updateBlock?: Maybe<Block>;
  updateBlocks?: Maybe<Array<Maybe<Block>>>;
  updateCart?: Maybe<Cart>;
  updateCartItem?: Maybe<CartItem>;
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  updateCarts?: Maybe<Array<Maybe<Cart>>>;
  updateContent?: Maybe<Content>;
  updateContentBlock?: Maybe<ContentBlock>;
  updateContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  updateContentType?: Maybe<ContentType>;
  updateContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  updateContents?: Maybe<Array<Maybe<Content>>>;
  updateCreator?: Maybe<Creator>;
  updateCreatorRating?: Maybe<CreatorRating>;
  updateCreatorRatings?: Maybe<Array<Maybe<CreatorRating>>>;
  updateCreatorReview?: Maybe<CreatorReview>;
  updateCreatorReviews?: Maybe<Array<Maybe<CreatorReview>>>;
  updateCreators?: Maybe<Array<Maybe<Creator>>>;
  updateCustomTracker?: Maybe<CustomTracker>;
  updateCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  updateDiscordBot?: Maybe<DiscordBot>;
  updateDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  updateExchange?: Maybe<Exchange>;
  updateExchanges?: Maybe<Array<Maybe<Exchange>>>;
  updateHolder?: Maybe<Holder>;
  updateHolders?: Maybe<Array<Maybe<Holder>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateKyc?: Maybe<Kyc>;
  updateKycGroup?: Maybe<KycGroup>;
  updateKycGroups?: Maybe<Array<Maybe<KycGroup>>>;
  updateKycs?: Maybe<Array<Maybe<Kyc>>>;
  updateLiquidityPair?: Maybe<LiquidityPair>;
  updateLiquidityPairs?: Maybe<Array<Maybe<LiquidityPair>>>;
  updateMarketStat?: Maybe<MarketStat>;
  updateMarketStats?: Maybe<Array<Maybe<MarketStat>>>;
  updateMarketingCampaign?: Maybe<MarketingCampaign>;
  updateMarketingCampaigns?: Maybe<Array<Maybe<MarketingCampaign>>>;
  updateMarketingTrackerResult?: Maybe<MarketingTrackerResult>;
  updateMarketingTrackerResults?: Maybe<Array<Maybe<MarketingTrackerResult>>>;
  updateNetwork?: Maybe<Network>;
  updateNetworks?: Maybe<Array<Maybe<Network>>>;
  updateNotification?: Maybe<Notification>;
  updateNotifications?: Maybe<Array<Maybe<Notification>>>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updateProduct?: Maybe<Product>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateProject?: Maybe<Project>;
  updateProjectComment?: Maybe<ProjectComment>;
  updateProjectComments?: Maybe<Array<Maybe<ProjectComment>>>;
  updateProjectRating?: Maybe<ProjectRating>;
  updateProjectRatings?: Maybe<Array<Maybe<ProjectRating>>>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateSocialStat?: Maybe<SocialStat>;
  updateSocialStats?: Maybe<Array<Maybe<SocialStat>>>;
  updateStableLiquidityPair?: Maybe<StableLiquidityPair>;
  updateStableLiquidityPairs?: Maybe<Array<Maybe<StableLiquidityPair>>>;
  updateSubscription?: Maybe<Subscription>;
  updateSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateToken?: Maybe<Token>;
  updateTokens?: Maybe<Array<Maybe<Token>>>;
  updateTransfer?: Maybe<Transfer>;
  updateTransfers?: Maybe<Array<Maybe<Transfer>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAuditArgs = {
  data: AuditCreateInput;
};


export type MutationCreateAuditorArgs = {
  data: AuditorCreateInput;
};


export type MutationCreateAuditorsArgs = {
  data: Array<AuditorCreateInput>;
};


export type MutationCreateAuditsArgs = {
  data: Array<AuditCreateInput>;
};


export type MutationCreateBlockArgs = {
  data: BlockCreateInput;
};


export type MutationCreateBlocksArgs = {
  data: Array<BlockCreateInput>;
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};


export type MutationCreateCartsArgs = {
  data: Array<CartCreateInput>;
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


export type MutationCreateCreatorArgs = {
  data: CreatorCreateInput;
};


export type MutationCreateCreatorRatingArgs = {
  data: CreatorRatingCreateInput;
};


export type MutationCreateCreatorRatingsArgs = {
  data: Array<CreatorRatingCreateInput>;
};


export type MutationCreateCreatorReviewArgs = {
  data: CreatorReviewCreateInput;
};


export type MutationCreateCreatorReviewsArgs = {
  data: Array<CreatorReviewCreateInput>;
};


export type MutationCreateCreatorsArgs = {
  data: Array<CreatorCreateInput>;
};


export type MutationCreateCustomTrackerArgs = {
  data: CustomTrackerCreateInput;
};


export type MutationCreateCustomTrackersArgs = {
  data: Array<CustomTrackerCreateInput>;
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


export type MutationCreateHolderArgs = {
  data: HolderCreateInput;
};


export type MutationCreateHoldersArgs = {
  data: Array<HolderCreateInput>;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateImagesArgs = {
  data: Array<ImageCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateKycArgs = {
  data: KycCreateInput;
};


export type MutationCreateKycGroupArgs = {
  data: KycGroupCreateInput;
};


export type MutationCreateKycGroupsArgs = {
  data: Array<KycGroupCreateInput>;
};


export type MutationCreateKycsArgs = {
  data: Array<KycCreateInput>;
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


export type MutationCreateMarketingCampaignArgs = {
  data: MarketingCampaignCreateInput;
};


export type MutationCreateMarketingCampaignsArgs = {
  data: Array<MarketingCampaignCreateInput>;
};


export type MutationCreateMarketingTrackerResultArgs = {
  data: MarketingTrackerResultCreateInput;
};


export type MutationCreateMarketingTrackerResultsArgs = {
  data: Array<MarketingTrackerResultCreateInput>;
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput;
};


export type MutationCreateNetworksArgs = {
  data: Array<NetworkCreateInput>;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateNotificationsArgs = {
  data: Array<NotificationCreateInput>;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateOrderItemsArgs = {
  data: Array<OrderItemCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectCommentArgs = {
  data: ProjectCommentCreateInput;
};


export type MutationCreateProjectCommentsArgs = {
  data: Array<ProjectCommentCreateInput>;
};


export type MutationCreateProjectRatingArgs = {
  data: ProjectRatingCreateInput;
};


export type MutationCreateProjectRatingsArgs = {
  data: Array<ProjectRatingCreateInput>;
};


export type MutationCreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};


export type MutationCreateSocialStatArgs = {
  data: SocialStatCreateInput;
};


export type MutationCreateSocialStatsArgs = {
  data: Array<SocialStatCreateInput>;
};


export type MutationCreateStableLiquidityPairArgs = {
  data: StableLiquidityPairCreateInput;
};


export type MutationCreateStableLiquidityPairsArgs = {
  data: Array<StableLiquidityPairCreateInput>;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateSubscriptionsArgs = {
  data: Array<SubscriptionCreateInput>;
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


export type MutationCreateTransferArgs = {
  data: TransferCreateInput;
};


export type MutationCreateTransfersArgs = {
  data: Array<TransferCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAuditArgs = {
  where: AuditWhereUniqueInput;
};


export type MutationDeleteAuditorArgs = {
  where: AuditorWhereUniqueInput;
};


export type MutationDeleteAuditorsArgs = {
  where: Array<AuditorWhereUniqueInput>;
};


export type MutationDeleteAuditsArgs = {
  where: Array<AuditWhereUniqueInput>;
};


export type MutationDeleteBlockArgs = {
  where: BlockWhereUniqueInput;
};


export type MutationDeleteBlocksArgs = {
  where: Array<BlockWhereUniqueInput>;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};


export type MutationDeleteCartsArgs = {
  where: Array<CartWhereUniqueInput>;
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


export type MutationDeleteCreatorArgs = {
  where: CreatorWhereUniqueInput;
};


export type MutationDeleteCreatorRatingArgs = {
  where: CreatorRatingWhereUniqueInput;
};


export type MutationDeleteCreatorRatingsArgs = {
  where: Array<CreatorRatingWhereUniqueInput>;
};


export type MutationDeleteCreatorReviewArgs = {
  where: CreatorReviewWhereUniqueInput;
};


export type MutationDeleteCreatorReviewsArgs = {
  where: Array<CreatorReviewWhereUniqueInput>;
};


export type MutationDeleteCreatorsArgs = {
  where: Array<CreatorWhereUniqueInput>;
};


export type MutationDeleteCustomTrackerArgs = {
  where: CustomTrackerWhereUniqueInput;
};


export type MutationDeleteCustomTrackersArgs = {
  where: Array<CustomTrackerWhereUniqueInput>;
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


export type MutationDeleteHolderArgs = {
  where: HolderWhereUniqueInput;
};


export type MutationDeleteHoldersArgs = {
  where: Array<HolderWhereUniqueInput>;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};


export type MutationDeleteKycArgs = {
  where: KycWhereUniqueInput;
};


export type MutationDeleteKycGroupArgs = {
  where: KycGroupWhereUniqueInput;
};


export type MutationDeleteKycGroupsArgs = {
  where: Array<KycGroupWhereUniqueInput>;
};


export type MutationDeleteKycsArgs = {
  where: Array<KycWhereUniqueInput>;
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


export type MutationDeleteMarketingCampaignArgs = {
  where: MarketingCampaignWhereUniqueInput;
};


export type MutationDeleteMarketingCampaignsArgs = {
  where: Array<MarketingCampaignWhereUniqueInput>;
};


export type MutationDeleteMarketingTrackerResultArgs = {
  where: MarketingTrackerResultWhereUniqueInput;
};


export type MutationDeleteMarketingTrackerResultsArgs = {
  where: Array<MarketingTrackerResultWhereUniqueInput>;
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput;
};


export type MutationDeleteNetworksArgs = {
  where: Array<NetworkWhereUniqueInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteNotificationsArgs = {
  where: Array<NotificationWhereUniqueInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteOrderItemsArgs = {
  where: Array<OrderItemWhereUniqueInput>;
};


export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectCommentArgs = {
  where: ProjectCommentWhereUniqueInput;
};


export type MutationDeleteProjectCommentsArgs = {
  where: Array<ProjectCommentWhereUniqueInput>;
};


export type MutationDeleteProjectRatingArgs = {
  where: ProjectRatingWhereUniqueInput;
};


export type MutationDeleteProjectRatingsArgs = {
  where: Array<ProjectRatingWhereUniqueInput>;
};


export type MutationDeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};


export type MutationDeleteSocialStatArgs = {
  where: SocialStatWhereUniqueInput;
};


export type MutationDeleteSocialStatsArgs = {
  where: Array<SocialStatWhereUniqueInput>;
};


export type MutationDeleteStableLiquidityPairArgs = {
  where: StableLiquidityPairWhereUniqueInput;
};


export type MutationDeleteStableLiquidityPairsArgs = {
  where: Array<StableLiquidityPairWhereUniqueInput>;
};


export type MutationDeleteSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteSubscriptionsArgs = {
  where: Array<SubscriptionWhereUniqueInput>;
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


export type MutationDeleteTransferArgs = {
  where: TransferWhereUniqueInput;
};


export type MutationDeleteTransfersArgs = {
  where: Array<TransferWhereUniqueInput>;
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


export type MutationUpdateAuditArgs = {
  data: AuditUpdateInput;
  where: AuditWhereUniqueInput;
};


export type MutationUpdateAuditorArgs = {
  data: AuditorUpdateInput;
  where: AuditorWhereUniqueInput;
};


export type MutationUpdateAuditorsArgs = {
  data: Array<AuditorUpdateArgs>;
};


export type MutationUpdateAuditsArgs = {
  data: Array<AuditUpdateArgs>;
};


export type MutationUpdateBlockArgs = {
  data: BlockUpdateInput;
  where: BlockWhereUniqueInput;
};


export type MutationUpdateBlocksArgs = {
  data: Array<BlockUpdateArgs>;
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};


export type MutationUpdateCartsArgs = {
  data: Array<CartUpdateArgs>;
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


export type MutationUpdateCreatorArgs = {
  data: CreatorUpdateInput;
  where: CreatorWhereUniqueInput;
};


export type MutationUpdateCreatorRatingArgs = {
  data: CreatorRatingUpdateInput;
  where: CreatorRatingWhereUniqueInput;
};


export type MutationUpdateCreatorRatingsArgs = {
  data: Array<CreatorRatingUpdateArgs>;
};


export type MutationUpdateCreatorReviewArgs = {
  data: CreatorReviewUpdateInput;
  where: CreatorReviewWhereUniqueInput;
};


export type MutationUpdateCreatorReviewsArgs = {
  data: Array<CreatorReviewUpdateArgs>;
};


export type MutationUpdateCreatorsArgs = {
  data: Array<CreatorUpdateArgs>;
};


export type MutationUpdateCustomTrackerArgs = {
  data: CustomTrackerUpdateInput;
  where: CustomTrackerWhereUniqueInput;
};


export type MutationUpdateCustomTrackersArgs = {
  data: Array<CustomTrackerUpdateArgs>;
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


export type MutationUpdateHolderArgs = {
  data: HolderUpdateInput;
  where: HolderWhereUniqueInput;
};


export type MutationUpdateHoldersArgs = {
  data: Array<HolderUpdateArgs>;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};


export type MutationUpdateKycArgs = {
  data: KycUpdateInput;
  where: KycWhereUniqueInput;
};


export type MutationUpdateKycGroupArgs = {
  data: KycGroupUpdateInput;
  where: KycGroupWhereUniqueInput;
};


export type MutationUpdateKycGroupsArgs = {
  data: Array<KycGroupUpdateArgs>;
};


export type MutationUpdateKycsArgs = {
  data: Array<KycUpdateArgs>;
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


export type MutationUpdateMarketingCampaignArgs = {
  data: MarketingCampaignUpdateInput;
  where: MarketingCampaignWhereUniqueInput;
};


export type MutationUpdateMarketingCampaignsArgs = {
  data: Array<MarketingCampaignUpdateArgs>;
};


export type MutationUpdateMarketingTrackerResultArgs = {
  data: MarketingTrackerResultUpdateInput;
  where: MarketingTrackerResultWhereUniqueInput;
};


export type MutationUpdateMarketingTrackerResultsArgs = {
  data: Array<MarketingTrackerResultUpdateArgs>;
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpdateNetworksArgs = {
  data: Array<NetworkUpdateArgs>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateNotificationsArgs = {
  data: Array<NotificationUpdateArgs>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateOrderItemsArgs = {
  data: Array<OrderItemUpdateArgs>;
};


export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectCommentArgs = {
  data: ProjectCommentUpdateInput;
  where: ProjectCommentWhereUniqueInput;
};


export type MutationUpdateProjectCommentsArgs = {
  data: Array<ProjectCommentUpdateArgs>;
};


export type MutationUpdateProjectRatingArgs = {
  data: ProjectRatingUpdateInput;
  where: ProjectRatingWhereUniqueInput;
};


export type MutationUpdateProjectRatingsArgs = {
  data: Array<ProjectRatingUpdateArgs>;
};


export type MutationUpdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};


export type MutationUpdateSocialStatArgs = {
  data: SocialStatUpdateInput;
  where: SocialStatWhereUniqueInput;
};


export type MutationUpdateSocialStatsArgs = {
  data: Array<SocialStatUpdateArgs>;
};


export type MutationUpdateStableLiquidityPairArgs = {
  data: StableLiquidityPairUpdateInput;
  where: StableLiquidityPairWhereUniqueInput;
};


export type MutationUpdateStableLiquidityPairsArgs = {
  data: Array<StableLiquidityPairUpdateArgs>;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateSubscriptionsArgs = {
  data: Array<SubscriptionUpdateArgs>;
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


export type MutationUpdateTransferArgs = {
  data: TransferUpdateInput;
  where: TransferWhereUniqueInput;
};


export type MutationUpdateTransfersArgs = {
  data: Array<TransferUpdateArgs>;
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
  scanner?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tokenScanner?: Maybe<Scalars['String']>;
  txScanner?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NetworkCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  scanner?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tokenScanner?: InputMaybe<Scalars['String']>;
  txScanner?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type NetworkOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  scanner?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  tokenScanner?: InputMaybe<OrderDirection>;
  txScanner?: InputMaybe<OrderDirection>;
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
  scanner?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tokenScanner?: InputMaybe<Scalars['String']>;
  txScanner?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type NetworkWhereInput = {
  AND?: InputMaybe<Array<NetworkWhereInput>>;
  NOT?: InputMaybe<Array<NetworkWhereInput>>;
  OR?: InputMaybe<Array<NetworkWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  scanner?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  tokenScanner?: InputMaybe<StringFilter>;
  txScanner?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NetworkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Notification = {
  __typename?: 'Notification';
  content?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotificationCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type NotificationManyRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type NotificationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
};

export type NotificationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationUpdateArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringNullableFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Order = {
  __typename?: 'Order';
  currency?: Maybe<Scalars['String']>;
  currencyPriceEur?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  durationInMonths?: Maybe<Scalars['Float']>;
  grandTotal?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  orderItem?: Maybe<Array<OrderItem>>;
  orderItemCount?: Maybe<Scalars['Int']>;
  orderNumber?: Maybe<Scalars['Int']>;
  paymentNetwork?: Maybe<Network>;
  project?: Maybe<Project>;
  subTotal?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  walletAddress?: Maybe<Scalars['String']>;
};


export type OrderOrderItemArgs = {
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: OrderItemWhereInput;
};


export type OrderOrderItemCountArgs = {
  where?: OrderItemWhereInput;
};

export type OrderCreateInput = {
  currency?: InputMaybe<Scalars['String']>;
  currencyPriceEur?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  durationInMonths?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  orderItem?: InputMaybe<OrderItemRelateToManyForCreateInput>;
  orderNumber?: InputMaybe<Scalars['Int']>;
  paymentNetwork?: InputMaybe<NetworkRelateToOneForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  subTotal?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  total?: InputMaybe<Scalars['Float']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  dateAdded?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  order?: Maybe<Order>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItemCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderItemManyRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrderItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderWhereInput>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type OrderOrderByInput = {
  currency?: InputMaybe<OrderDirection>;
  currencyPriceEur?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  durationInMonths?: InputMaybe<OrderDirection>;
  grandTotal?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  orderNumber?: InputMaybe<OrderDirection>;
  subTotal?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
  transactionHash?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  walletAddress?: InputMaybe<OrderDirection>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  currency?: InputMaybe<Scalars['String']>;
  currencyPriceEur?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  durationInMonths?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  orderItem?: InputMaybe<OrderItemRelateToManyForUpdateInput>;
  orderNumber?: InputMaybe<Scalars['Int']>;
  paymentNetwork?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  subTotal?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  total?: InputMaybe<Scalars['Float']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  currencyPriceEur?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  durationInMonths?: InputMaybe<FloatNullableFilter>;
  grandTotal?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  orderItem?: InputMaybe<OrderItemManyRelationFilter>;
  orderNumber?: InputMaybe<IntFilter>;
  paymentNetwork?: InputMaybe<NetworkWhereInput>;
  project?: InputMaybe<ProjectWhereInput>;
  subTotal?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
  total?: InputMaybe<FloatNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  walletAddress?: InputMaybe<StringFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

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

export type Product = {
  __typename?: 'Product';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isForListed?: Maybe<Scalars['Boolean']>;
  isForUnlisted?: Maybe<Scalars['Boolean']>;
  isMonthly?: Maybe<Scalars['Boolean']>;
  isOneTime?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  offers?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceLabel?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  styles?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  isForListed?: InputMaybe<Scalars['Boolean']>;
  isForUnlisted?: InputMaybe<Scalars['Boolean']>;
  isMonthly?: InputMaybe<Scalars['Boolean']>;
  isOneTime?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  priceLabel?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  styles?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isForListed?: InputMaybe<OrderDirection>;
  isForUnlisted?: InputMaybe<OrderDirection>;
  isMonthly?: InputMaybe<OrderDirection>;
  isOneTime?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  offers?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  priceLabel?: InputMaybe<OrderDirection>;
  sku?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  isForListed?: InputMaybe<Scalars['Boolean']>;
  isForUnlisted?: InputMaybe<Scalars['Boolean']>;
  isMonthly?: InputMaybe<Scalars['Boolean']>;
  isOneTime?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  priceLabel?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  styles?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isForListed?: InputMaybe<BooleanFilter>;
  isForUnlisted?: InputMaybe<BooleanFilter>;
  isMonthly?: InputMaybe<BooleanFilter>;
  isOneTime?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  offers?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  priceLabel?: InputMaybe<StringFilter>;
  sku?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Project = {
  __typename?: 'Project';
  ABI?: Maybe<Scalars['JSON']>;
  apy?: Maybe<Scalars['Float']>;
  auditBy?: Maybe<Array<Audit>>;
  auditByCount?: Maybe<Scalars['Int']>;
  auditLink?: Maybe<Scalars['String']>;
  burnAddress?: Maybe<Scalars['String']>;
  buyTax?: Maybe<Scalars['Float']>;
  calendar?: Maybe<Scalars['String']>;
  contractAddress?: Maybe<Scalars['String']>;
  customTrackers?: Maybe<Array<CustomTracker>>;
  customTrackersCount?: Maybe<Scalars['Int']>;
  customVetting?: Maybe<Scalars['String']>;
  dailyApy?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  discordServerId?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  exhangeAddress?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialized?: Maybe<Scalars['Boolean']>;
  isAwaitingPayment?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  isPending?: Maybe<Scalars['Boolean']>;
  kycBy?: Maybe<Array<Kyc>>;
  kycByCount?: Maybe<Scalars['Int']>;
  kycLink?: Maybe<Scalars['String']>;
  launchBlock?: Maybe<Scalars['Int']>;
  launchDate?: Maybe<Scalars['DateTime']>;
  liquidityPair?: Maybe<Array<LiquidityPair>>;
  liquidityPairCount?: Maybe<Scalars['Int']>;
  logo?: Maybe<ImageFieldOutput>;
  markForDeletion?: Maybe<Scalars['Boolean']>;
  medium?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Network>;
  notifications?: Maybe<Array<Notification>>;
  notificationsCount?: Maybe<Scalars['Int']>;
  pairAddress?: Maybe<Scalars['String']>;
  parentProject?: Maybe<Array<Project>>;
  parentProjectCount?: Maybe<Scalars['Int']>;
  periodicWalletUpdates?: Maybe<Scalars['Boolean']>;
  ratings?: Maybe<Array<ProjectRating>>;
  ratingsCount?: Maybe<Scalars['Int']>;
  rebasePeriod?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  relatedProjects?: Maybe<Array<Project>>;
  relatedProjectsCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<ProjectComment>>;
  reviewsCount?: Maybe<Scalars['Int']>;
  sellTax?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  telegram?: Maybe<Scalars['String']>;
  trackData?: Maybe<Scalars['Boolean']>;
  trackHolders?: Maybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: Maybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: Maybe<Scalars['Float']>;
  trackSocials?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  useDexScreener?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Array<User>>;
  userCount?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  whitepaper?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


export type ProjectAuditByArgs = {
  orderBy?: Array<AuditOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AuditWhereInput;
};


export type ProjectAuditByCountArgs = {
  where?: AuditWhereInput;
};


export type ProjectCustomTrackersArgs = {
  orderBy?: Array<CustomTrackerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CustomTrackerWhereInput;
};


export type ProjectCustomTrackersCountArgs = {
  where?: CustomTrackerWhereInput;
};


export type ProjectKycByArgs = {
  orderBy?: Array<KycOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: KycWhereInput;
};


export type ProjectKycByCountArgs = {
  where?: KycWhereInput;
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
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NotificationWhereInput;
};


export type ProjectNotificationsCountArgs = {
  where?: NotificationWhereInput;
};


export type ProjectParentProjectArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type ProjectParentProjectCountArgs = {
  where?: ProjectWhereInput;
};


export type ProjectRatingsArgs = {
  orderBy?: Array<ProjectRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectRatingWhereInput;
};


export type ProjectRatingsCountArgs = {
  where?: ProjectRatingWhereInput;
};


export type ProjectRelatedProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type ProjectRelatedProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type ProjectReviewsArgs = {
  orderBy?: Array<ProjectCommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectCommentWhereInput;
};


export type ProjectReviewsCountArgs = {
  where?: ProjectCommentWhereInput;
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


export type ProjectUserArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type ProjectUserCountArgs = {
  where?: UserWhereInput;
};

export type ProjectComment = {
  __typename?: 'ProjectComment';
  comment?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type ProjectCommentCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ProjectCommentManyRelationFilter = {
  every?: InputMaybe<ProjectCommentWhereInput>;
  none?: InputMaybe<ProjectCommentWhereInput>;
  some?: InputMaybe<ProjectCommentWhereInput>;
};

export type ProjectCommentOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProjectCommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectCommentWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCommentCreateInput>>;
};

export type ProjectCommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectCommentWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCommentCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectCommentWhereUniqueInput>>;
};

export type ProjectCommentUpdateArgs = {
  data: ProjectCommentUpdateInput;
  where: ProjectCommentWhereUniqueInput;
};

export type ProjectCommentUpdateInput = {
  comment?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ProjectCommentWhereInput = {
  AND?: InputMaybe<Array<ProjectCommentWhereInput>>;
  NOT?: InputMaybe<Array<ProjectCommentWhereInput>>;
  OR?: InputMaybe<Array<ProjectCommentWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ProjectCommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProjectCreateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  apy?: InputMaybe<Scalars['Float']>;
  auditBy?: InputMaybe<AuditRelateToManyForCreateInput>;
  auditLink?: InputMaybe<Scalars['String']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  calendar?: InputMaybe<Scalars['String']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customTrackers?: InputMaybe<CustomTrackerRelateToManyForCreateInput>;
  customVetting?: InputMaybe<Scalars['String']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  discordServerId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  exhangeAddress?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isAwaitingPayment?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isPending?: InputMaybe<Scalars['Boolean']>;
  kycBy?: InputMaybe<KycRelateToManyForCreateInput>;
  kycLink?: InputMaybe<Scalars['String']>;
  launchBlock?: InputMaybe<Scalars['Int']>;
  launchDate?: InputMaybe<Scalars['DateTime']>;
  liquidityPair?: InputMaybe<LiquidityPairRelateToManyForCreateInput>;
  logo?: InputMaybe<ImageFieldInput>;
  markForDeletion?: InputMaybe<Scalars['Boolean']>;
  medium?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  notifications?: InputMaybe<NotificationRelateToManyForCreateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  parentProject?: InputMaybe<ProjectRelateToManyForCreateInput>;
  periodicWalletUpdates?: InputMaybe<Scalars['Boolean']>;
  ratings?: InputMaybe<ProjectRatingRelateToManyForCreateInput>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  relatedProjects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  reviews?: InputMaybe<ProjectCommentRelateToManyForCreateInput>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  trackData?: InputMaybe<Scalars['Boolean']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: InputMaybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  trackSocials?: InputMaybe<Scalars['Boolean']>;
  twitter?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToManyForCreateInput>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProjectManyRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  apy?: InputMaybe<OrderDirection>;
  auditLink?: InputMaybe<OrderDirection>;
  burnAddress?: InputMaybe<OrderDirection>;
  buyTax?: InputMaybe<OrderDirection>;
  calendar?: InputMaybe<OrderDirection>;
  contractAddress?: InputMaybe<OrderDirection>;
  customVetting?: InputMaybe<OrderDirection>;
  dailyApy?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  discordServerId?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  exhangeAddress?: InputMaybe<OrderDirection>;
  github?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  initialized?: InputMaybe<OrderDirection>;
  isAwaitingPayment?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  isPending?: InputMaybe<OrderDirection>;
  kycLink?: InputMaybe<OrderDirection>;
  launchBlock?: InputMaybe<OrderDirection>;
  launchDate?: InputMaybe<OrderDirection>;
  markForDeletion?: InputMaybe<OrderDirection>;
  medium?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  pairAddress?: InputMaybe<OrderDirection>;
  periodicWalletUpdates?: InputMaybe<OrderDirection>;
  rebasePeriod?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  sellTax?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  trackData?: InputMaybe<OrderDirection>;
  trackHolders?: InputMaybe<OrderDirection>;
  trackHoldersFromDollarAmount?: InputMaybe<OrderDirection>;
  trackHoldersFromTokenAmount?: InputMaybe<OrderDirection>;
  trackSocials?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  useDexScreener?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  whitepaper?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type ProjectRating = {
  __typename?: 'ProjectRating';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type ProjectRatingCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ProjectRatingManyRelationFilter = {
  every?: InputMaybe<ProjectRatingWhereInput>;
  none?: InputMaybe<ProjectRatingWhereInput>;
  some?: InputMaybe<ProjectRatingWhereInput>;
};

export type ProjectRatingOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
  rating?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProjectRatingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectRatingCreateInput>>;
};

export type ProjectRatingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectRatingCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectRatingWhereUniqueInput>>;
};

export type ProjectRatingUpdateArgs = {
  data: ProjectRatingUpdateInput;
  where: ProjectRatingWhereUniqueInput;
};

export type ProjectRatingUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ProjectRatingWhereInput = {
  AND?: InputMaybe<Array<ProjectRatingWhereInput>>;
  NOT?: InputMaybe<Array<ProjectRatingWhereInput>>;
  OR?: InputMaybe<Array<ProjectRatingWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  rating?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ProjectRatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  auditBy?: InputMaybe<AuditRelateToManyForUpdateInput>;
  auditLink?: InputMaybe<Scalars['String']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  calendar?: InputMaybe<Scalars['String']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customTrackers?: InputMaybe<CustomTrackerRelateToManyForUpdateInput>;
  customVetting?: InputMaybe<Scalars['String']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  discordServerId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  exhangeAddress?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isAwaitingPayment?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isPending?: InputMaybe<Scalars['Boolean']>;
  kycBy?: InputMaybe<KycRelateToManyForUpdateInput>;
  kycLink?: InputMaybe<Scalars['String']>;
  launchBlock?: InputMaybe<Scalars['Int']>;
  launchDate?: InputMaybe<Scalars['DateTime']>;
  liquidityPair?: InputMaybe<LiquidityPairRelateToManyForUpdateInput>;
  logo?: InputMaybe<ImageFieldInput>;
  markForDeletion?: InputMaybe<Scalars['Boolean']>;
  medium?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForUpdateInput>;
  notifications?: InputMaybe<NotificationRelateToManyForUpdateInput>;
  pairAddress?: InputMaybe<Scalars['String']>;
  parentProject?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  periodicWalletUpdates?: InputMaybe<Scalars['Boolean']>;
  ratings?: InputMaybe<ProjectRatingRelateToManyForUpdateInput>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  relatedProjects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  reviews?: InputMaybe<ProjectCommentRelateToManyForUpdateInput>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  trackData?: InputMaybe<Scalars['Boolean']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: InputMaybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  trackSocials?: InputMaybe<Scalars['Boolean']>;
  twitter?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToManyForUpdateInput>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  apy?: InputMaybe<FloatNullableFilter>;
  auditBy?: InputMaybe<AuditManyRelationFilter>;
  auditLink?: InputMaybe<StringFilter>;
  burnAddress?: InputMaybe<StringFilter>;
  buyTax?: InputMaybe<FloatNullableFilter>;
  calendar?: InputMaybe<StringFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  customTrackers?: InputMaybe<CustomTrackerManyRelationFilter>;
  customVetting?: InputMaybe<StringFilter>;
  dailyApy?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  discordServerId?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  exhangeAddress?: InputMaybe<StringFilter>;
  github?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  initialized?: InputMaybe<BooleanFilter>;
  isAwaitingPayment?: InputMaybe<BooleanFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  isPending?: InputMaybe<BooleanFilter>;
  kycBy?: InputMaybe<KycManyRelationFilter>;
  kycLink?: InputMaybe<StringFilter>;
  launchBlock?: InputMaybe<IntNullableFilter>;
  launchDate?: InputMaybe<DateTimeNullableFilter>;
  liquidityPair?: InputMaybe<LiquidityPairManyRelationFilter>;
  markForDeletion?: InputMaybe<BooleanFilter>;
  medium?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  network?: InputMaybe<NetworkWhereInput>;
  notifications?: InputMaybe<NotificationManyRelationFilter>;
  pairAddress?: InputMaybe<StringFilter>;
  parentProject?: InputMaybe<ProjectManyRelationFilter>;
  periodicWalletUpdates?: InputMaybe<BooleanFilter>;
  ratings?: InputMaybe<ProjectRatingManyRelationFilter>;
  rebasePeriod?: InputMaybe<StringFilter>;
  reddit?: InputMaybe<StringFilter>;
  relatedProjects?: InputMaybe<ProjectManyRelationFilter>;
  reviews?: InputMaybe<ProjectCommentManyRelationFilter>;
  sellTax?: InputMaybe<FloatNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  telegram?: InputMaybe<StringFilter>;
  trackData?: InputMaybe<BooleanFilter>;
  trackHolders?: InputMaybe<BooleanFilter>;
  trackHoldersFromDollarAmount?: InputMaybe<FloatNullableFilter>;
  trackHoldersFromTokenAmount?: InputMaybe<FloatNullableFilter>;
  trackSocials?: InputMaybe<BooleanFilter>;
  twitter?: InputMaybe<StringFilter>;
  useDexScreener?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserManyRelationFilter>;
  website?: InputMaybe<StringFilter>;
  whitepaper?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  audit?: Maybe<Audit>;
  auditor?: Maybe<Auditor>;
  auditors?: Maybe<Array<Auditor>>;
  auditorsCount?: Maybe<Scalars['Int']>;
  audits?: Maybe<Array<Audit>>;
  auditsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  block?: Maybe<Block>;
  blocks?: Maybe<Array<Block>>;
  blocksCount?: Maybe<Scalars['Int']>;
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartItemsCount?: Maybe<Scalars['Int']>;
  carts?: Maybe<Array<Cart>>;
  cartsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Content>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlocks?: Maybe<Array<ContentBlock>>;
  contentBlocksCount?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentType>;
  contentTypes?: Maybe<Array<ContentType>>;
  contentTypesCount?: Maybe<Scalars['Int']>;
  contents?: Maybe<Array<Content>>;
  contentsCount?: Maybe<Scalars['Int']>;
  creator?: Maybe<Creator>;
  creatorRating?: Maybe<CreatorRating>;
  creatorRatings?: Maybe<Array<CreatorRating>>;
  creatorRatingsCount?: Maybe<Scalars['Int']>;
  creatorReview?: Maybe<CreatorReview>;
  creatorReviews?: Maybe<Array<CreatorReview>>;
  creatorReviewsCount?: Maybe<Scalars['Int']>;
  creators?: Maybe<Array<Creator>>;
  creatorsCount?: Maybe<Scalars['Int']>;
  customTracker?: Maybe<CustomTracker>;
  customTrackers?: Maybe<Array<CustomTracker>>;
  customTrackersCount?: Maybe<Scalars['Int']>;
  discordBot?: Maybe<DiscordBot>;
  discordBots?: Maybe<Array<DiscordBot>>;
  discordBotsCount?: Maybe<Scalars['Int']>;
  exchange?: Maybe<Exchange>;
  exchanges?: Maybe<Array<Exchange>>;
  exchangesCount?: Maybe<Scalars['Int']>;
  holder?: Maybe<Holder>;
  holders?: Maybe<Array<Holder>>;
  holdersCount?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  kyc?: Maybe<Kyc>;
  kycGroup?: Maybe<KycGroup>;
  kycGroups?: Maybe<Array<KycGroup>>;
  kycGroupsCount?: Maybe<Scalars['Int']>;
  kycs?: Maybe<Array<Kyc>>;
  kycsCount?: Maybe<Scalars['Int']>;
  liquidityPair?: Maybe<LiquidityPair>;
  liquidityPairs?: Maybe<Array<LiquidityPair>>;
  liquidityPairsCount?: Maybe<Scalars['Int']>;
  marketStat?: Maybe<MarketStat>;
  marketStats?: Maybe<Array<MarketStat>>;
  marketStatsCount?: Maybe<Scalars['Int']>;
  marketingCampaign?: Maybe<MarketingCampaign>;
  marketingCampaigns?: Maybe<Array<MarketingCampaign>>;
  marketingCampaignsCount?: Maybe<Scalars['Int']>;
  marketingTrackerResult?: Maybe<MarketingTrackerResult>;
  marketingTrackerResults?: Maybe<Array<MarketingTrackerResult>>;
  marketingTrackerResultsCount?: Maybe<Scalars['Int']>;
  network?: Maybe<Network>;
  networks?: Maybe<Array<Network>>;
  networksCount?: Maybe<Scalars['Int']>;
  notification?: Maybe<Notification>;
  notifications?: Maybe<Array<Notification>>;
  notificationsCount?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderItemsCount?: Maybe<Scalars['Int']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectComment?: Maybe<ProjectComment>;
  projectComments?: Maybe<Array<ProjectComment>>;
  projectCommentsCount?: Maybe<Scalars['Int']>;
  projectRating?: Maybe<ProjectRating>;
  projectRatings?: Maybe<Array<ProjectRating>>;
  projectRatingsCount?: Maybe<Scalars['Int']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  socialStat?: Maybe<SocialStat>;
  socialStats?: Maybe<Array<SocialStat>>;
  socialStatsCount?: Maybe<Scalars['Int']>;
  stableLiquidityPair?: Maybe<StableLiquidityPair>;
  stableLiquidityPairs?: Maybe<Array<StableLiquidityPair>>;
  stableLiquidityPairsCount?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Subscription>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  token?: Maybe<Token>;
  tokens?: Maybe<Array<Token>>;
  tokensCount?: Maybe<Scalars['Int']>;
  transfer?: Maybe<Transfer>;
  transfers?: Maybe<Array<Transfer>>;
  transfersCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryAuditArgs = {
  where: AuditWhereUniqueInput;
};


export type QueryAuditorArgs = {
  where: AuditorWhereUniqueInput;
};


export type QueryAuditorsArgs = {
  orderBy?: Array<AuditorOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AuditorWhereInput;
};


export type QueryAuditorsCountArgs = {
  where?: AuditorWhereInput;
};


export type QueryAuditsArgs = {
  orderBy?: Array<AuditOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AuditWhereInput;
};


export type QueryAuditsCountArgs = {
  where?: AuditWhereInput;
};


export type QueryBlockArgs = {
  where: BlockWhereUniqueInput;
};


export type QueryBlocksArgs = {
  orderBy?: Array<BlockOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BlockWhereInput;
};


export type QueryBlocksCountArgs = {
  where?: BlockWhereInput;
};


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CartItemWhereInput;
};


export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};


export type QueryCartsArgs = {
  orderBy?: Array<CartOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CartWhereInput;
};


export type QueryCartsCountArgs = {
  where?: CartWhereInput;
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


export type QueryCreatorArgs = {
  where: CreatorWhereUniqueInput;
};


export type QueryCreatorRatingArgs = {
  where: CreatorRatingWhereUniqueInput;
};


export type QueryCreatorRatingsArgs = {
  orderBy?: Array<CreatorRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CreatorRatingWhereInput;
};


export type QueryCreatorRatingsCountArgs = {
  where?: CreatorRatingWhereInput;
};


export type QueryCreatorReviewArgs = {
  where: CreatorReviewWhereUniqueInput;
};


export type QueryCreatorReviewsArgs = {
  orderBy?: Array<CreatorReviewOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CreatorReviewWhereInput;
};


export type QueryCreatorReviewsCountArgs = {
  where?: CreatorReviewWhereInput;
};


export type QueryCreatorsArgs = {
  orderBy?: Array<CreatorOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CreatorWhereInput;
};


export type QueryCreatorsCountArgs = {
  where?: CreatorWhereInput;
};


export type QueryCustomTrackerArgs = {
  where: CustomTrackerWhereUniqueInput;
};


export type QueryCustomTrackersArgs = {
  orderBy?: Array<CustomTrackerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CustomTrackerWhereInput;
};


export type QueryCustomTrackersCountArgs = {
  where?: CustomTrackerWhereInput;
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


export type QueryHolderArgs = {
  where: HolderWhereUniqueInput;
};


export type QueryHoldersArgs = {
  orderBy?: Array<HolderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: HolderWhereInput;
};


export type QueryHoldersCountArgs = {
  where?: HolderWhereInput;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};


export type QueryKycArgs = {
  where: KycWhereUniqueInput;
};


export type QueryKycGroupArgs = {
  where: KycGroupWhereUniqueInput;
};


export type QueryKycGroupsArgs = {
  orderBy?: Array<KycGroupOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: KycGroupWhereInput;
};


export type QueryKycGroupsCountArgs = {
  where?: KycGroupWhereInput;
};


export type QueryKycsArgs = {
  orderBy?: Array<KycOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: KycWhereInput;
};


export type QueryKycsCountArgs = {
  where?: KycWhereInput;
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


export type QueryMarketingCampaignArgs = {
  where: MarketingCampaignWhereUniqueInput;
};


export type QueryMarketingCampaignsArgs = {
  orderBy?: Array<MarketingCampaignOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MarketingCampaignWhereInput;
};


export type QueryMarketingCampaignsCountArgs = {
  where?: MarketingCampaignWhereInput;
};


export type QueryMarketingTrackerResultArgs = {
  where: MarketingTrackerResultWhereUniqueInput;
};


export type QueryMarketingTrackerResultsArgs = {
  orderBy?: Array<MarketingTrackerResultOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MarketingTrackerResultWhereInput;
};


export type QueryMarketingTrackerResultsCountArgs = {
  where?: MarketingTrackerResultWhereInput;
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


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NotificationWhereInput;
};


export type QueryNotificationsCountArgs = {
  where?: NotificationWhereInput;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemsArgs = {
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: OrderItemWhereInput;
};


export type QueryOrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};


export type QueryOrdersArgs = {
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: OrderWhereInput;
};


export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectCommentArgs = {
  where: ProjectCommentWhereUniqueInput;
};


export type QueryProjectCommentsArgs = {
  orderBy?: Array<ProjectCommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectCommentWhereInput;
};


export type QueryProjectCommentsCountArgs = {
  where?: ProjectCommentWhereInput;
};


export type QueryProjectRatingArgs = {
  where: ProjectRatingWhereUniqueInput;
};


export type QueryProjectRatingsArgs = {
  orderBy?: Array<ProjectRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectRatingWhereInput;
};


export type QueryProjectRatingsCountArgs = {
  where?: ProjectRatingWhereInput;
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


export type QuerySocialStatArgs = {
  where: SocialStatWhereUniqueInput;
};


export type QuerySocialStatsArgs = {
  orderBy?: Array<SocialStatOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SocialStatWhereInput;
};


export type QuerySocialStatsCountArgs = {
  where?: SocialStatWhereInput;
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


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SubscriptionWhereInput;
};


export type QuerySubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
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


export type QueryTransferArgs = {
  where: TransferWhereUniqueInput;
};


export type QueryTransfersArgs = {
  orderBy?: Array<TransferOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TransferWhereInput;
};


export type QueryTransfersCountArgs = {
  where?: TransferWhereInput;
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

export type SocialStat = {
  __typename?: 'SocialStat';
  dateAdded?: Maybe<Scalars['DateTime']>;
  discord?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  telegram?: Maybe<Scalars['Float']>;
  twitter?: Maybe<Scalars['Float']>;
};

export type SocialStatCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discord?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  telegram?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['Float']>;
};

export type SocialStatOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
};

export type SocialStatUpdateArgs = {
  data: SocialStatUpdateInput;
  where: SocialStatWhereUniqueInput;
};

export type SocialStatUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discord?: InputMaybe<Scalars['Float']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  telegram?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['Float']>;
};

export type SocialStatWhereInput = {
  AND?: InputMaybe<Array<SocialStatWhereInput>>;
  NOT?: InputMaybe<Array<SocialStatWhereInput>>;
  OR?: InputMaybe<Array<SocialStatWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discord?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  telegram?: InputMaybe<FloatNullableFilter>;
  twitter?: InputMaybe<FloatNullableFilter>;
};

export type SocialStatWhereUniqueInput = {
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
  mode?: InputMaybe<QueryMode>;
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
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  dateAdded?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Order>;
  product?: Maybe<Array<Product>>;
  productCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type SubscriptionProductArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type SubscriptionProductCountArgs = {
  where?: ProductWhereInput;
};

export type SubscriptionCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  product?: InputMaybe<ProductRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SubscriptionOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  dateFrom?: InputMaybe<OrderDirection>;
  dateTo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SubscriptionRelateToOneForCreateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
};

export type SubscriptionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionUpdateArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  product?: InputMaybe<ProductRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  dateFrom?: InputMaybe<DateTimeNullableFilter>;
  dateTo?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  order?: Maybe<Scalars['Int']>;
};

export type TokenCreateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  address?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<NetworkRelateToOneForCreateInput>;
  order?: InputMaybe<Scalars['Int']>;
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
  order?: InputMaybe<OrderDirection>;
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
  order?: InputMaybe<Scalars['Int']>;
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
  order?: InputMaybe<IntNullableFilter>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Transfer = {
  __typename?: 'Transfer';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  block?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fromAddress?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  toAddress?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransferCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fromAddress?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  toAddress?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransferManyRelationFilter = {
  every?: InputMaybe<TransferWhereInput>;
  none?: InputMaybe<TransferWhereInput>;
  some?: InputMaybe<TransferWhereInput>;
};

export type TransferOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  amount?: InputMaybe<OrderDirection>;
  block?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  fromAddress?: InputMaybe<OrderDirection>;
  hash?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  toAddress?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TransferRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TransferWhereUniqueInput>>;
  create?: InputMaybe<Array<TransferCreateInput>>;
};

export type TransferRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TransferWhereUniqueInput>>;
  create?: InputMaybe<Array<TransferCreateInput>>;
  disconnect?: InputMaybe<Array<TransferWhereUniqueInput>>;
  set?: InputMaybe<Array<TransferWhereUniqueInput>>;
};

export type TransferUpdateArgs = {
  data: TransferUpdateInput;
  where: TransferWhereUniqueInput;
};

export type TransferUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fromAddress?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  toAddress?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransferWhereInput = {
  AND?: InputMaybe<Array<TransferWhereInput>>;
  NOT?: InputMaybe<Array<TransferWhereInput>>;
  OR?: InputMaybe<Array<TransferWhereInput>>;
  address?: InputMaybe<StringFilter>;
  amount?: InputMaybe<FloatNullableFilter>;
  block?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  hash?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  toAddress?: InputMaybe<StringFilter>;
  type?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TransferWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  dateCreated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isNotChargeable?: Maybe<Scalars['Boolean']>;
  isSubscribedToEmail?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  marketingCampaigns?: Maybe<Array<MarketingCampaign>>;
  marketingCampaignsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  referralCode?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Subscription>;
  subscriptionStatus?: Maybe<SubscriptionStatus>;
  walletAddress?: Maybe<Scalars['String']>;
};


export type UserMarketingCampaignsArgs = {
  orderBy?: Array<MarketingCampaignOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MarketingCampaignWhereInput;
};


export type UserMarketingCampaignsCountArgs = {
  where?: MarketingCampaignWhereInput;
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


export type UserSubscriptionStatusArgs = {
  userId?: InputMaybe<Scalars['ID']>;
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
  firstName?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForCreateInput>;
  subscription?: InputMaybe<SubscriptionRelateToOneForCreateInput>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  dateCreated?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
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
  walletAddress?: InputMaybe<OrderDirection>;
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
  firstName?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForUpdateInput>;
  subscription?: InputMaybe<SubscriptionRelateToOneForUpdateInput>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  dateCreated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isNotChargeable?: InputMaybe<BooleanFilter>;
  isSubscribedToEmail?: InputMaybe<BooleanFilter>;
  isVerified?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  marketingCampaigns?: InputMaybe<MarketingCampaignManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  referralCode?: InputMaybe<StringFilter>;
  referrer?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleManyRelationFilter>;
  subscription?: InputMaybe<SubscriptionWhereInput>;
  walletAddress?: InputMaybe<StringFilter>;
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

export type SubscriptionStatus = {
  __typename?: 'subscriptionStatus';
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  isValid?: Maybe<Scalars['Boolean']>;
  products?: Maybe<Scalars['JSON']>;
};
