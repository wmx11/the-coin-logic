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

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserAuth>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserAuthRelateToOneForCreateInput>;
};

export type AccountManyRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByInput = {
  access_token?: InputMaybe<OrderDirection>;
  expires_at?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  id_token?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  providerAccountId?: InputMaybe<OrderDirection>;
  refresh_token?: InputMaybe<OrderDirection>;
  scope?: InputMaybe<OrderDirection>;
  session_state?: InputMaybe<OrderDirection>;
  token_type?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type AccountRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountUpdateArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserAuthRelateToOneForUpdateInput>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserAuthWhereInput>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
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
  cartItem?: Maybe<CartItem>;
  couponCode?: Maybe<Coupon>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type CartCreateInput = {
  cartItem?: InputMaybe<CartItemRelateToOneForCreateInput>;
  couponCode?: InputMaybe<CouponRelateToOneForCreateInput>;
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
  paymentPlan?: Maybe<PaymentPlan>;
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
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type CartItemRelateToOneForCreateInput = {
  connect?: InputMaybe<CartItemWhereUniqueInput>;
  create?: InputMaybe<CartItemCreateInput>;
};

export type CartItemRelateToOneForUpdateInput = {
  connect?: InputMaybe<CartItemWhereUniqueInput>;
  create?: InputMaybe<CartItemCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  cart?: InputMaybe<CartRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForUpdateInput>;
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
  paymentPlan?: InputMaybe<PaymentPlanWhereInput>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CartManyRelationFilter = {
  every?: InputMaybe<CartWhereInput>;
  none?: InputMaybe<CartWhereInput>;
  some?: InputMaybe<CartWhereInput>;
};

export type CartOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CartRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  create?: InputMaybe<Array<CartCreateInput>>;
  disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
  set?: InputMaybe<Array<CartWhereUniqueInput>>;
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
  cartItem?: InputMaybe<CartItemRelateToOneForUpdateInput>;
  couponCode?: InputMaybe<CouponRelateToOneForUpdateInput>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  cartItem?: InputMaybe<CartItemWhereInput>;
  couponCode?: InputMaybe<CouponWhereInput>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  likes?: Maybe<Array<User>>;
  likesCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  provider?: Maybe<Provider>;
  reports?: Maybe<Array<User>>;
  reportsCount?: Maybe<Scalars['Int']>;
  sentiment?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type CommentLikesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type CommentLikesCountArgs = {
  where?: UserWhereInput;
};


export type CommentReportsArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type CommentReportsCountArgs = {
  where?: UserWhereInput;
};

export type CommentCreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<UserRelateToManyForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  provider?: InputMaybe<ProviderRelateToOneForCreateInput>;
  reports?: InputMaybe<UserRelateToManyForCreateInput>;
  sentiment?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  sentiment?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<UserRelateToManyForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  provider?: InputMaybe<ProviderRelateToOneForUpdateInput>;
  reports?: InputMaybe<UserRelateToManyForUpdateInput>;
  sentiment?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  likes?: InputMaybe<UserManyRelationFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  provider?: InputMaybe<ProviderWhereInput>;
  reports?: InputMaybe<UserManyRelationFilter>;
  sentiment?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CommentWhereUniqueInput = {
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
  likes?: Maybe<Array<User>>;
  likesCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  richContent?: Maybe<Scalars['JSON']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']>;
};


export type ContentLikesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type ContentLikesCountArgs = {
  where?: UserWhereInput;
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
  likes?: InputMaybe<UserRelateToManyForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  richContent?: InputMaybe<Scalars['JSON']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ContentManyRelationFilter = {
  every?: InputMaybe<ContentWhereInput>;
  none?: InputMaybe<ContentWhereInput>;
  some?: InputMaybe<ContentWhereInput>;
};

export type ContentOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  views?: InputMaybe<OrderDirection>;
};

export type ContentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ContentWhereUniqueInput>>;
  create?: InputMaybe<Array<ContentCreateInput>>;
};

export type ContentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ContentWhereUniqueInput>>;
  create?: InputMaybe<Array<ContentCreateInput>>;
  disconnect?: InputMaybe<Array<ContentWhereUniqueInput>>;
  set?: InputMaybe<Array<ContentWhereUniqueInput>>;
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
  likes?: InputMaybe<UserRelateToManyForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  richContent?: InputMaybe<Scalars['JSON']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  views?: InputMaybe<Scalars['Int']>;
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
  likes?: InputMaybe<UserManyRelationFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<IntNullableFilter>;
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

export type Coupon = {
  __typename?: 'Coupon';
  acceptFromNetworks?: Maybe<Array<Network>>;
  acceptFromNetworksCount?: Maybe<Scalars['Int']>;
  acceptFromReferrers?: Maybe<Array<User>>;
  acceptFromReferrersCount?: Maybe<Scalars['Int']>;
  cart?: Maybe<Array<Cart>>;
  cartCount?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discountPercentage?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Order>>;
  orderCount?: Maybe<Scalars['Int']>;
  timesPerUser?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usedBy?: Maybe<Scalars['JSON']>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validTill?: Maybe<Scalars['DateTime']>;
};


export type CouponAcceptFromNetworksArgs = {
  orderBy?: Array<NetworkOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NetworkWhereInput;
};


export type CouponAcceptFromNetworksCountArgs = {
  where?: NetworkWhereInput;
};


export type CouponAcceptFromReferrersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type CouponAcceptFromReferrersCountArgs = {
  where?: UserWhereInput;
};


export type CouponCartArgs = {
  orderBy?: Array<CartOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CartWhereInput;
};


export type CouponCartCountArgs = {
  where?: CartWhereInput;
};


export type CouponOrderArgs = {
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: OrderWhereInput;
};


export type CouponOrderCountArgs = {
  where?: OrderWhereInput;
};

export type CouponCreateInput = {
  acceptFromNetworks?: InputMaybe<NetworkRelateToManyForCreateInput>;
  acceptFromReferrers?: InputMaybe<UserRelateToManyForCreateInput>;
  cart?: InputMaybe<CartRelateToManyForCreateInput>;
  code?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrderRelateToManyForCreateInput>;
  timesPerUser?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usedBy?: InputMaybe<Scalars['JSON']>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validTill?: InputMaybe<Scalars['DateTime']>;
};

export type CouponOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  discountPercentage?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  timesPerUser?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  validFrom?: InputMaybe<OrderDirection>;
  validTill?: InputMaybe<OrderDirection>;
};

export type CouponRelateToOneForCreateInput = {
  connect?: InputMaybe<CouponWhereUniqueInput>;
  create?: InputMaybe<CouponCreateInput>;
};

export type CouponRelateToOneForUpdateInput = {
  connect?: InputMaybe<CouponWhereUniqueInput>;
  create?: InputMaybe<CouponCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CouponUpdateArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type CouponUpdateInput = {
  acceptFromNetworks?: InputMaybe<NetworkRelateToManyForUpdateInput>;
  acceptFromReferrers?: InputMaybe<UserRelateToManyForUpdateInput>;
  cart?: InputMaybe<CartRelateToManyForUpdateInput>;
  code?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrderRelateToManyForUpdateInput>;
  timesPerUser?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usedBy?: InputMaybe<Scalars['JSON']>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validTill?: InputMaybe<Scalars['DateTime']>;
};

export type CouponWhereInput = {
  AND?: InputMaybe<Array<CouponWhereInput>>;
  NOT?: InputMaybe<Array<CouponWhereInput>>;
  OR?: InputMaybe<Array<CouponWhereInput>>;
  acceptFromNetworks?: InputMaybe<NetworkManyRelationFilter>;
  acceptFromReferrers?: InputMaybe<UserManyRelationFilter>;
  cart?: InputMaybe<CartManyRelationFilter>;
  code?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discountPercentage?: InputMaybe<IntNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderManyRelationFilter>;
  timesPerUser?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  validFrom?: InputMaybe<DateTimeNullableFilter>;
  validTill?: InputMaybe<DateTimeNullableFilter>;
};

export type CouponWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
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

export type DiscordAnnouncement = {
  __typename?: 'DiscordAnnouncement';
  channelId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  guildId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messageId?: Maybe<Scalars['String']>;
  messageUrl?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DiscordAnnouncementCreateInput = {
  channelId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  guildId?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  messageUrl?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordAnnouncementManyRelationFilter = {
  every?: InputMaybe<DiscordAnnouncementWhereInput>;
  none?: InputMaybe<DiscordAnnouncementWhereInput>;
  some?: InputMaybe<DiscordAnnouncementWhereInput>;
};

export type DiscordAnnouncementOrderByInput = {
  channelId?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  guildId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  messageId?: InputMaybe<OrderDirection>;
  messageUrl?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type DiscordAnnouncementRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DiscordAnnouncementWhereUniqueInput>>;
  create?: InputMaybe<Array<DiscordAnnouncementCreateInput>>;
};

export type DiscordAnnouncementRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DiscordAnnouncementWhereUniqueInput>>;
  create?: InputMaybe<Array<DiscordAnnouncementCreateInput>>;
  disconnect?: InputMaybe<Array<DiscordAnnouncementWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscordAnnouncementWhereUniqueInput>>;
};

export type DiscordAnnouncementUpdateArgs = {
  data: DiscordAnnouncementUpdateInput;
  where: DiscordAnnouncementWhereUniqueInput;
};

export type DiscordAnnouncementUpdateInput = {
  channelId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  guildId?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  messageUrl?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordAnnouncementWhereInput = {
  AND?: InputMaybe<Array<DiscordAnnouncementWhereInput>>;
  NOT?: InputMaybe<Array<DiscordAnnouncementWhereInput>>;
  OR?: InputMaybe<Array<DiscordAnnouncementWhereInput>>;
  channelId?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  guildId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  messageId?: InputMaybe<StringFilter>;
  messageUrl?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type DiscordAnnouncementWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type DiscordConfig = {
  __typename?: 'DiscordConfig';
  announcementsChannelId?: Maybe<Scalars['String']>;
  announcementsChannelName?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  generalChannelId?: Maybe<Scalars['String']>;
  generalChannelName?: Maybe<Scalars['String']>;
  guildId?: Maybe<Scalars['String']>;
  guildName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DiscordConfigCreateInput = {
  announcementsChannelId?: InputMaybe<Scalars['String']>;
  announcementsChannelName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  generalChannelId?: InputMaybe<Scalars['String']>;
  generalChannelName?: InputMaybe<Scalars['String']>;
  guildId?: InputMaybe<Scalars['String']>;
  guildName?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordConfigOrderByInput = {
  announcementsChannelId?: InputMaybe<OrderDirection>;
  announcementsChannelName?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  generalChannelId?: InputMaybe<OrderDirection>;
  generalChannelName?: InputMaybe<OrderDirection>;
  guildId?: InputMaybe<OrderDirection>;
  guildName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type DiscordConfigRelateToOneForCreateInput = {
  connect?: InputMaybe<DiscordConfigWhereUniqueInput>;
  create?: InputMaybe<DiscordConfigCreateInput>;
};

export type DiscordConfigRelateToOneForUpdateInput = {
  connect?: InputMaybe<DiscordConfigWhereUniqueInput>;
  create?: InputMaybe<DiscordConfigCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DiscordConfigUpdateArgs = {
  data: DiscordConfigUpdateInput;
  where: DiscordConfigWhereUniqueInput;
};

export type DiscordConfigUpdateInput = {
  announcementsChannelId?: InputMaybe<Scalars['String']>;
  announcementsChannelName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  generalChannelId?: InputMaybe<Scalars['String']>;
  generalChannelName?: InputMaybe<Scalars['String']>;
  guildId?: InputMaybe<Scalars['String']>;
  guildName?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DiscordConfigWhereInput = {
  AND?: InputMaybe<Array<DiscordConfigWhereInput>>;
  NOT?: InputMaybe<Array<DiscordConfigWhereInput>>;
  OR?: InputMaybe<Array<DiscordConfigWhereInput>>;
  announcementsChannelId?: InputMaybe<StringFilter>;
  announcementsChannelName?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  generalChannelId?: InputMaybe<StringFilter>;
  generalChannelName?: InputMaybe<StringFilter>;
  guildId?: InputMaybe<StringFilter>;
  guildName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type DiscordConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DiscordEvent = {
  __typename?: 'DiscordEvent';
  channelId?: Maybe<Scalars['String']>;
  channelName?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['String']>;
  guildId?: Maybe<Scalars['String']>;
  guildName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  inviteUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  scheduledEndTimestamp?: Maybe<Scalars['DateTime']>;
  scheduledStartTimestamp?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userCount?: Maybe<Scalars['Int']>;
};

export type DiscordEventCreateInput = {
  channelId?: InputMaybe<Scalars['String']>;
  channelName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['String']>;
  guildId?: InputMaybe<Scalars['String']>;
  guildName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  inviteUrl?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  scheduledEndTimestamp?: InputMaybe<Scalars['DateTime']>;
  scheduledStartTimestamp?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userCount?: InputMaybe<Scalars['Int']>;
};

export type DiscordEventManyRelationFilter = {
  every?: InputMaybe<DiscordEventWhereInput>;
  none?: InputMaybe<DiscordEventWhereInput>;
  some?: InputMaybe<DiscordEventWhereInput>;
};

export type DiscordEventOrderByInput = {
  channelId?: InputMaybe<OrderDirection>;
  channelName?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  eventId?: InputMaybe<OrderDirection>;
  guildId?: InputMaybe<OrderDirection>;
  guildName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  inviteUrl?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  scheduledEndTimestamp?: InputMaybe<OrderDirection>;
  scheduledStartTimestamp?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userCount?: InputMaybe<OrderDirection>;
};

export type DiscordEventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DiscordEventWhereUniqueInput>>;
  create?: InputMaybe<Array<DiscordEventCreateInput>>;
};

export type DiscordEventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DiscordEventWhereUniqueInput>>;
  create?: InputMaybe<Array<DiscordEventCreateInput>>;
  disconnect?: InputMaybe<Array<DiscordEventWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscordEventWhereUniqueInput>>;
};

export type DiscordEventUpdateArgs = {
  data: DiscordEventUpdateInput;
  where: DiscordEventWhereUniqueInput;
};

export type DiscordEventUpdateInput = {
  channelId?: InputMaybe<Scalars['String']>;
  channelName?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['String']>;
  guildId?: InputMaybe<Scalars['String']>;
  guildName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  inviteUrl?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  scheduledEndTimestamp?: InputMaybe<Scalars['DateTime']>;
  scheduledStartTimestamp?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userCount?: InputMaybe<Scalars['Int']>;
};

export type DiscordEventWhereInput = {
  AND?: InputMaybe<Array<DiscordEventWhereInput>>;
  NOT?: InputMaybe<Array<DiscordEventWhereInput>>;
  OR?: InputMaybe<Array<DiscordEventWhereInput>>;
  channelId?: InputMaybe<StringFilter>;
  channelName?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventId?: InputMaybe<StringFilter>;
  guildId?: InputMaybe<StringFilter>;
  guildName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  inviteUrl?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  scheduledEndTimestamp?: InputMaybe<DateTimeNullableFilter>;
  scheduledStartTimestamp?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userCount?: InputMaybe<IntNullableFilter>;
};

export type DiscordEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EmailList = {
  __typename?: 'EmailList';
  dateAdded?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailListCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EmailListOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EmailListUpdateArgs = {
  data: EmailListUpdateInput;
  where: EmailListWhereUniqueInput;
};

export type EmailListUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EmailListWhereInput = {
  AND?: InputMaybe<Array<EmailListWhereInput>>;
  NOT?: InputMaybe<Array<EmailListWhereInput>>;
  OR?: InputMaybe<Array<EmailListWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EmailListWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
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
  customExchangeAddress?: Maybe<Scalars['String']>;
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
  customExchangeAddress?: InputMaybe<Scalars['String']>;
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
  customExchangeAddress?: InputMaybe<OrderDirection>;
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
  customExchangeAddress?: InputMaybe<Scalars['String']>;
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
  customExchangeAddress?: InputMaybe<StringFilter>;
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
  annotation?: Maybe<Scalars['JSON']>;
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
  annotation?: InputMaybe<Scalars['JSON']>;
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
  annotation?: InputMaybe<Scalars['JSON']>;
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
  createAccount?: Maybe<Account>;
  createAccounts?: Maybe<Array<Maybe<Account>>>;
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
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createContent?: Maybe<Content>;
  createContentBlock?: Maybe<ContentBlock>;
  createContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  createContentType?: Maybe<ContentType>;
  createContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  createContents?: Maybe<Array<Maybe<Content>>>;
  createCoupon?: Maybe<Coupon>;
  createCoupons?: Maybe<Array<Maybe<Coupon>>>;
  createCustomTracker?: Maybe<CustomTracker>;
  createCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  createDiscordAnnouncement?: Maybe<DiscordAnnouncement>;
  createDiscordAnnouncements?: Maybe<Array<Maybe<DiscordAnnouncement>>>;
  createDiscordBot?: Maybe<DiscordBot>;
  createDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  createDiscordConfig?: Maybe<DiscordConfig>;
  createDiscordConfigs?: Maybe<Array<Maybe<DiscordConfig>>>;
  createDiscordEvent?: Maybe<DiscordEvent>;
  createDiscordEvents?: Maybe<Array<Maybe<DiscordEvent>>>;
  createEmailList?: Maybe<EmailList>;
  createEmailLists?: Maybe<Array<Maybe<EmailList>>>;
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
  createPaymentPlan?: Maybe<PaymentPlan>;
  createPaymentPlans?: Maybe<Array<Maybe<PaymentPlan>>>;
  createProduct?: Maybe<Product>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createProject?: Maybe<Project>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createProvider?: Maybe<Provider>;
  createProviders?: Maybe<Array<Maybe<Provider>>>;
  createQuiz?: Maybe<Quiz>;
  createQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createServiceToken?: Maybe<ServiceToken>;
  createServiceTokenUsage?: Maybe<ServiceTokenUsage>;
  createServiceTokenUsages?: Maybe<Array<Maybe<ServiceTokenUsage>>>;
  createServiceTokens?: Maybe<Array<Maybe<ServiceToken>>>;
  createSession?: Maybe<Session>;
  createSessions?: Maybe<Array<Maybe<Session>>>;
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
  createTranscription?: Maybe<Transcription>;
  createTranscriptions?: Maybe<Array<Maybe<Transcription>>>;
  createTransfer?: Maybe<Transfer>;
  createTransfers?: Maybe<Array<Maybe<Transfer>>>;
  createTransparencyRating?: Maybe<TransparencyRating>;
  createTransparencyRatings?: Maybe<Array<Maybe<TransparencyRating>>>;
  createUser?: Maybe<User>;
  createUserAuth?: Maybe<UserAuth>;
  createUserAuths?: Maybe<Array<Maybe<UserAuth>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createVerificationToken?: Maybe<VerificationToken>;
  createVerificationTokens?: Maybe<Array<Maybe<VerificationToken>>>;
  createVote?: Maybe<Vote>;
  createVotes?: Maybe<Array<Maybe<Vote>>>;
  deleteAccount?: Maybe<Account>;
  deleteAccounts?: Maybe<Array<Maybe<Account>>>;
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
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deleteContent?: Maybe<Content>;
  deleteContentBlock?: Maybe<ContentBlock>;
  deleteContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  deleteContentType?: Maybe<ContentType>;
  deleteContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  deleteContents?: Maybe<Array<Maybe<Content>>>;
  deleteCoupon?: Maybe<Coupon>;
  deleteCoupons?: Maybe<Array<Maybe<Coupon>>>;
  deleteCustomTracker?: Maybe<CustomTracker>;
  deleteCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  deleteDiscordAnnouncement?: Maybe<DiscordAnnouncement>;
  deleteDiscordAnnouncements?: Maybe<Array<Maybe<DiscordAnnouncement>>>;
  deleteDiscordBot?: Maybe<DiscordBot>;
  deleteDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  deleteDiscordConfig?: Maybe<DiscordConfig>;
  deleteDiscordConfigs?: Maybe<Array<Maybe<DiscordConfig>>>;
  deleteDiscordEvent?: Maybe<DiscordEvent>;
  deleteDiscordEvents?: Maybe<Array<Maybe<DiscordEvent>>>;
  deleteEmailList?: Maybe<EmailList>;
  deleteEmailLists?: Maybe<Array<Maybe<EmailList>>>;
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
  deletePaymentPlan?: Maybe<PaymentPlan>;
  deletePaymentPlans?: Maybe<Array<Maybe<PaymentPlan>>>;
  deleteProduct?: Maybe<Product>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteProject?: Maybe<Project>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteProvider?: Maybe<Provider>;
  deleteProviders?: Maybe<Array<Maybe<Provider>>>;
  deleteQuiz?: Maybe<Quiz>;
  deleteQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteServiceToken?: Maybe<ServiceToken>;
  deleteServiceTokenUsage?: Maybe<ServiceTokenUsage>;
  deleteServiceTokenUsages?: Maybe<Array<Maybe<ServiceTokenUsage>>>;
  deleteServiceTokens?: Maybe<Array<Maybe<ServiceToken>>>;
  deleteSession?: Maybe<Session>;
  deleteSessions?: Maybe<Array<Maybe<Session>>>;
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
  deleteTranscription?: Maybe<Transcription>;
  deleteTranscriptions?: Maybe<Array<Maybe<Transcription>>>;
  deleteTransfer?: Maybe<Transfer>;
  deleteTransfers?: Maybe<Array<Maybe<Transfer>>>;
  deleteTransparencyRating?: Maybe<TransparencyRating>;
  deleteTransparencyRatings?: Maybe<Array<Maybe<TransparencyRating>>>;
  deleteUser?: Maybe<User>;
  deleteUserAuth?: Maybe<UserAuth>;
  deleteUserAuths?: Maybe<Array<Maybe<UserAuth>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteVerificationToken?: Maybe<VerificationToken>;
  deleteVerificationTokens?: Maybe<Array<Maybe<VerificationToken>>>;
  deleteVote?: Maybe<Vote>;
  deleteVotes?: Maybe<Array<Maybe<Vote>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateAccount?: Maybe<Account>;
  updateAccounts?: Maybe<Array<Maybe<Account>>>;
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
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updateContent?: Maybe<Content>;
  updateContentBlock?: Maybe<ContentBlock>;
  updateContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  updateContentType?: Maybe<ContentType>;
  updateContentTypes?: Maybe<Array<Maybe<ContentType>>>;
  updateContents?: Maybe<Array<Maybe<Content>>>;
  updateCoupon?: Maybe<Coupon>;
  updateCoupons?: Maybe<Array<Maybe<Coupon>>>;
  updateCustomTracker?: Maybe<CustomTracker>;
  updateCustomTrackers?: Maybe<Array<Maybe<CustomTracker>>>;
  updateDiscordAnnouncement?: Maybe<DiscordAnnouncement>;
  updateDiscordAnnouncements?: Maybe<Array<Maybe<DiscordAnnouncement>>>;
  updateDiscordBot?: Maybe<DiscordBot>;
  updateDiscordBots?: Maybe<Array<Maybe<DiscordBot>>>;
  updateDiscordConfig?: Maybe<DiscordConfig>;
  updateDiscordConfigs?: Maybe<Array<Maybe<DiscordConfig>>>;
  updateDiscordEvent?: Maybe<DiscordEvent>;
  updateDiscordEvents?: Maybe<Array<Maybe<DiscordEvent>>>;
  updateEmailList?: Maybe<EmailList>;
  updateEmailLists?: Maybe<Array<Maybe<EmailList>>>;
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
  updatePaymentPlan?: Maybe<PaymentPlan>;
  updatePaymentPlans?: Maybe<Array<Maybe<PaymentPlan>>>;
  updateProduct?: Maybe<Product>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateProject?: Maybe<Project>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateProvider?: Maybe<Provider>;
  updateProviders?: Maybe<Array<Maybe<Provider>>>;
  updateQuiz?: Maybe<Quiz>;
  updateQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateServiceToken?: Maybe<ServiceToken>;
  updateServiceTokenUsage?: Maybe<ServiceTokenUsage>;
  updateServiceTokenUsages?: Maybe<Array<Maybe<ServiceTokenUsage>>>;
  updateServiceTokens?: Maybe<Array<Maybe<ServiceToken>>>;
  updateSession?: Maybe<Session>;
  updateSessions?: Maybe<Array<Maybe<Session>>>;
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
  updateTranscription?: Maybe<Transcription>;
  updateTranscriptions?: Maybe<Array<Maybe<Transcription>>>;
  updateTransfer?: Maybe<Transfer>;
  updateTransfers?: Maybe<Array<Maybe<Transfer>>>;
  updateTransparencyRating?: Maybe<TransparencyRating>;
  updateTransparencyRatings?: Maybe<Array<Maybe<TransparencyRating>>>;
  updateUser?: Maybe<User>;
  updateUserAuth?: Maybe<UserAuth>;
  updateUserAuths?: Maybe<Array<Maybe<UserAuth>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateVerificationToken?: Maybe<VerificationToken>;
  updateVerificationTokens?: Maybe<Array<Maybe<VerificationToken>>>;
  updateVote?: Maybe<Vote>;
  updateVotes?: Maybe<Array<Maybe<Vote>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateAccountsArgs = {
  data: Array<AccountCreateInput>;
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


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
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


export type MutationCreateCouponArgs = {
  data: CouponCreateInput;
};


export type MutationCreateCouponsArgs = {
  data: Array<CouponCreateInput>;
};


export type MutationCreateCustomTrackerArgs = {
  data: CustomTrackerCreateInput;
};


export type MutationCreateCustomTrackersArgs = {
  data: Array<CustomTrackerCreateInput>;
};


export type MutationCreateDiscordAnnouncementArgs = {
  data: DiscordAnnouncementCreateInput;
};


export type MutationCreateDiscordAnnouncementsArgs = {
  data: Array<DiscordAnnouncementCreateInput>;
};


export type MutationCreateDiscordBotArgs = {
  data: DiscordBotCreateInput;
};


export type MutationCreateDiscordBotsArgs = {
  data: Array<DiscordBotCreateInput>;
};


export type MutationCreateDiscordConfigArgs = {
  data: DiscordConfigCreateInput;
};


export type MutationCreateDiscordConfigsArgs = {
  data: Array<DiscordConfigCreateInput>;
};


export type MutationCreateDiscordEventArgs = {
  data: DiscordEventCreateInput;
};


export type MutationCreateDiscordEventsArgs = {
  data: Array<DiscordEventCreateInput>;
};


export type MutationCreateEmailListArgs = {
  data: EmailListCreateInput;
};


export type MutationCreateEmailListsArgs = {
  data: Array<EmailListCreateInput>;
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


export type MutationCreatePaymentPlanArgs = {
  data: PaymentPlanCreateInput;
};


export type MutationCreatePaymentPlansArgs = {
  data: Array<PaymentPlanCreateInput>;
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


export type MutationCreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationCreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationCreateProvidersArgs = {
  data: Array<ProviderCreateInput>;
};


export type MutationCreateQuizArgs = {
  data: QuizCreateInput;
};


export type MutationCreateQuizzesArgs = {
  data: Array<QuizCreateInput>;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};


export type MutationCreateServiceTokenArgs = {
  data: ServiceTokenCreateInput;
};


export type MutationCreateServiceTokenUsageArgs = {
  data: ServiceTokenUsageCreateInput;
};


export type MutationCreateServiceTokenUsagesArgs = {
  data: Array<ServiceTokenUsageCreateInput>;
};


export type MutationCreateServiceTokensArgs = {
  data: Array<ServiceTokenCreateInput>;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: Array<SessionCreateInput>;
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


export type MutationCreateTranscriptionArgs = {
  data: TranscriptionCreateInput;
};


export type MutationCreateTranscriptionsArgs = {
  data: Array<TranscriptionCreateInput>;
};


export type MutationCreateTransferArgs = {
  data: TransferCreateInput;
};


export type MutationCreateTransfersArgs = {
  data: Array<TransferCreateInput>;
};


export type MutationCreateTransparencyRatingArgs = {
  data: TransparencyRatingCreateInput;
};


export type MutationCreateTransparencyRatingsArgs = {
  data: Array<TransparencyRatingCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserAuthArgs = {
  data: UserAuthCreateInput;
};


export type MutationCreateUserAuthsArgs = {
  data: Array<UserAuthCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationCreateVerificationTokensArgs = {
  data: Array<VerificationTokenCreateInput>;
};


export type MutationCreateVoteArgs = {
  data: VoteCreateInput;
};


export type MutationCreateVotesArgs = {
  data: Array<VoteCreateInput>;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteAccountsArgs = {
  where: Array<AccountWhereUniqueInput>;
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


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
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


export type MutationDeleteCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type MutationDeleteCouponsArgs = {
  where: Array<CouponWhereUniqueInput>;
};


export type MutationDeleteCustomTrackerArgs = {
  where: CustomTrackerWhereUniqueInput;
};


export type MutationDeleteCustomTrackersArgs = {
  where: Array<CustomTrackerWhereUniqueInput>;
};


export type MutationDeleteDiscordAnnouncementArgs = {
  where: DiscordAnnouncementWhereUniqueInput;
};


export type MutationDeleteDiscordAnnouncementsArgs = {
  where: Array<DiscordAnnouncementWhereUniqueInput>;
};


export type MutationDeleteDiscordBotArgs = {
  where: DiscordBotWhereUniqueInput;
};


export type MutationDeleteDiscordBotsArgs = {
  where: Array<DiscordBotWhereUniqueInput>;
};


export type MutationDeleteDiscordConfigArgs = {
  where: DiscordConfigWhereUniqueInput;
};


export type MutationDeleteDiscordConfigsArgs = {
  where: Array<DiscordConfigWhereUniqueInput>;
};


export type MutationDeleteDiscordEventArgs = {
  where: DiscordEventWhereUniqueInput;
};


export type MutationDeleteDiscordEventsArgs = {
  where: Array<DiscordEventWhereUniqueInput>;
};


export type MutationDeleteEmailListArgs = {
  where: EmailListWhereUniqueInput;
};


export type MutationDeleteEmailListsArgs = {
  where: Array<EmailListWhereUniqueInput>;
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


export type MutationDeletePaymentPlanArgs = {
  where: PaymentPlanWhereUniqueInput;
};


export type MutationDeletePaymentPlansArgs = {
  where: Array<PaymentPlanWhereUniqueInput>;
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


export type MutationDeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationDeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationDeleteProvidersArgs = {
  where: Array<ProviderWhereUniqueInput>;
};


export type MutationDeleteQuizArgs = {
  where: QuizWhereUniqueInput;
};


export type MutationDeleteQuizzesArgs = {
  where: Array<QuizWhereUniqueInput>;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};


export type MutationDeleteServiceTokenArgs = {
  where: ServiceTokenWhereUniqueInput;
};


export type MutationDeleteServiceTokenUsageArgs = {
  where: ServiceTokenUsageWhereUniqueInput;
};


export type MutationDeleteServiceTokenUsagesArgs = {
  where: Array<ServiceTokenUsageWhereUniqueInput>;
};


export type MutationDeleteServiceTokensArgs = {
  where: Array<ServiceTokenWhereUniqueInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: Array<SessionWhereUniqueInput>;
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


export type MutationDeleteTranscriptionArgs = {
  where: TranscriptionWhereUniqueInput;
};


export type MutationDeleteTranscriptionsArgs = {
  where: Array<TranscriptionWhereUniqueInput>;
};


export type MutationDeleteTransferArgs = {
  where: TransferWhereUniqueInput;
};


export type MutationDeleteTransfersArgs = {
  where: Array<TransferWhereUniqueInput>;
};


export type MutationDeleteTransparencyRatingArgs = {
  where: TransparencyRatingWhereUniqueInput;
};


export type MutationDeleteTransparencyRatingsArgs = {
  where: Array<TransparencyRatingWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserAuthArgs = {
  where: UserAuthWhereUniqueInput;
};


export type MutationDeleteUserAuthsArgs = {
  where: Array<UserAuthWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationDeleteVerificationTokensArgs = {
  where: Array<VerificationTokenWhereUniqueInput>;
};


export type MutationDeleteVoteArgs = {
  where: VoteWhereUniqueInput;
};


export type MutationDeleteVotesArgs = {
  where: Array<VoteWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAccountsArgs = {
  data: Array<AccountUpdateArgs>;
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


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
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


export type MutationUpdateCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};


export type MutationUpdateCouponsArgs = {
  data: Array<CouponUpdateArgs>;
};


export type MutationUpdateCustomTrackerArgs = {
  data: CustomTrackerUpdateInput;
  where: CustomTrackerWhereUniqueInput;
};


export type MutationUpdateCustomTrackersArgs = {
  data: Array<CustomTrackerUpdateArgs>;
};


export type MutationUpdateDiscordAnnouncementArgs = {
  data: DiscordAnnouncementUpdateInput;
  where: DiscordAnnouncementWhereUniqueInput;
};


export type MutationUpdateDiscordAnnouncementsArgs = {
  data: Array<DiscordAnnouncementUpdateArgs>;
};


export type MutationUpdateDiscordBotArgs = {
  data: DiscordBotUpdateInput;
  where: DiscordBotWhereUniqueInput;
};


export type MutationUpdateDiscordBotsArgs = {
  data: Array<DiscordBotUpdateArgs>;
};


export type MutationUpdateDiscordConfigArgs = {
  data: DiscordConfigUpdateInput;
  where: DiscordConfigWhereUniqueInput;
};


export type MutationUpdateDiscordConfigsArgs = {
  data: Array<DiscordConfigUpdateArgs>;
};


export type MutationUpdateDiscordEventArgs = {
  data: DiscordEventUpdateInput;
  where: DiscordEventWhereUniqueInput;
};


export type MutationUpdateDiscordEventsArgs = {
  data: Array<DiscordEventUpdateArgs>;
};


export type MutationUpdateEmailListArgs = {
  data: EmailListUpdateInput;
  where: EmailListWhereUniqueInput;
};


export type MutationUpdateEmailListsArgs = {
  data: Array<EmailListUpdateArgs>;
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


export type MutationUpdatePaymentPlanArgs = {
  data: PaymentPlanUpdateInput;
  where: PaymentPlanWhereUniqueInput;
};


export type MutationUpdatePaymentPlansArgs = {
  data: Array<PaymentPlanUpdateArgs>;
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


export type MutationUpdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationUpdateProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationUpdateProvidersArgs = {
  data: Array<ProviderUpdateArgs>;
};


export type MutationUpdateQuizArgs = {
  data: QuizUpdateInput;
  where: QuizWhereUniqueInput;
};


export type MutationUpdateQuizzesArgs = {
  data: Array<QuizUpdateArgs>;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};


export type MutationUpdateServiceTokenArgs = {
  data: ServiceTokenUpdateInput;
  where: ServiceTokenWhereUniqueInput;
};


export type MutationUpdateServiceTokenUsageArgs = {
  data: ServiceTokenUsageUpdateInput;
  where: ServiceTokenUsageWhereUniqueInput;
};


export type MutationUpdateServiceTokenUsagesArgs = {
  data: Array<ServiceTokenUsageUpdateArgs>;
};


export type MutationUpdateServiceTokensArgs = {
  data: Array<ServiceTokenUpdateArgs>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: Array<SessionUpdateArgs>;
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


export type MutationUpdateTranscriptionArgs = {
  data: TranscriptionUpdateInput;
  where: TranscriptionWhereUniqueInput;
};


export type MutationUpdateTranscriptionsArgs = {
  data: Array<TranscriptionUpdateArgs>;
};


export type MutationUpdateTransferArgs = {
  data: TransferUpdateInput;
  where: TransferWhereUniqueInput;
};


export type MutationUpdateTransfersArgs = {
  data: Array<TransferUpdateArgs>;
};


export type MutationUpdateTransparencyRatingArgs = {
  data: TransparencyRatingUpdateInput;
  where: TransparencyRatingWhereUniqueInput;
};


export type MutationUpdateTransparencyRatingsArgs = {
  data: Array<TransparencyRatingUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserAuthArgs = {
  data: UserAuthUpdateInput;
  where: UserAuthWhereUniqueInput;
};


export type MutationUpdateUserAuthsArgs = {
  data: Array<UserAuthUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpdateVerificationTokensArgs = {
  data: Array<VerificationTokenUpdateArgs>;
};


export type MutationUpdateVoteArgs = {
  data: VoteUpdateInput;
  where: VoteWhereUniqueInput;
};


export type MutationUpdateVotesArgs = {
  data: Array<VoteUpdateArgs>;
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

export type NetworkManyRelationFilter = {
  every?: InputMaybe<NetworkWhereInput>;
  none?: InputMaybe<NetworkWhereInput>;
  some?: InputMaybe<NetworkWhereInput>;
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

export type NetworkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  create?: InputMaybe<Array<NetworkCreateInput>>;
};

export type NetworkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  create?: InputMaybe<Array<NetworkCreateInput>>;
  disconnect?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  set?: InputMaybe<Array<NetworkWhereUniqueInput>>;
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
  couponCode?: Maybe<Coupon>;
  currency?: Maybe<Scalars['String']>;
  currencyPriceEur?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  durationInMonths?: Maybe<Scalars['Float']>;
  grandTotal?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  orderItem?: Maybe<OrderItem>;
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

export type OrderCreateInput = {
  couponCode?: InputMaybe<CouponRelateToOneForCreateInput>;
  currency?: InputMaybe<Scalars['String']>;
  currencyPriceEur?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  durationInMonths?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  orderItem?: InputMaybe<OrderItemRelateToOneForCreateInput>;
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
  paymentPlan?: Maybe<PaymentPlan>;
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
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Float']>;
  tax?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type OrderItemRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  create?: InputMaybe<OrderItemCreateInput>;
};

export type OrderItemRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  create?: InputMaybe<OrderItemCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForUpdateInput>;
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
  paymentPlan?: InputMaybe<PaymentPlanWhereInput>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type OrderManyRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
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

export type OrderRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
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
  couponCode?: InputMaybe<CouponRelateToOneForUpdateInput>;
  currency?: InputMaybe<Scalars['String']>;
  currencyPriceEur?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  durationInMonths?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  orderItem?: InputMaybe<OrderItemRelateToOneForUpdateInput>;
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
  couponCode?: InputMaybe<CouponWhereInput>;
  currency?: InputMaybe<StringFilter>;
  currencyPriceEur?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  durationInMonths?: InputMaybe<FloatNullableFilter>;
  grandTotal?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  orderItem?: InputMaybe<OrderItemWhereInput>;
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

export type PaymentPlan = {
  __typename?: 'PaymentPlan';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentPlanCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  tooltip?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PaymentPlanOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  tooltip?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PaymentPlanRelateToOneForCreateInput = {
  connect?: InputMaybe<PaymentPlanWhereUniqueInput>;
  create?: InputMaybe<PaymentPlanCreateInput>;
};

export type PaymentPlanRelateToOneForUpdateInput = {
  connect?: InputMaybe<PaymentPlanWhereUniqueInput>;
  create?: InputMaybe<PaymentPlanCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PaymentPlanUpdateArgs = {
  data: PaymentPlanUpdateInput;
  where: PaymentPlanWhereUniqueInput;
};

export type PaymentPlanUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  tooltip?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PaymentPlanWhereInput = {
  AND?: InputMaybe<Array<PaymentPlanWhereInput>>;
  NOT?: InputMaybe<Array<PaymentPlanWhereInput>>;
  OR?: InputMaybe<Array<PaymentPlanWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  tooltip?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PaymentPlanWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  announcements?: Maybe<Array<DiscordAnnouncement>>;
  announcementsCount?: Maybe<Scalars['Int']>;
  apy?: Maybe<Scalars['Float']>;
  auditBy?: Maybe<Array<Audit>>;
  auditByCount?: Maybe<Scalars['Int']>;
  auditLink?: Maybe<Scalars['String']>;
  burnAddress?: Maybe<Scalars['String']>;
  buyTax?: Maybe<Scalars['Float']>;
  calendar?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Content>>;
  contentCount?: Maybe<Scalars['Int']>;
  contractAddress?: Maybe<Scalars['String']>;
  customTrackers?: Maybe<Array<CustomTracker>>;
  customTrackersCount?: Maybe<Scalars['Int']>;
  customVetting?: Maybe<Scalars['String']>;
  dailyApy?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  discordConfig?: Maybe<DiscordConfig>;
  discordServerId?: Maybe<Scalars['String']>;
  displayBlogPosts?: Maybe<Scalars['Boolean']>;
  displayCommunityComments?: Maybe<Scalars['Boolean']>;
  displayCommunityVotes?: Maybe<Scalars['Boolean']>;
  displayTransparencyScore?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  events?: Maybe<Array<DiscordEvent>>;
  eventsCount?: Maybe<Scalars['Int']>;
  exhangeAddress?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialized?: Maybe<Scalars['Boolean']>;
  isAwaitingPayment?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  isNft?: Maybe<Scalars['Boolean']>;
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
  paymentPlan?: Maybe<PaymentPlan>;
  periodicWalletUpdates?: Maybe<Scalars['Boolean']>;
  rebasePeriod?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  relatedProjects?: Maybe<Array<Project>>;
  relatedProjectsCount?: Maybe<Scalars['Int']>;
  sellTax?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  tclRating?: Maybe<Scalars['Int']>;
  telegram?: Maybe<Scalars['String']>;
  trackData?: Maybe<Scalars['Boolean']>;
  trackHolders?: Maybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: Maybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: Maybe<Scalars['Float']>;
  trackMarketCap?: Maybe<Scalars['Boolean']>;
  trackPrice?: Maybe<Scalars['Boolean']>;
  trackSocials?: Maybe<Scalars['Boolean']>;
  transparencyHighlights?: Maybe<Scalars['JSON']>;
  transparencyRatings?: Maybe<Array<TransparencyRating>>;
  transparencyRatingsCount?: Maybe<Scalars['Int']>;
  transparencyScore?: Maybe<Scalars['Int']>;
  twitter?: Maybe<Scalars['String']>;
  useDexScreener?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Array<User>>;
  userCount?: Maybe<Scalars['Int']>;
  votes?: Maybe<Array<Vote>>;
  votesCount?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  whitepaper?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


export type ProjectAnnouncementsArgs = {
  orderBy?: Array<DiscordAnnouncementOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordAnnouncementWhereInput;
};


export type ProjectAnnouncementsCountArgs = {
  where?: DiscordAnnouncementWhereInput;
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


export type ProjectCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type ProjectCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type ProjectContentArgs = {
  orderBy?: Array<ContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContentWhereInput;
};


export type ProjectContentCountArgs = {
  where?: ContentWhereInput;
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


export type ProjectEventsArgs = {
  orderBy?: Array<DiscordEventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordEventWhereInput;
};


export type ProjectEventsCountArgs = {
  where?: DiscordEventWhereInput;
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


export type ProjectRelatedProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type ProjectRelatedProjectsCountArgs = {
  where?: ProjectWhereInput;
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


export type ProjectTransparencyRatingsArgs = {
  orderBy?: Array<TransparencyRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TransparencyRatingWhereInput;
};


export type ProjectTransparencyRatingsCountArgs = {
  where?: TransparencyRatingWhereInput;
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


export type ProjectVotesArgs = {
  orderBy?: Array<VoteOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VoteWhereInput;
};


export type ProjectVotesCountArgs = {
  where?: VoteWhereInput;
};

export type ProjectCreateInput = {
  ABI?: InputMaybe<Scalars['JSON']>;
  announcements?: InputMaybe<DiscordAnnouncementRelateToManyForCreateInput>;
  apy?: InputMaybe<Scalars['Float']>;
  auditBy?: InputMaybe<AuditRelateToManyForCreateInput>;
  auditLink?: InputMaybe<Scalars['String']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  calendar?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  content?: InputMaybe<ContentRelateToManyForCreateInput>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customTrackers?: InputMaybe<CustomTrackerRelateToManyForCreateInput>;
  customVetting?: InputMaybe<Scalars['String']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  discordConfig?: InputMaybe<DiscordConfigRelateToOneForCreateInput>;
  discordServerId?: InputMaybe<Scalars['String']>;
  displayBlogPosts?: InputMaybe<Scalars['Boolean']>;
  displayCommunityComments?: InputMaybe<Scalars['Boolean']>;
  displayCommunityVotes?: InputMaybe<Scalars['Boolean']>;
  displayTransparencyScore?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  events?: InputMaybe<DiscordEventRelateToManyForCreateInput>;
  exhangeAddress?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isAwaitingPayment?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isNft?: InputMaybe<Scalars['Boolean']>;
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
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForCreateInput>;
  periodicWalletUpdates?: InputMaybe<Scalars['Boolean']>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  relatedProjects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  tclRating?: InputMaybe<Scalars['Int']>;
  telegram?: InputMaybe<Scalars['String']>;
  trackData?: InputMaybe<Scalars['Boolean']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: InputMaybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  trackMarketCap?: InputMaybe<Scalars['Boolean']>;
  trackPrice?: InputMaybe<Scalars['Boolean']>;
  trackSocials?: InputMaybe<Scalars['Boolean']>;
  transparencyHighlights?: InputMaybe<Scalars['JSON']>;
  transparencyRatings?: InputMaybe<TransparencyRatingRelateToManyForCreateInput>;
  transparencyScore?: InputMaybe<Scalars['Int']>;
  twitter?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToManyForCreateInput>;
  votes?: InputMaybe<VoteRelateToManyForCreateInput>;
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
  displayBlogPosts?: InputMaybe<OrderDirection>;
  displayCommunityComments?: InputMaybe<OrderDirection>;
  displayCommunityVotes?: InputMaybe<OrderDirection>;
  displayTransparencyScore?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  exhangeAddress?: InputMaybe<OrderDirection>;
  github?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  initialized?: InputMaybe<OrderDirection>;
  isAwaitingPayment?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  isNft?: InputMaybe<OrderDirection>;
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
  tclRating?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  trackData?: InputMaybe<OrderDirection>;
  trackHolders?: InputMaybe<OrderDirection>;
  trackHoldersFromDollarAmount?: InputMaybe<OrderDirection>;
  trackHoldersFromTokenAmount?: InputMaybe<OrderDirection>;
  trackMarketCap?: InputMaybe<OrderDirection>;
  trackPrice?: InputMaybe<OrderDirection>;
  trackSocials?: InputMaybe<OrderDirection>;
  transparencyScore?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  useDexScreener?: InputMaybe<OrderDirection>;
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
  announcements?: InputMaybe<DiscordAnnouncementRelateToManyForUpdateInput>;
  apy?: InputMaybe<Scalars['Float']>;
  auditBy?: InputMaybe<AuditRelateToManyForUpdateInput>;
  auditLink?: InputMaybe<Scalars['String']>;
  burnAddress?: InputMaybe<Scalars['String']>;
  buyTax?: InputMaybe<Scalars['Float']>;
  calendar?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  content?: InputMaybe<ContentRelateToManyForUpdateInput>;
  contractAddress?: InputMaybe<Scalars['String']>;
  customTrackers?: InputMaybe<CustomTrackerRelateToManyForUpdateInput>;
  customVetting?: InputMaybe<Scalars['String']>;
  dailyApy?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  discordConfig?: InputMaybe<DiscordConfigRelateToOneForUpdateInput>;
  discordServerId?: InputMaybe<Scalars['String']>;
  displayBlogPosts?: InputMaybe<Scalars['Boolean']>;
  displayCommunityComments?: InputMaybe<Scalars['Boolean']>;
  displayCommunityVotes?: InputMaybe<Scalars['Boolean']>;
  displayTransparencyScore?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  events?: InputMaybe<DiscordEventRelateToManyForUpdateInput>;
  exhangeAddress?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  initialized?: InputMaybe<Scalars['Boolean']>;
  isAwaitingPayment?: InputMaybe<Scalars['Boolean']>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isNft?: InputMaybe<Scalars['Boolean']>;
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
  paymentPlan?: InputMaybe<PaymentPlanRelateToOneForUpdateInput>;
  periodicWalletUpdates?: InputMaybe<Scalars['Boolean']>;
  rebasePeriod?: InputMaybe<Scalars['String']>;
  reddit?: InputMaybe<Scalars['String']>;
  relatedProjects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  sellTax?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  tclRating?: InputMaybe<Scalars['Int']>;
  telegram?: InputMaybe<Scalars['String']>;
  trackData?: InputMaybe<Scalars['Boolean']>;
  trackHolders?: InputMaybe<Scalars['Boolean']>;
  trackHoldersFromDollarAmount?: InputMaybe<Scalars['Float']>;
  trackHoldersFromTokenAmount?: InputMaybe<Scalars['Float']>;
  trackMarketCap?: InputMaybe<Scalars['Boolean']>;
  trackPrice?: InputMaybe<Scalars['Boolean']>;
  trackSocials?: InputMaybe<Scalars['Boolean']>;
  transparencyHighlights?: InputMaybe<Scalars['JSON']>;
  transparencyRatings?: InputMaybe<TransparencyRatingRelateToManyForUpdateInput>;
  transparencyScore?: InputMaybe<Scalars['Int']>;
  twitter?: InputMaybe<Scalars['String']>;
  useDexScreener?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserRelateToManyForUpdateInput>;
  votes?: InputMaybe<VoteRelateToManyForUpdateInput>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  announcements?: InputMaybe<DiscordAnnouncementManyRelationFilter>;
  apy?: InputMaybe<FloatNullableFilter>;
  auditBy?: InputMaybe<AuditManyRelationFilter>;
  auditLink?: InputMaybe<StringFilter>;
  burnAddress?: InputMaybe<StringFilter>;
  buyTax?: InputMaybe<FloatNullableFilter>;
  calendar?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  content?: InputMaybe<ContentManyRelationFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  customTrackers?: InputMaybe<CustomTrackerManyRelationFilter>;
  customVetting?: InputMaybe<StringFilter>;
  dailyApy?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  discord?: InputMaybe<StringFilter>;
  discordConfig?: InputMaybe<DiscordConfigWhereInput>;
  discordServerId?: InputMaybe<StringFilter>;
  displayBlogPosts?: InputMaybe<BooleanFilter>;
  displayCommunityComments?: InputMaybe<BooleanFilter>;
  displayCommunityVotes?: InputMaybe<BooleanFilter>;
  displayTransparencyScore?: InputMaybe<BooleanFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  events?: InputMaybe<DiscordEventManyRelationFilter>;
  exhangeAddress?: InputMaybe<StringFilter>;
  github?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  initialized?: InputMaybe<BooleanFilter>;
  isAwaitingPayment?: InputMaybe<BooleanFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  isNft?: InputMaybe<BooleanFilter>;
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
  paymentPlan?: InputMaybe<PaymentPlanWhereInput>;
  periodicWalletUpdates?: InputMaybe<BooleanFilter>;
  rebasePeriod?: InputMaybe<StringFilter>;
  reddit?: InputMaybe<StringFilter>;
  relatedProjects?: InputMaybe<ProjectManyRelationFilter>;
  sellTax?: InputMaybe<FloatNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  tclRating?: InputMaybe<IntNullableFilter>;
  telegram?: InputMaybe<StringFilter>;
  trackData?: InputMaybe<BooleanFilter>;
  trackHolders?: InputMaybe<BooleanFilter>;
  trackHoldersFromDollarAmount?: InputMaybe<FloatNullableFilter>;
  trackHoldersFromTokenAmount?: InputMaybe<FloatNullableFilter>;
  trackMarketCap?: InputMaybe<BooleanFilter>;
  trackPrice?: InputMaybe<BooleanFilter>;
  trackSocials?: InputMaybe<BooleanFilter>;
  transparencyRatings?: InputMaybe<TransparencyRatingManyRelationFilter>;
  transparencyScore?: InputMaybe<IntNullableFilter>;
  twitter?: InputMaybe<StringFilter>;
  useDexScreener?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserManyRelationFilter>;
  votes?: InputMaybe<VoteManyRelationFilter>;
  website?: InputMaybe<StringFilter>;
  whitepaper?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Provider = {
  __typename?: 'Provider';
  about?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<ImageFieldOutput>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  contactEmail?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discord?: Maybe<Scalars['String']>;
  discordHandle?: Maybe<Scalars['String']>;
  displayEmail?: Maybe<Scalars['Boolean']>;
  displayPrices?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  followers?: Maybe<Array<User>>;
  followersCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  isListed?: Maybe<Scalars['Boolean']>;
  isPromoted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  offers?: Maybe<Scalars['String']>;
  openForApplications?: Maybe<Scalars['Boolean']>;
  openForWork?: Maybe<Scalars['Boolean']>;
  priceFrom?: Maybe<Scalars['Float']>;
  priceTo?: Maybe<Scalars['Float']>;
  reddit?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Float']>;
  votes?: Maybe<Array<Vote>>;
  votesCount?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


export type ProviderCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type ProviderCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type ProviderFollowersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type ProviderFollowersCountArgs = {
  where?: UserWhereInput;
};


export type ProviderTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type ProviderTagsCountArgs = {
  where?: TagWhereInput;
};


export type ProviderVotesArgs = {
  orderBy?: Array<VoteOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VoteWhereInput;
};


export type ProviderVotesCountArgs = {
  where?: VoteWhereInput;
};

export type ProviderCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<ImageFieldInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discord?: InputMaybe<Scalars['String']>;
  discordHandle?: InputMaybe<Scalars['String']>;
  displayEmail?: InputMaybe<Scalars['Boolean']>;
  displayPrices?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  followers?: InputMaybe<UserRelateToManyForCreateInput>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isPromoted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Scalars['String']>;
  openForApplications?: InputMaybe<Scalars['Boolean']>;
  openForWork?: InputMaybe<Scalars['Boolean']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  views?: InputMaybe<Scalars['Float']>;
  votes?: InputMaybe<VoteRelateToManyForCreateInput>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProviderManyRelationFilter = {
  every?: InputMaybe<ProviderWhereInput>;
  none?: InputMaybe<ProviderWhereInput>;
  some?: InputMaybe<ProviderWhereInput>;
};

export type ProviderOrderByInput = {
  about?: InputMaybe<OrderDirection>;
  contactEmail?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  discord?: InputMaybe<OrderDirection>;
  discordHandle?: InputMaybe<OrderDirection>;
  displayEmail?: InputMaybe<OrderDirection>;
  displayPrices?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isListed?: InputMaybe<OrderDirection>;
  isPromoted?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nickname?: InputMaybe<OrderDirection>;
  offers?: InputMaybe<OrderDirection>;
  openForApplications?: InputMaybe<OrderDirection>;
  openForWork?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  reddit?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  telegram?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  views?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
  youtube?: InputMaybe<OrderDirection>;
};

export type ProviderRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  create?: InputMaybe<Array<ProviderCreateInput>>;
};

export type ProviderRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  create?: InputMaybe<Array<ProviderCreateInput>>;
  disconnect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  set?: InputMaybe<Array<ProviderWhereUniqueInput>>;
};

export type ProviderRelateToOneForCreateInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
};

export type ProviderRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ProviderUpdateArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderUpdateInput = {
  about?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<ImageFieldInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discord?: InputMaybe<Scalars['String']>;
  discordHandle?: InputMaybe<Scalars['String']>;
  displayEmail?: InputMaybe<Scalars['Boolean']>;
  displayPrices?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  followers?: InputMaybe<UserRelateToManyForUpdateInput>;
  image?: InputMaybe<ImageFieldInput>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isPromoted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Scalars['String']>;
  openForApplications?: InputMaybe<Scalars['Boolean']>;
  openForWork?: InputMaybe<Scalars['Boolean']>;
  priceFrom?: InputMaybe<Scalars['Float']>;
  priceTo?: InputMaybe<Scalars['Float']>;
  reddit?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  telegram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  views?: InputMaybe<Scalars['Float']>;
  votes?: InputMaybe<VoteRelateToManyForUpdateInput>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  about?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  contactEmail?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discord?: InputMaybe<StringFilter>;
  discordHandle?: InputMaybe<StringFilter>;
  displayEmail?: InputMaybe<BooleanFilter>;
  displayPrices?: InputMaybe<BooleanFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  followers?: InputMaybe<UserManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isListed?: InputMaybe<BooleanFilter>;
  isPromoted?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  offers?: InputMaybe<StringFilter>;
  openForApplications?: InputMaybe<BooleanFilter>;
  openForWork?: InputMaybe<BooleanFilter>;
  priceFrom?: InputMaybe<FloatNullableFilter>;
  priceTo?: InputMaybe<FloatNullableFilter>;
  reddit?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  telegram?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<FloatNullableFilter>;
  votes?: InputMaybe<VoteManyRelationFilter>;
  website?: InputMaybe<StringFilter>;
  youtube?: InputMaybe<StringFilter>;
};

export type ProviderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']>;
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
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Content>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlocks?: Maybe<Array<ContentBlock>>;
  contentBlocksCount?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentType>;
  contentTypes?: Maybe<Array<ContentType>>;
  contentTypesCount?: Maybe<Scalars['Int']>;
  contents?: Maybe<Array<Content>>;
  contentsCount?: Maybe<Scalars['Int']>;
  coupon?: Maybe<Coupon>;
  coupons?: Maybe<Array<Coupon>>;
  couponsCount?: Maybe<Scalars['Int']>;
  customTracker?: Maybe<CustomTracker>;
  customTrackers?: Maybe<Array<CustomTracker>>;
  customTrackersCount?: Maybe<Scalars['Int']>;
  discordAnnouncement?: Maybe<DiscordAnnouncement>;
  discordAnnouncements?: Maybe<Array<DiscordAnnouncement>>;
  discordAnnouncementsCount?: Maybe<Scalars['Int']>;
  discordBot?: Maybe<DiscordBot>;
  discordBots?: Maybe<Array<DiscordBot>>;
  discordBotsCount?: Maybe<Scalars['Int']>;
  discordConfig?: Maybe<DiscordConfig>;
  discordConfigs?: Maybe<Array<DiscordConfig>>;
  discordConfigsCount?: Maybe<Scalars['Int']>;
  discordEvent?: Maybe<DiscordEvent>;
  discordEvents?: Maybe<Array<DiscordEvent>>;
  discordEventsCount?: Maybe<Scalars['Int']>;
  emailList?: Maybe<EmailList>;
  emailLists?: Maybe<Array<EmailList>>;
  emailListsCount?: Maybe<Scalars['Int']>;
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
  paymentPlan?: Maybe<PaymentPlan>;
  paymentPlans?: Maybe<Array<PaymentPlan>>;
  paymentPlansCount?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  provider?: Maybe<Provider>;
  providers?: Maybe<Array<Provider>>;
  providersCount?: Maybe<Scalars['Int']>;
  quiz?: Maybe<Quiz>;
  quizzes?: Maybe<Array<Quiz>>;
  quizzesCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  serviceToken?: Maybe<ServiceToken>;
  serviceTokenUsage?: Maybe<ServiceTokenUsage>;
  serviceTokenUsages?: Maybe<Array<ServiceTokenUsage>>;
  serviceTokenUsagesCount?: Maybe<Scalars['Int']>;
  serviceTokens?: Maybe<Array<ServiceToken>>;
  serviceTokensCount?: Maybe<Scalars['Int']>;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']>;
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
  transcription?: Maybe<Transcription>;
  transcriptions?: Maybe<Array<Transcription>>;
  transcriptionsCount?: Maybe<Scalars['Int']>;
  transfer?: Maybe<Transfer>;
  transfers?: Maybe<Array<Transfer>>;
  transfersCount?: Maybe<Scalars['Int']>;
  transparencyRating?: Maybe<TransparencyRating>;
  transparencyRatings?: Maybe<Array<TransparencyRating>>;
  transparencyRatingsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userAuth?: Maybe<UserAuth>;
  userAuths?: Maybe<Array<UserAuth>>;
  userAuthsCount?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens?: Maybe<Array<VerificationToken>>;
  verificationTokensCount?: Maybe<Scalars['Int']>;
  vote?: Maybe<Vote>;
  votes?: Maybe<Array<Vote>>;
  votesCount?: Maybe<Scalars['Int']>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AccountWhereInput;
};


export type QueryAccountsCountArgs = {
  where?: AccountWhereInput;
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


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
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


export type QueryCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type QueryCouponsArgs = {
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CouponWhereInput;
};


export type QueryCouponsCountArgs = {
  where?: CouponWhereInput;
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


export type QueryDiscordAnnouncementArgs = {
  where: DiscordAnnouncementWhereUniqueInput;
};


export type QueryDiscordAnnouncementsArgs = {
  orderBy?: Array<DiscordAnnouncementOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordAnnouncementWhereInput;
};


export type QueryDiscordAnnouncementsCountArgs = {
  where?: DiscordAnnouncementWhereInput;
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


export type QueryDiscordConfigArgs = {
  where: DiscordConfigWhereUniqueInput;
};


export type QueryDiscordConfigsArgs = {
  orderBy?: Array<DiscordConfigOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordConfigWhereInput;
};


export type QueryDiscordConfigsCountArgs = {
  where?: DiscordConfigWhereInput;
};


export type QueryDiscordEventArgs = {
  where: DiscordEventWhereUniqueInput;
};


export type QueryDiscordEventsArgs = {
  orderBy?: Array<DiscordEventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DiscordEventWhereInput;
};


export type QueryDiscordEventsCountArgs = {
  where?: DiscordEventWhereInput;
};


export type QueryEmailListArgs = {
  where: EmailListWhereUniqueInput;
};


export type QueryEmailListsArgs = {
  orderBy?: Array<EmailListOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmailListWhereInput;
};


export type QueryEmailListsCountArgs = {
  where?: EmailListWhereInput;
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


export type QueryPaymentPlanArgs = {
  where: PaymentPlanWhereUniqueInput;
};


export type QueryPaymentPlansArgs = {
  orderBy?: Array<PaymentPlanOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentPlanWhereInput;
};


export type QueryPaymentPlansCountArgs = {
  where?: PaymentPlanWhereInput;
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


export type QueryProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryProvidersArgs = {
  orderBy?: Array<ProviderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProviderWhereInput;
};


export type QueryProvidersCountArgs = {
  where?: ProviderWhereInput;
};


export type QueryQuizArgs = {
  where: QuizWhereUniqueInput;
};


export type QueryQuizzesArgs = {
  orderBy?: Array<QuizOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: QuizWhereInput;
};


export type QueryQuizzesCountArgs = {
  where?: QuizWhereInput;
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


export type QueryServiceTokenArgs = {
  where: ServiceTokenWhereUniqueInput;
};


export type QueryServiceTokenUsageArgs = {
  where: ServiceTokenUsageWhereUniqueInput;
};


export type QueryServiceTokenUsagesArgs = {
  orderBy?: Array<ServiceTokenUsageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceTokenUsageWhereInput;
};


export type QueryServiceTokenUsagesCountArgs = {
  where?: ServiceTokenUsageWhereInput;
};


export type QueryServiceTokensArgs = {
  orderBy?: Array<ServiceTokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceTokenWhereInput;
};


export type QueryServiceTokensCountArgs = {
  where?: ServiceTokenWhereInput;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SessionWhereInput;
};


export type QuerySessionsCountArgs = {
  where?: SessionWhereInput;
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


export type QueryTranscriptionArgs = {
  where: TranscriptionWhereUniqueInput;
};


export type QueryTranscriptionsArgs = {
  orderBy?: Array<TranscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TranscriptionWhereInput;
};


export type QueryTranscriptionsCountArgs = {
  where?: TranscriptionWhereInput;
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


export type QueryTransparencyRatingArgs = {
  where: TransparencyRatingWhereUniqueInput;
};


export type QueryTransparencyRatingsArgs = {
  orderBy?: Array<TransparencyRatingOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TransparencyRatingWhereInput;
};


export type QueryTransparencyRatingsCountArgs = {
  where?: TransparencyRatingWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserAuthArgs = {
  where: UserAuthWhereUniqueInput;
};


export type QueryUserAuthsArgs = {
  orderBy?: Array<UserAuthOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserAuthWhereInput;
};


export type QueryUserAuthsCountArgs = {
  where?: UserAuthWhereInput;
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


export type QueryVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  orderBy?: Array<VerificationTokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VerificationTokenWhereInput;
};


export type QueryVerificationTokensCountArgs = {
  where?: VerificationTokenWhereInput;
};


export type QueryVoteArgs = {
  where: VoteWhereUniqueInput;
};


export type QueryVotesArgs = {
  orderBy?: Array<VoteOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VoteWhereInput;
};


export type QueryVotesCountArgs = {
  where?: VoteWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Quiz = {
  __typename?: 'Quiz';
  config?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hasRewards?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  imageUrl?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<User>>;
  likesCount?: Maybe<Scalars['Int']>;
  onEndDescription?: Maybe<Scalars['JSON']>;
  onWinDescription?: Maybe<Scalars['JSON']>;
  project?: Maybe<Project>;
  rewardType?: Maybe<Scalars['String']>;
  rewardsAmount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  timePerQuestion?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalWinners?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']>;
  winners?: Maybe<Scalars['Int']>;
};


export type QuizLikesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QuizLikesCountArgs = {
  where?: UserWhereInput;
};

export type QuizCreateInput = {
  config?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hasRewards?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  imageUrl?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<UserRelateToManyForCreateInput>;
  onEndDescription?: InputMaybe<Scalars['JSON']>;
  onWinDescription?: InputMaybe<Scalars['JSON']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  rewardType?: InputMaybe<Scalars['String']>;
  rewardsAmount?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  timePerQuestion?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  totalWinners?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  views?: InputMaybe<Scalars['Int']>;
  winners?: InputMaybe<Scalars['Int']>;
};

export type QuizOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  enabled?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  hasRewards?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imageUrl?: InputMaybe<OrderDirection>;
  rewardType?: InputMaybe<OrderDirection>;
  rewardsAmount?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  timePerQuestion?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  totalWinners?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  views?: InputMaybe<OrderDirection>;
  winners?: InputMaybe<OrderDirection>;
};

export type QuizUpdateArgs = {
  data: QuizUpdateInput;
  where: QuizWhereUniqueInput;
};

export type QuizUpdateInput = {
  config?: InputMaybe<Scalars['JSON']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hasRewards?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<ImageFieldInput>;
  imageUrl?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<UserRelateToManyForUpdateInput>;
  onEndDescription?: InputMaybe<Scalars['JSON']>;
  onWinDescription?: InputMaybe<Scalars['JSON']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  rewardType?: InputMaybe<Scalars['String']>;
  rewardsAmount?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  timePerQuestion?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  totalWinners?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  views?: InputMaybe<Scalars['Int']>;
  winners?: InputMaybe<Scalars['Int']>;
};

export type QuizWhereInput = {
  AND?: InputMaybe<Array<QuizWhereInput>>;
  NOT?: InputMaybe<Array<QuizWhereInput>>;
  OR?: InputMaybe<Array<QuizWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  hasRewards?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  likes?: InputMaybe<UserManyRelationFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  rewardType?: InputMaybe<StringFilter>;
  rewardsAmount?: InputMaybe<IntNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  timePerQuestion?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  totalWinners?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<IntNullableFilter>;
  winners?: InputMaybe<IntNullableFilter>;
};

export type QuizWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

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

export type ServiceToken = {
  __typename?: 'ServiceToken';
  amount?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  tokenUsage?: Maybe<Array<ServiceTokenUsage>>;
  tokenUsageCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type ServiceTokenTokenUsageArgs = {
  orderBy?: Array<ServiceTokenUsageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceTokenUsageWhereInput;
};


export type ServiceTokenTokenUsageCountArgs = {
  where?: ServiceTokenUsageWhereInput;
};

export type ServiceTokenCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  tokenUsage?: InputMaybe<ServiceTokenUsageRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ServiceTokenOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  discount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServiceTokenRelateToOneForCreateInput = {
  connect?: InputMaybe<ServiceTokenWhereUniqueInput>;
  create?: InputMaybe<ServiceTokenCreateInput>;
};

export type ServiceTokenRelateToOneForUpdateInput = {
  connect?: InputMaybe<ServiceTokenWhereUniqueInput>;
  create?: InputMaybe<ServiceTokenCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ServiceTokenUpdateArgs = {
  data: ServiceTokenUpdateInput;
  where: ServiceTokenWhereUniqueInput;
};

export type ServiceTokenUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Float']>;
  tokenUsage?: InputMaybe<ServiceTokenUsageRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ServiceTokenUsage = {
  __typename?: 'ServiceTokenUsage';
  dateAdded?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  serviceToken?: Maybe<ServiceToken>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  used?: Maybe<Scalars['Float']>;
};

export type ServiceTokenUsageCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  serviceToken?: InputMaybe<ServiceTokenRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  used?: InputMaybe<Scalars['Float']>;
};

export type ServiceTokenUsageManyRelationFilter = {
  every?: InputMaybe<ServiceTokenUsageWhereInput>;
  none?: InputMaybe<ServiceTokenUsageWhereInput>;
  some?: InputMaybe<ServiceTokenUsageWhereInput>;
};

export type ServiceTokenUsageOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  used?: InputMaybe<OrderDirection>;
};

export type ServiceTokenUsageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceTokenUsageWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceTokenUsageCreateInput>>;
};

export type ServiceTokenUsageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceTokenUsageWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceTokenUsageCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceTokenUsageWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceTokenUsageWhereUniqueInput>>;
};

export type ServiceTokenUsageUpdateArgs = {
  data: ServiceTokenUsageUpdateInput;
  where: ServiceTokenUsageWhereUniqueInput;
};

export type ServiceTokenUsageUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  serviceToken?: InputMaybe<ServiceTokenRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  used?: InputMaybe<Scalars['Float']>;
};

export type ServiceTokenUsageWhereInput = {
  AND?: InputMaybe<Array<ServiceTokenUsageWhereInput>>;
  NOT?: InputMaybe<Array<ServiceTokenUsageWhereInput>>;
  OR?: InputMaybe<Array<ServiceTokenUsageWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  serviceToken?: InputMaybe<ServiceTokenWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  used?: InputMaybe<FloatNullableFilter>;
};

export type ServiceTokenUsageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ServiceTokenWhereInput = {
  AND?: InputMaybe<Array<ServiceTokenWhereInput>>;
  NOT?: InputMaybe<Array<ServiceTokenWhereInput>>;
  OR?: InputMaybe<Array<ServiceTokenWhereInput>>;
  amount?: InputMaybe<FloatNullableFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  discount?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  tokenUsage?: InputMaybe<ServiceTokenUsageManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ServiceTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Session = {
  __typename?: 'Session';
  expires?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  sessionToken?: Maybe<Scalars['String']>;
  user?: Maybe<UserAuth>;
};

export type SessionCreateInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserAuthRelateToOneForCreateInput>;
};

export type SessionManyRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByInput = {
  expires?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  sessionToken?: InputMaybe<OrderDirection>;
};

export type SessionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
};

export type SessionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
};

export type SessionUpdateArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserAuthRelateToOneForUpdateInput>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserAuthWhereInput>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type SocialStat = {
  __typename?: 'SocialStat';
  annotation?: Maybe<Scalars['JSON']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  discord?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  project?: Maybe<Project>;
  telegram?: Maybe<Scalars['Float']>;
  twitter?: Maybe<Scalars['Float']>;
};

export type SocialStatCreateInput = {
  annotation?: InputMaybe<Scalars['JSON']>;
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
  annotation?: InputMaybe<Scalars['JSON']>;
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
  providers?: Maybe<Array<Provider>>;
  providersCount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
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


export type TagProvidersArgs = {
  orderBy?: Array<ProviderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProviderWhereInput;
};


export type TagProvidersCountArgs = {
  where?: ProviderWhereInput;
};

export type TagCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  providers?: InputMaybe<ProviderRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']>;
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
  type?: InputMaybe<OrderDirection>;
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
  providers?: InputMaybe<ProviderRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  providers?: InputMaybe<ProviderManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
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

export type Transcription = {
  __typename?: 'Transcription';
  content?: Maybe<Scalars['JSON']>;
  contentUrl?: Maybe<Scalars['String']>;
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isPublic?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Array<User>>;
  likesCount?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transcriptionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']>;
};


export type TranscriptionLikesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type TranscriptionLikesCountArgs = {
  where?: UserWhereInput;
};

export type TranscriptionCreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  contentUrl?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<UserRelateToManyForCreateInput>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  transcriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  views?: InputMaybe<Scalars['Int']>;
};

export type TranscriptionOrderByInput = {
  contentUrl?: InputMaybe<OrderDirection>;
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPublic?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  transcriptionId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  views?: InputMaybe<OrderDirection>;
};

export type TranscriptionUpdateArgs = {
  data: TranscriptionUpdateInput;
  where: TranscriptionWhereUniqueInput;
};

export type TranscriptionUpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  contentUrl?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<UserRelateToManyForUpdateInput>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  transcriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  views?: InputMaybe<Scalars['Int']>;
};

export type TranscriptionWhereInput = {
  AND?: InputMaybe<Array<TranscriptionWhereInput>>;
  NOT?: InputMaybe<Array<TranscriptionWhereInput>>;
  OR?: InputMaybe<Array<TranscriptionWhereInput>>;
  contentUrl?: InputMaybe<StringFilter>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  likes?: InputMaybe<UserManyRelationFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  transcriptionId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<IntNullableFilter>;
};

export type TranscriptionWhereUniqueInput = {
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

export type TransparencyRating = {
  __typename?: 'TransparencyRating';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type TransparencyRatingCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type TransparencyRatingManyRelationFilter = {
  every?: InputMaybe<TransparencyRatingWhereInput>;
  none?: InputMaybe<TransparencyRatingWhereInput>;
  some?: InputMaybe<TransparencyRatingWhereInput>;
};

export type TransparencyRatingOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
  rating?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TransparencyRatingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TransparencyRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<TransparencyRatingCreateInput>>;
};

export type TransparencyRatingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TransparencyRatingWhereUniqueInput>>;
  create?: InputMaybe<Array<TransparencyRatingCreateInput>>;
  disconnect?: InputMaybe<Array<TransparencyRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<TransparencyRatingWhereUniqueInput>>;
};

export type TransparencyRatingUpdateArgs = {
  data: TransparencyRatingUpdateInput;
  where: TransparencyRatingWhereUniqueInput;
};

export type TransparencyRatingUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type TransparencyRatingWhereInput = {
  AND?: InputMaybe<Array<TransparencyRatingWhereInput>>;
  NOT?: InputMaybe<Array<TransparencyRatingWhereInput>>;
  OR?: InputMaybe<Array<TransparencyRatingWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  rating?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type TransparencyRatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  content?: Maybe<Array<Content>>;
  contentCount?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  followedProviders?: Maybe<Array<Provider>>;
  followedProvidersCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isNotChargeable?: Maybe<Scalars['Boolean']>;
  isSubscribedToEmail?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  managedProjects?: Maybe<Array<Project>>;
  managedProjectsCount?: Maybe<Scalars['Int']>;
  marketingCampaigns?: Maybe<Array<MarketingCampaign>>;
  marketingCampaignsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  providerProfile?: Maybe<Provider>;
  referralCode?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  serviceTokens?: Maybe<ServiceToken>;
  subscription?: Maybe<Subscription>;
  subscriptionStatus?: Maybe<SubscriptionStatus>;
  userAuth?: Maybe<UserAuth>;
  walletAddress?: Maybe<Scalars['String']>;
};


export type UserContentArgs = {
  orderBy?: Array<ContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContentWhereInput;
};


export type UserContentCountArgs = {
  where?: ContentWhereInput;
};


export type UserFollowedProvidersArgs = {
  orderBy?: Array<ProviderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProviderWhereInput;
};


export type UserFollowedProvidersCountArgs = {
  where?: ProviderWhereInput;
};


export type UserManagedProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type UserManagedProjectsCountArgs = {
  where?: ProjectWhereInput;
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

export type UserAuth = {
  __typename?: 'UserAuth';
  access_token?: Maybe<Scalars['String']>;
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};


export type UserAuthAccountsArgs = {
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AccountWhereInput;
};


export type UserAuthAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type UserAuthSessionsArgs = {
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SessionWhereInput;
};


export type UserAuthSessionsCountArgs = {
  where?: SessionWhereInput;
};

export type UserAuthCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserAuthOrderByInput = {
  access_token?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailVerified?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserAuthRelateToOneForCreateInput = {
  connect?: InputMaybe<UserAuthWhereUniqueInput>;
  create?: InputMaybe<UserAuthCreateInput>;
};

export type UserAuthRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserAuthWhereUniqueInput>;
  create?: InputMaybe<UserAuthCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserAuthUpdateArgs = {
  data: UserAuthUpdateInput;
  where: UserAuthWhereUniqueInput;
};

export type UserAuthUpdateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserAuthWhereInput = {
  AND?: InputMaybe<Array<UserAuthWhereInput>>;
  NOT?: InputMaybe<Array<UserAuthWhereInput>>;
  OR?: InputMaybe<Array<UserAuthWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  accounts?: InputMaybe<AccountManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<SessionManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserAuthWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
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
  content?: InputMaybe<ContentRelateToManyForCreateInput>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  followedProviders?: InputMaybe<ProviderRelateToManyForCreateInput>;
  ip?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  managedProjects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  providerProfile?: InputMaybe<ProviderRelateToOneForCreateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForCreateInput>;
  serviceTokens?: InputMaybe<ServiceTokenRelateToOneForCreateInput>;
  subscription?: InputMaybe<SubscriptionRelateToOneForCreateInput>;
  userAuth?: InputMaybe<UserAuthRelateToOneForCreateInput>;
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
  content?: InputMaybe<ContentRelateToManyForUpdateInput>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  followedProviders?: InputMaybe<ProviderRelateToManyForUpdateInput>;
  ip?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isNotChargeable?: InputMaybe<Scalars['Boolean']>;
  isSubscribedToEmail?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  managedProjects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  marketingCampaigns?: InputMaybe<MarketingCampaignRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  providerProfile?: InputMaybe<ProviderRelateToOneForUpdateInput>;
  referralCode?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForUpdateInput>;
  serviceTokens?: InputMaybe<ServiceTokenRelateToOneForUpdateInput>;
  subscription?: InputMaybe<SubscriptionRelateToOneForUpdateInput>;
  userAuth?: InputMaybe<UserAuthRelateToOneForUpdateInput>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  content?: InputMaybe<ContentManyRelationFilter>;
  dateCreated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  followedProviders?: InputMaybe<ProviderManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isNotChargeable?: InputMaybe<BooleanFilter>;
  isSubscribedToEmail?: InputMaybe<BooleanFilter>;
  isVerified?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  managedProjects?: InputMaybe<ProjectManyRelationFilter>;
  marketingCampaigns?: InputMaybe<MarketingCampaignManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  providerProfile?: InputMaybe<ProviderWhereInput>;
  referralCode?: InputMaybe<StringFilter>;
  referrer?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleManyRelationFilter>;
  serviceTokens?: InputMaybe<ServiceTokenWhereInput>;
  subscription?: InputMaybe<SubscriptionWhereInput>;
  userAuth?: InputMaybe<UserAuthWhereInput>;
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

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenCreateInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type VerificationTokenOrderByInput = {
  expires?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  identifier?: InputMaybe<OrderDirection>;
  token?: InputMaybe<OrderDirection>;
};

export type VerificationTokenUpdateArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Vote = {
  __typename?: 'Vote';
  dateAdded?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  provider?: Maybe<Provider>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  vote?: Maybe<Scalars['Int']>;
};

export type VoteCreateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
  provider?: InputMaybe<ProviderRelateToOneForCreateInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  vote?: InputMaybe<Scalars['Int']>;
};

export type VoteManyRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteOrderByInput = {
  dateAdded?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vote?: InputMaybe<OrderDirection>;
};

export type VoteRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  create?: InputMaybe<Array<VoteCreateInput>>;
};

export type VoteRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  create?: InputMaybe<Array<VoteCreateInput>>;
  disconnect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  set?: InputMaybe<Array<VoteWhereUniqueInput>>;
};

export type VoteUpdateArgs = {
  data: VoteUpdateInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateInput = {
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  ip?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
  provider?: InputMaybe<ProviderRelateToOneForUpdateInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  vote?: InputMaybe<Scalars['Int']>;
};

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  dateAdded?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  provider?: InputMaybe<ProviderWhereInput>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  vote?: InputMaybe<IntNullableFilter>;
};

export type VoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SubscriptionStatus = {
  __typename?: 'subscriptionStatus';
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  isValid?: Maybe<Scalars['Boolean']>;
  products?: Maybe<Scalars['JSON']>;
};
