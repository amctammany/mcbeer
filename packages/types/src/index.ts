import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  MongoID: { input: any; output: any; }
  RegExpAsString: { input: any; output: any; }
};

export type CreateOneFermentableIngredientInput = {
  color?: InputMaybe<Scalars['Float']['input']>;
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  power?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneFermentableIngredientPayload = {
  __typename?: 'CreateOneFermentableIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<FermentableIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneHopIngredientInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  alphaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  beta?: InputMaybe<Scalars['Float']['input']>;
  betaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  caryophyllene?: InputMaybe<Scalars['Float']['input']>;
  caryophylleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cohumulone?: InputMaybe<Scalars['Float']['input']>;
  cohumuloneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  farnesene?: InputMaybe<Scalars['Float']['input']>;
  farneseneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  humulene?: InputMaybe<Scalars['Float']['input']>;
  humuleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  myrcene?: InputMaybe<Scalars['Float']['input']>;
  myrceneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  sensoryPanels?: InputMaybe<Array<InputMaybe<HopIngredientSensoryPanelsInput>>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  substitutes?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  totalOil?: InputMaybe<Scalars['Float']['input']>;
  totalOilRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type CreateOneHopIngredientPayload = {
  __typename?: 'CreateOneHopIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<HopIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneOtherIngredientInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneOtherIngredientPayload = {
  __typename?: 'CreateOneOtherIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<OtherIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneStyleInput = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  aroma?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<EnumStyleCategory>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comparison?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  examples?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  mouthfeel?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  subcategoryId: Scalars['String']['input'];
  vitals?: InputMaybe<StyleVitalsInput>;
};

export type CreateOneStylePayload = {
  __typename?: 'CreateOneStylePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Style>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneStyleSubCategoryInput = {
  category?: InputMaybe<EnumStyleSubCategoryCategory>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneStyleSubCategoryPayload = {
  __typename?: 'CreateOneStyleSubCategoryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<StyleSubCategory>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneYeastIngredientInput = {
  attenuation?: InputMaybe<Scalars['Float']['input']>;
  flocculation?: InputMaybe<EnumYeastIngredientFlocculation>;
  tolerance?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateOneYeastIngredientPayload = {
  __typename?: 'CreateOneYeastIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<YeastIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export const enum EnumStyleCategory {
  Beer = 'beer',
  Cider = 'cider',
  Mead = 'mead'
};

export const enum EnumStyleSubCategoryCategory {
  Beer = 'beer',
  Cider = 'cider',
  Mead = 'mead'
};

export const enum EnumYeastIngredientFlocculation {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type FermentableIngredient = {
  __typename?: 'FermentableIngredient';
  _id: Scalars['MongoID']['output'];
  color?: Maybe<Scalars['Float']['output']>;
  maxUsage?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  potential?: Maybe<Scalars['Float']['output']>;
  power?: Maybe<Scalars['Float']['output']>;
  stability?: Maybe<Scalars['String']['output']>;
  /** URL */
  urlString?: Maybe<Scalars['String']['output']>;
};

export type FilterFindManyFermentableIngredientInput = {
  AND?: InputMaybe<Array<FilterFindManyFermentableIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindManyFermentableIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyFermentableIngredientOperatorsInput>;
  color?: InputMaybe<Scalars['Float']['input']>;
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  power?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFermentableIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindManyFermentableIngredient_IdOperatorsInput>;
};

export type FilterFindManyFermentableIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyHopIngredientInput = {
  AND?: InputMaybe<Array<FilterFindManyHopIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindManyHopIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyHopIngredientOperatorsInput>;
  alpha?: InputMaybe<Scalars['Float']['input']>;
  alphaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  beta?: InputMaybe<Scalars['Float']['input']>;
  betaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  caryophyllene?: InputMaybe<Scalars['Float']['input']>;
  caryophylleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cohumulone?: InputMaybe<Scalars['Float']['input']>;
  cohumuloneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  farnesene?: InputMaybe<Scalars['Float']['input']>;
  farneseneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  humulene?: InputMaybe<Scalars['Float']['input']>;
  humuleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  myrcene?: InputMaybe<Scalars['Float']['input']>;
  myrceneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  sensoryPanels?: InputMaybe<Array<InputMaybe<FilterFindManyHopIngredientSensoryPanelsInput>>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  substitutes?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  totalOil?: InputMaybe<Scalars['Float']['input']>;
  totalOilRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyHopIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindManyHopIngredient_IdOperatorsInput>;
};

export type FilterFindManyHopIngredientSensoryPanelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  berry?: InputMaybe<Scalars['Float']['input']>;
  citrus?: InputMaybe<Scalars['Float']['input']>;
  earthy?: InputMaybe<Scalars['Float']['input']>;
  floral?: InputMaybe<Scalars['Float']['input']>;
  grassy?: InputMaybe<Scalars['Float']['input']>;
  herbal?: InputMaybe<Scalars['Float']['input']>;
  melon?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pomme?: InputMaybe<Scalars['Float']['input']>;
  spicy?: InputMaybe<Scalars['Float']['input']>;
  stoneFruit?: InputMaybe<Scalars['Float']['input']>;
  sweetAromatic?: InputMaybe<Scalars['Float']['input']>;
  tropical?: InputMaybe<Scalars['Float']['input']>;
  vegetal?: InputMaybe<Scalars['Float']['input']>;
  woody?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyHopIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyOtherIngredientInput = {
  AND?: InputMaybe<Array<FilterFindManyOtherIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindManyOtherIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyOtherIngredientOperatorsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyOtherIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindManyOtherIngredient_IdOperatorsInput>;
};

export type FilterFindManyOtherIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyStyleInput = {
  AND?: InputMaybe<Array<FilterFindManyStyleInput>>;
  OR?: InputMaybe<Array<FilterFindManyStyleInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyStyleOperatorsInput>;
  appearance?: InputMaybe<Scalars['String']['input']>;
  aroma?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<EnumStyleCategory>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comparison?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  examples?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  mouthfeel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  vitals?: InputMaybe<FilterFindManyStyleVitalsInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyStyleOperatorsInput = {
  _id?: InputMaybe<FilterFindManyStyle_IdOperatorsInput>;
  subcategoryId?: InputMaybe<FilterFindManyStyleSubcategoryIdOperatorsInput>;
};

export type FilterFindManyStyleSubCategoryInput = {
  AND?: InputMaybe<Array<FilterFindManyStyleSubCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindManyStyleSubCategoryInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyStyleSubCategoryOperatorsInput>;
  category?: InputMaybe<EnumStyleSubCategoryCategory>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyStyleSubCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyStyleSubCategory_IdOperatorsInput>;
};

export type FilterFindManyStyleSubCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyStyleSubcategoryIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyStyleVitalsAbvInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyStyleVitalsFgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyStyleVitalsIbuInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyStyleVitalsInput = {
  abv?: InputMaybe<FilterFindManyStyleVitalsAbvInput>;
  fg?: InputMaybe<FilterFindManyStyleVitalsFgInput>;
  ibu?: InputMaybe<FilterFindManyStyleVitalsIbuInput>;
  og?: InputMaybe<FilterFindManyStyleVitalsOgInput>;
  srm?: InputMaybe<FilterFindManyStyleVitalsSrmInput>;
};

export type FilterFindManyStyleVitalsOgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyStyleVitalsSrmInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyStyle_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyYeastIngredientInput = {
  AND?: InputMaybe<Array<FilterFindManyYeastIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindManyYeastIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyYeastIngredientOperatorsInput>;
  attenuation?: InputMaybe<Scalars['Float']['input']>;
  flocculation?: InputMaybe<EnumYeastIngredientFlocculation>;
  tolerance?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyYeastIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindManyYeastIngredient_IdOperatorsInput>;
};

export type FilterFindManyYeastIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneFermentableIngredientInput = {
  AND?: InputMaybe<Array<FilterFindOneFermentableIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindOneFermentableIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneFermentableIngredientOperatorsInput>;
  color?: InputMaybe<Scalars['Float']['input']>;
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  power?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFermentableIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindOneFermentableIngredient_IdOperatorsInput>;
};

export type FilterFindOneFermentableIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneHopIngredientInput = {
  AND?: InputMaybe<Array<FilterFindOneHopIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindOneHopIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneHopIngredientOperatorsInput>;
  alpha?: InputMaybe<Scalars['Float']['input']>;
  alphaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  beta?: InputMaybe<Scalars['Float']['input']>;
  betaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  caryophyllene?: InputMaybe<Scalars['Float']['input']>;
  caryophylleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cohumulone?: InputMaybe<Scalars['Float']['input']>;
  cohumuloneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  farnesene?: InputMaybe<Scalars['Float']['input']>;
  farneseneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  humulene?: InputMaybe<Scalars['Float']['input']>;
  humuleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  myrcene?: InputMaybe<Scalars['Float']['input']>;
  myrceneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  sensoryPanels?: InputMaybe<Array<InputMaybe<FilterFindOneHopIngredientSensoryPanelsInput>>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  substitutes?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  totalOil?: InputMaybe<Scalars['Float']['input']>;
  totalOilRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneHopIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindOneHopIngredient_IdOperatorsInput>;
};

export type FilterFindOneHopIngredientSensoryPanelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  berry?: InputMaybe<Scalars['Float']['input']>;
  citrus?: InputMaybe<Scalars['Float']['input']>;
  earthy?: InputMaybe<Scalars['Float']['input']>;
  floral?: InputMaybe<Scalars['Float']['input']>;
  grassy?: InputMaybe<Scalars['Float']['input']>;
  herbal?: InputMaybe<Scalars['Float']['input']>;
  melon?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pomme?: InputMaybe<Scalars['Float']['input']>;
  spicy?: InputMaybe<Scalars['Float']['input']>;
  stoneFruit?: InputMaybe<Scalars['Float']['input']>;
  sweetAromatic?: InputMaybe<Scalars['Float']['input']>;
  tropical?: InputMaybe<Scalars['Float']['input']>;
  vegetal?: InputMaybe<Scalars['Float']['input']>;
  woody?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneHopIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneOtherIngredientInput = {
  AND?: InputMaybe<Array<FilterFindOneOtherIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindOneOtherIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneOtherIngredientOperatorsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneOtherIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindOneOtherIngredient_IdOperatorsInput>;
};

export type FilterFindOneOtherIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneStyleInput = {
  AND?: InputMaybe<Array<FilterFindOneStyleInput>>;
  OR?: InputMaybe<Array<FilterFindOneStyleInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneStyleOperatorsInput>;
  appearance?: InputMaybe<Scalars['String']['input']>;
  aroma?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<EnumStyleCategory>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comparison?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  examples?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  mouthfeel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  vitals?: InputMaybe<FilterFindOneStyleVitalsInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneStyleOperatorsInput = {
  _id?: InputMaybe<FilterFindOneStyle_IdOperatorsInput>;
  subcategoryId?: InputMaybe<FilterFindOneStyleSubcategoryIdOperatorsInput>;
};

export type FilterFindOneStyleSubCategoryInput = {
  AND?: InputMaybe<Array<FilterFindOneStyleSubCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindOneStyleSubCategoryInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneStyleSubCategoryOperatorsInput>;
  category?: InputMaybe<EnumStyleSubCategoryCategory>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneStyleSubCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindOneStyleSubCategory_IdOperatorsInput>;
};

export type FilterFindOneStyleSubCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneStyleSubcategoryIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneStyleVitalsAbvInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneStyleVitalsFgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneStyleVitalsIbuInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneStyleVitalsInput = {
  abv?: InputMaybe<FilterFindOneStyleVitalsAbvInput>;
  fg?: InputMaybe<FilterFindOneStyleVitalsFgInput>;
  ibu?: InputMaybe<FilterFindOneStyleVitalsIbuInput>;
  og?: InputMaybe<FilterFindOneStyleVitalsOgInput>;
  srm?: InputMaybe<FilterFindOneStyleVitalsSrmInput>;
};

export type FilterFindOneStyleVitalsOgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneStyleVitalsSrmInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneStyle_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneYeastIngredientInput = {
  AND?: InputMaybe<Array<FilterFindOneYeastIngredientInput>>;
  OR?: InputMaybe<Array<FilterFindOneYeastIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneYeastIngredientOperatorsInput>;
  attenuation?: InputMaybe<Scalars['Float']['input']>;
  flocculation?: InputMaybe<EnumYeastIngredientFlocculation>;
  tolerance?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneYeastIngredientOperatorsInput = {
  _id?: InputMaybe<FilterFindOneYeastIngredient_IdOperatorsInput>;
};

export type FilterFindOneYeastIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneFermentableIngredientInput = {
  AND?: InputMaybe<Array<FilterUpdateOneFermentableIngredientInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneFermentableIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneFermentableIngredientOperatorsInput>;
  color?: InputMaybe<Scalars['Float']['input']>;
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  power?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFermentableIngredientOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneFermentableIngredient_IdOperatorsInput>;
};

export type FilterUpdateOneFermentableIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneHopIngredientInput = {
  AND?: InputMaybe<Array<FilterUpdateOneHopIngredientInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneHopIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneHopIngredientOperatorsInput>;
  alpha?: InputMaybe<Scalars['Float']['input']>;
  alphaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  beta?: InputMaybe<Scalars['Float']['input']>;
  betaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  caryophyllene?: InputMaybe<Scalars['Float']['input']>;
  caryophylleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cohumulone?: InputMaybe<Scalars['Float']['input']>;
  cohumuloneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  farnesene?: InputMaybe<Scalars['Float']['input']>;
  farneseneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  humulene?: InputMaybe<Scalars['Float']['input']>;
  humuleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  myrcene?: InputMaybe<Scalars['Float']['input']>;
  myrceneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  sensoryPanels?: InputMaybe<Array<InputMaybe<FilterUpdateOneHopIngredientSensoryPanelsInput>>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  substitutes?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  totalOil?: InputMaybe<Scalars['Float']['input']>;
  totalOilRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneHopIngredientOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneHopIngredient_IdOperatorsInput>;
};

export type FilterUpdateOneHopIngredientSensoryPanelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  berry?: InputMaybe<Scalars['Float']['input']>;
  citrus?: InputMaybe<Scalars['Float']['input']>;
  earthy?: InputMaybe<Scalars['Float']['input']>;
  floral?: InputMaybe<Scalars['Float']['input']>;
  grassy?: InputMaybe<Scalars['Float']['input']>;
  herbal?: InputMaybe<Scalars['Float']['input']>;
  melon?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pomme?: InputMaybe<Scalars['Float']['input']>;
  spicy?: InputMaybe<Scalars['Float']['input']>;
  stoneFruit?: InputMaybe<Scalars['Float']['input']>;
  sweetAromatic?: InputMaybe<Scalars['Float']['input']>;
  tropical?: InputMaybe<Scalars['Float']['input']>;
  vegetal?: InputMaybe<Scalars['Float']['input']>;
  woody?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneHopIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneOtherIngredientInput = {
  AND?: InputMaybe<Array<FilterUpdateOneOtherIngredientInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneOtherIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneOtherIngredientOperatorsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneOtherIngredientOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneOtherIngredient_IdOperatorsInput>;
};

export type FilterUpdateOneOtherIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneStyleInput = {
  AND?: InputMaybe<Array<FilterUpdateOneStyleInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneStyleInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneStyleOperatorsInput>;
  appearance?: InputMaybe<Scalars['String']['input']>;
  aroma?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<EnumStyleCategory>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comparison?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  examples?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  mouthfeel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  vitals?: InputMaybe<FilterUpdateOneStyleVitalsInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneStyleOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneStyle_IdOperatorsInput>;
  subcategoryId?: InputMaybe<FilterUpdateOneStyleSubcategoryIdOperatorsInput>;
};

export type FilterUpdateOneStyleSubCategoryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneStyleSubCategoryInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneStyleSubCategoryInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneStyleSubCategoryOperatorsInput>;
  category?: InputMaybe<EnumStyleSubCategoryCategory>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneStyleSubCategoryOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneStyleSubCategory_IdOperatorsInput>;
};

export type FilterUpdateOneStyleSubCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneStyleSubcategoryIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneStyleVitalsAbvInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneStyleVitalsFgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneStyleVitalsIbuInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneStyleVitalsInput = {
  abv?: InputMaybe<FilterUpdateOneStyleVitalsAbvInput>;
  fg?: InputMaybe<FilterUpdateOneStyleVitalsFgInput>;
  ibu?: InputMaybe<FilterUpdateOneStyleVitalsIbuInput>;
  og?: InputMaybe<FilterUpdateOneStyleVitalsOgInput>;
  srm?: InputMaybe<FilterUpdateOneStyleVitalsSrmInput>;
};

export type FilterUpdateOneStyleVitalsOgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneStyleVitalsSrmInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneStyle_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneYeastIngredientInput = {
  AND?: InputMaybe<Array<FilterUpdateOneYeastIngredientInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneYeastIngredientInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneYeastIngredientOperatorsInput>;
  attenuation?: InputMaybe<Scalars['Float']['input']>;
  flocculation?: InputMaybe<EnumYeastIngredientFlocculation>;
  tolerance?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneYeastIngredientOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneYeastIngredient_IdOperatorsInput>;
};

export type FilterUpdateOneYeastIngredient_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type HopIngredient = {
  __typename?: 'HopIngredient';
  _id: Scalars['MongoID']['output'];
  alpha?: Maybe<Scalars['Float']['output']>;
  alphaRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  beta?: Maybe<Scalars['Float']['output']>;
  betaRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  caryophyllene?: Maybe<Scalars['Float']['output']>;
  caryophylleneRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  cohumulone?: Maybe<Scalars['Float']['output']>;
  cohumuloneRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  farnesene?: Maybe<Scalars['Float']['output']>;
  farneseneRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  flavor?: Maybe<Scalars['String']['output']>;
  humulene?: Maybe<Scalars['Float']['output']>;
  humuleneRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  myrcene?: Maybe<Scalars['Float']['output']>;
  myrceneRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  notes?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  sensoryPanels?: Maybe<Array<Maybe<HopIngredientSensoryPanels>>>;
  styles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  substitutes?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  totalOil?: Maybe<Scalars['Float']['output']>;
  totalOilRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** URL */
  urlString?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
};

export type HopIngredientSensoryPanels = {
  __typename?: 'HopIngredientSensoryPanels';
  _id?: Maybe<Scalars['MongoID']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  berry?: Maybe<Scalars['Float']['output']>;
  citrus?: Maybe<Scalars['Float']['output']>;
  earthy?: Maybe<Scalars['Float']['output']>;
  floral?: Maybe<Scalars['Float']['output']>;
  grassy?: Maybe<Scalars['Float']['output']>;
  herbal?: Maybe<Scalars['Float']['output']>;
  melon?: Maybe<Scalars['Float']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  pomme?: Maybe<Scalars['Float']['output']>;
  spicy?: Maybe<Scalars['Float']['output']>;
  stoneFruit?: Maybe<Scalars['Float']['output']>;
  sweetAromatic?: Maybe<Scalars['Float']['output']>;
  tropical?: Maybe<Scalars['Float']['output']>;
  vegetal?: Maybe<Scalars['Float']['output']>;
  woody?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type HopIngredientSensoryPanelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  berry?: InputMaybe<Scalars['Float']['input']>;
  citrus?: InputMaybe<Scalars['Float']['input']>;
  earthy?: InputMaybe<Scalars['Float']['input']>;
  floral?: InputMaybe<Scalars['Float']['input']>;
  grassy?: InputMaybe<Scalars['Float']['input']>;
  herbal?: InputMaybe<Scalars['Float']['input']>;
  melon?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pomme?: InputMaybe<Scalars['Float']['input']>;
  spicy?: InputMaybe<Scalars['Float']['input']>;
  stoneFruit?: InputMaybe<Scalars['Float']['input']>;
  sweetAromatic?: InputMaybe<Scalars['Float']['input']>;
  tropical?: InputMaybe<Scalars['Float']['input']>;
  vegetal?: InputMaybe<Scalars['Float']['input']>;
  woody?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  fermentableCreateOne?: Maybe<CreateOneFermentableIngredientPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  fermentableUpdateOne?: Maybe<UpdateOneFermentableIngredientPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  hopCreateOne?: Maybe<CreateOneHopIngredientPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  hopUpdateOne?: Maybe<UpdateOneHopIngredientPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  otherCreateOne?: Maybe<CreateOneOtherIngredientPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  otherUpdateOne?: Maybe<UpdateOneOtherIngredientPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  styleCreateOne?: Maybe<CreateOneStylePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  styleSubCategoryCreateOne?: Maybe<CreateOneStyleSubCategoryPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  styleSubCategoryUpdateOne?: Maybe<UpdateOneStyleSubCategoryPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  styleUpdateOne?: Maybe<UpdateOneStylePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  yeastCreateOne?: Maybe<CreateOneYeastIngredientPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  yeastUpdateOne?: Maybe<UpdateOneYeastIngredientPayload>;
};


export type MutationFermentableCreateOneArgs = {
  record: CreateOneFermentableIngredientInput;
};


export type MutationFermentableUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneFermentableIngredientInput>;
  record: UpdateOneFermentableIngredientInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneFermentableIngredientInput>;
};


export type MutationHopCreateOneArgs = {
  record: CreateOneHopIngredientInput;
};


export type MutationHopUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneHopIngredientInput>;
  record: UpdateOneHopIngredientInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneHopIngredientInput>;
};


export type MutationOtherCreateOneArgs = {
  record: CreateOneOtherIngredientInput;
};


export type MutationOtherUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneOtherIngredientInput>;
  record: UpdateOneOtherIngredientInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneOtherIngredientInput>;
};


export type MutationStyleCreateOneArgs = {
  record: CreateOneStyleInput;
};


export type MutationStyleSubCategoryCreateOneArgs = {
  record: CreateOneStyleSubCategoryInput;
};


export type MutationStyleSubCategoryUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneStyleSubCategoryInput>;
  record: UpdateOneStyleSubCategoryInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneStyleSubCategoryInput>;
};


export type MutationStyleUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneStyleInput>;
  record: UpdateOneStyleInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneStyleInput>;
};


export type MutationYeastCreateOneArgs = {
  record: CreateOneYeastIngredientInput;
};


export type MutationYeastUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneYeastIngredientInput>;
  record: UpdateOneYeastIngredientInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneYeastIngredientInput>;
};

export type OtherIngredient = {
  __typename?: 'OtherIngredient';
  _id: Scalars['MongoID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** URL */
  urlString?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  fermentable?: Maybe<FermentableIngredient>;
  fermentables: Array<FermentableIngredient>;
  hop?: Maybe<HopIngredient>;
  hops: Array<HopIngredient>;
  other?: Maybe<OtherIngredient>;
  others: Array<OtherIngredient>;
  style?: Maybe<Style>;
  styles: Array<Style>;
  stylesubcategories: Array<StyleSubCategory>;
  stylesubcategory?: Maybe<StyleSubCategory>;
  yeast?: Maybe<YeastIngredient>;
  yeasts: Array<YeastIngredient>;
};


export type QueryFermentableArgs = {
  filter?: InputMaybe<FilterFindOneFermentableIngredientInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneFermentableIngredientInput>;
};


export type QueryFermentablesArgs = {
  filter?: InputMaybe<FilterFindManyFermentableIngredientInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyFermentableIngredientInput>;
};


export type QueryHopArgs = {
  filter?: InputMaybe<FilterFindOneHopIngredientInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneHopIngredientInput>;
};


export type QueryHopsArgs = {
  filter?: InputMaybe<FilterFindManyHopIngredientInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyHopIngredientInput>;
};


export type QueryOtherArgs = {
  filter?: InputMaybe<FilterFindOneOtherIngredientInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneOtherIngredientInput>;
};


export type QueryOthersArgs = {
  filter?: InputMaybe<FilterFindManyOtherIngredientInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyOtherIngredientInput>;
};


export type QueryStyleArgs = {
  filter?: InputMaybe<FilterFindOneStyleInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneStyleInput>;
};


export type QueryStylesArgs = {
  filter?: InputMaybe<FilterFindManyStyleInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyStyleInput>;
};


export type QueryStylesubcategoriesArgs = {
  filter?: InputMaybe<FilterFindManyStyleSubCategoryInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyStyleSubCategoryInput>;
};


export type QueryStylesubcategoryArgs = {
  filter?: InputMaybe<FilterFindOneStyleSubCategoryInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneStyleSubCategoryInput>;
};


export type QueryYeastArgs = {
  filter?: InputMaybe<FilterFindOneYeastIngredientInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneYeastIngredientInput>;
};


export type QueryYeastsArgs = {
  filter?: InputMaybe<FilterFindManyYeastIngredientInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyYeastIngredientInput>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export const enum SortFindManyFermentableIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindManyHopIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindManyOtherIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindManyStyleInput {
  SubcategoryidAsc = 'SUBCATEGORYID_ASC',
  SubcategoryidDesc = 'SUBCATEGORYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindManyStyleSubCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindManyYeastIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneFermentableIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneHopIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneOtherIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneStyleInput {
  SubcategoryidAsc = 'SUBCATEGORYID_ASC',
  SubcategoryidDesc = 'SUBCATEGORYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneStyleSubCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortFindOneYeastIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneFermentableIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneHopIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneOtherIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneStyleInput {
  SubcategoryidAsc = 'SUBCATEGORYID_ASC',
  SubcategoryidDesc = 'SUBCATEGORYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneStyleSubCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export const enum SortUpdateOneYeastIngredientInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
};

export type Style = {
  __typename?: 'Style';
  _id: Scalars['MongoID']['output'];
  appearance?: Maybe<Scalars['String']['output']>;
  aroma?: Maybe<Scalars['String']['output']>;
  category?: Maybe<EnumStyleCategory>;
  comments?: Maybe<Scalars['String']['output']>;
  comparison?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  examples?: Maybe<Scalars['String']['output']>;
  flavor?: Maybe<Scalars['String']['output']>;
  history?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  mouthfeel?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  subcategory?: Maybe<StyleSubCategory>;
  subcategoryId: Scalars['String']['output'];
  /** url */
  urlString?: Maybe<Scalars['String']['output']>;
  vitals?: Maybe<StyleVitals>;
};


export type StyleSubcategoryArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneStyleSubCategoryInput>;
};

export type StyleSubCategory = {
  __typename?: 'StyleSubCategory';
  _id: Scalars['MongoID']['output'];
  category?: Maybe<EnumStyleSubCategoryCategory>;
  identifier?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  styles: Array<Style>;
  /** url */
  urlString?: Maybe<Scalars['String']['output']>;
};


export type StyleSubCategoryStylesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyStyleInput>;
};

export type StyleVitals = {
  __typename?: 'StyleVitals';
  abv?: Maybe<StyleVitalsAbv>;
  fg?: Maybe<StyleVitalsFg>;
  ibu?: Maybe<StyleVitalsIbu>;
  og?: Maybe<StyleVitalsOg>;
  srm?: Maybe<StyleVitalsSrm>;
};

export type StyleVitalsAbv = {
  __typename?: 'StyleVitalsAbv';
  flexible?: Maybe<Scalars['Boolean']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type StyleVitalsAbvInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type StyleVitalsFg = {
  __typename?: 'StyleVitalsFg';
  flexible?: Maybe<Scalars['Boolean']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type StyleVitalsFgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type StyleVitalsIbu = {
  __typename?: 'StyleVitalsIbu';
  flexible?: Maybe<Scalars['Boolean']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type StyleVitalsIbuInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type StyleVitalsInput = {
  abv?: InputMaybe<StyleVitalsAbvInput>;
  fg?: InputMaybe<StyleVitalsFgInput>;
  ibu?: InputMaybe<StyleVitalsIbuInput>;
  og?: InputMaybe<StyleVitalsOgInput>;
  srm?: InputMaybe<StyleVitalsSrmInput>;
};

export type StyleVitalsOg = {
  __typename?: 'StyleVitalsOg';
  flexible?: Maybe<Scalars['Boolean']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type StyleVitalsOgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type StyleVitalsSrm = {
  __typename?: 'StyleVitalsSrm';
  flexible?: Maybe<Scalars['Boolean']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type StyleVitalsSrmInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneFermentableIngredientInput = {
  color?: InputMaybe<Scalars['Float']['input']>;
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  power?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneFermentableIngredientPayload = {
  __typename?: 'UpdateOneFermentableIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<FermentableIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneHopIngredientInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  alphaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  beta?: InputMaybe<Scalars['Float']['input']>;
  betaRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  caryophyllene?: InputMaybe<Scalars['Float']['input']>;
  caryophylleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cohumulone?: InputMaybe<Scalars['Float']['input']>;
  cohumuloneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  farnesene?: InputMaybe<Scalars['Float']['input']>;
  farneseneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  humulene?: InputMaybe<Scalars['Float']['input']>;
  humuleneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  myrcene?: InputMaybe<Scalars['Float']['input']>;
  myrceneRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  sensoryPanels?: InputMaybe<Array<InputMaybe<UpdateOneHopIngredientSensoryPanelsInput>>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  substitutes?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  totalOil?: InputMaybe<Scalars['Float']['input']>;
  totalOilRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type UpdateOneHopIngredientPayload = {
  __typename?: 'UpdateOneHopIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<HopIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneHopIngredientSensoryPanelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  berry?: InputMaybe<Scalars['Float']['input']>;
  citrus?: InputMaybe<Scalars['Float']['input']>;
  earthy?: InputMaybe<Scalars['Float']['input']>;
  floral?: InputMaybe<Scalars['Float']['input']>;
  grassy?: InputMaybe<Scalars['Float']['input']>;
  herbal?: InputMaybe<Scalars['Float']['input']>;
  melon?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pomme?: InputMaybe<Scalars['Float']['input']>;
  spicy?: InputMaybe<Scalars['Float']['input']>;
  stoneFruit?: InputMaybe<Scalars['Float']['input']>;
  sweetAromatic?: InputMaybe<Scalars['Float']['input']>;
  tropical?: InputMaybe<Scalars['Float']['input']>;
  vegetal?: InputMaybe<Scalars['Float']['input']>;
  woody?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneOtherIngredientInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneOtherIngredientPayload = {
  __typename?: 'UpdateOneOtherIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<OtherIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneStyleInput = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  aroma?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<EnumStyleCategory>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comparison?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  examples?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  mouthfeel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['String']['input']>;
  vitals?: InputMaybe<UpdateOneStyleVitalsInput>;
};

export type UpdateOneStylePayload = {
  __typename?: 'UpdateOneStylePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Style>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneStyleSubCategoryInput = {
  category?: InputMaybe<EnumStyleSubCategoryCategory>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneStyleSubCategoryPayload = {
  __typename?: 'UpdateOneStyleSubCategoryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<StyleSubCategory>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneStyleVitalsAbvInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneStyleVitalsFgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneStyleVitalsIbuInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneStyleVitalsInput = {
  abv?: InputMaybe<UpdateOneStyleVitalsAbvInput>;
  fg?: InputMaybe<UpdateOneStyleVitalsFgInput>;
  ibu?: InputMaybe<UpdateOneStyleVitalsIbuInput>;
  og?: InputMaybe<UpdateOneStyleVitalsOgInput>;
  srm?: InputMaybe<UpdateOneStyleVitalsSrmInput>;
};

export type UpdateOneStyleVitalsOgInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneStyleVitalsSrmInput = {
  flexible?: InputMaybe<Scalars['Boolean']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneYeastIngredientInput = {
  attenuation?: InputMaybe<Scalars['Float']['input']>;
  flocculation?: InputMaybe<EnumYeastIngredientFlocculation>;
  tolerance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneYeastIngredientPayload = {
  __typename?: 'UpdateOneYeastIngredientPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<YeastIngredient>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']['output']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']['output'];
  /** Validation error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']['output']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type YeastIngredient = {
  __typename?: 'YeastIngredient';
  _id: Scalars['MongoID']['output'];
  attenuation?: Maybe<Scalars['Float']['output']>;
  flocculation?: Maybe<EnumYeastIngredientFlocculation>;
  tolerance?: Maybe<Scalars['Float']['output']>;
  /** URL */
  urlString?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  ErrorInterface: ( MongoError ) | ( RuntimeError ) | ( ValidationError );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateOneFermentableIngredientInput: CreateOneFermentableIngredientInput;
  CreateOneFermentableIngredientPayload: ResolverTypeWrapper<CreateOneFermentableIngredientPayload>;
  CreateOneHopIngredientInput: CreateOneHopIngredientInput;
  CreateOneHopIngredientPayload: ResolverTypeWrapper<CreateOneHopIngredientPayload>;
  CreateOneOtherIngredientInput: CreateOneOtherIngredientInput;
  CreateOneOtherIngredientPayload: ResolverTypeWrapper<CreateOneOtherIngredientPayload>;
  CreateOneStyleInput: CreateOneStyleInput;
  CreateOneStylePayload: ResolverTypeWrapper<CreateOneStylePayload>;
  CreateOneStyleSubCategoryInput: CreateOneStyleSubCategoryInput;
  CreateOneStyleSubCategoryPayload: ResolverTypeWrapper<CreateOneStyleSubCategoryPayload>;
  CreateOneYeastIngredientInput: CreateOneYeastIngredientInput;
  CreateOneYeastIngredientPayload: ResolverTypeWrapper<CreateOneYeastIngredientPayload>;
  EnumStyleCategory: EnumStyleCategory;
  EnumStyleSubCategoryCategory: EnumStyleSubCategoryCategory;
  EnumYeastIngredientFlocculation: EnumYeastIngredientFlocculation;
  ErrorInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ErrorInterface']>;
  FermentableIngredient: ResolverTypeWrapper<FermentableIngredient>;
  FilterFindManyFermentableIngredientInput: FilterFindManyFermentableIngredientInput;
  FilterFindManyFermentableIngredientOperatorsInput: FilterFindManyFermentableIngredientOperatorsInput;
  FilterFindManyFermentableIngredient_idOperatorsInput: FilterFindManyFermentableIngredient_IdOperatorsInput;
  FilterFindManyHopIngredientInput: FilterFindManyHopIngredientInput;
  FilterFindManyHopIngredientOperatorsInput: FilterFindManyHopIngredientOperatorsInput;
  FilterFindManyHopIngredientSensoryPanelsInput: FilterFindManyHopIngredientSensoryPanelsInput;
  FilterFindManyHopIngredient_idOperatorsInput: FilterFindManyHopIngredient_IdOperatorsInput;
  FilterFindManyOtherIngredientInput: FilterFindManyOtherIngredientInput;
  FilterFindManyOtherIngredientOperatorsInput: FilterFindManyOtherIngredientOperatorsInput;
  FilterFindManyOtherIngredient_idOperatorsInput: FilterFindManyOtherIngredient_IdOperatorsInput;
  FilterFindManyStyleInput: FilterFindManyStyleInput;
  FilterFindManyStyleOperatorsInput: FilterFindManyStyleOperatorsInput;
  FilterFindManyStyleSubCategoryInput: FilterFindManyStyleSubCategoryInput;
  FilterFindManyStyleSubCategoryOperatorsInput: FilterFindManyStyleSubCategoryOperatorsInput;
  FilterFindManyStyleSubCategory_idOperatorsInput: FilterFindManyStyleSubCategory_IdOperatorsInput;
  FilterFindManyStyleSubcategoryIdOperatorsInput: FilterFindManyStyleSubcategoryIdOperatorsInput;
  FilterFindManyStyleVitalsAbvInput: FilterFindManyStyleVitalsAbvInput;
  FilterFindManyStyleVitalsFgInput: FilterFindManyStyleVitalsFgInput;
  FilterFindManyStyleVitalsIbuInput: FilterFindManyStyleVitalsIbuInput;
  FilterFindManyStyleVitalsInput: FilterFindManyStyleVitalsInput;
  FilterFindManyStyleVitalsOgInput: FilterFindManyStyleVitalsOgInput;
  FilterFindManyStyleVitalsSrmInput: FilterFindManyStyleVitalsSrmInput;
  FilterFindManyStyle_idOperatorsInput: FilterFindManyStyle_IdOperatorsInput;
  FilterFindManyYeastIngredientInput: FilterFindManyYeastIngredientInput;
  FilterFindManyYeastIngredientOperatorsInput: FilterFindManyYeastIngredientOperatorsInput;
  FilterFindManyYeastIngredient_idOperatorsInput: FilterFindManyYeastIngredient_IdOperatorsInput;
  FilterFindOneFermentableIngredientInput: FilterFindOneFermentableIngredientInput;
  FilterFindOneFermentableIngredientOperatorsInput: FilterFindOneFermentableIngredientOperatorsInput;
  FilterFindOneFermentableIngredient_idOperatorsInput: FilterFindOneFermentableIngredient_IdOperatorsInput;
  FilterFindOneHopIngredientInput: FilterFindOneHopIngredientInput;
  FilterFindOneHopIngredientOperatorsInput: FilterFindOneHopIngredientOperatorsInput;
  FilterFindOneHopIngredientSensoryPanelsInput: FilterFindOneHopIngredientSensoryPanelsInput;
  FilterFindOneHopIngredient_idOperatorsInput: FilterFindOneHopIngredient_IdOperatorsInput;
  FilterFindOneOtherIngredientInput: FilterFindOneOtherIngredientInput;
  FilterFindOneOtherIngredientOperatorsInput: FilterFindOneOtherIngredientOperatorsInput;
  FilterFindOneOtherIngredient_idOperatorsInput: FilterFindOneOtherIngredient_IdOperatorsInput;
  FilterFindOneStyleInput: FilterFindOneStyleInput;
  FilterFindOneStyleOperatorsInput: FilterFindOneStyleOperatorsInput;
  FilterFindOneStyleSubCategoryInput: FilterFindOneStyleSubCategoryInput;
  FilterFindOneStyleSubCategoryOperatorsInput: FilterFindOneStyleSubCategoryOperatorsInput;
  FilterFindOneStyleSubCategory_idOperatorsInput: FilterFindOneStyleSubCategory_IdOperatorsInput;
  FilterFindOneStyleSubcategoryIdOperatorsInput: FilterFindOneStyleSubcategoryIdOperatorsInput;
  FilterFindOneStyleVitalsAbvInput: FilterFindOneStyleVitalsAbvInput;
  FilterFindOneStyleVitalsFgInput: FilterFindOneStyleVitalsFgInput;
  FilterFindOneStyleVitalsIbuInput: FilterFindOneStyleVitalsIbuInput;
  FilterFindOneStyleVitalsInput: FilterFindOneStyleVitalsInput;
  FilterFindOneStyleVitalsOgInput: FilterFindOneStyleVitalsOgInput;
  FilterFindOneStyleVitalsSrmInput: FilterFindOneStyleVitalsSrmInput;
  FilterFindOneStyle_idOperatorsInput: FilterFindOneStyle_IdOperatorsInput;
  FilterFindOneYeastIngredientInput: FilterFindOneYeastIngredientInput;
  FilterFindOneYeastIngredientOperatorsInput: FilterFindOneYeastIngredientOperatorsInput;
  FilterFindOneYeastIngredient_idOperatorsInput: FilterFindOneYeastIngredient_IdOperatorsInput;
  FilterUpdateOneFermentableIngredientInput: FilterUpdateOneFermentableIngredientInput;
  FilterUpdateOneFermentableIngredientOperatorsInput: FilterUpdateOneFermentableIngredientOperatorsInput;
  FilterUpdateOneFermentableIngredient_idOperatorsInput: FilterUpdateOneFermentableIngredient_IdOperatorsInput;
  FilterUpdateOneHopIngredientInput: FilterUpdateOneHopIngredientInput;
  FilterUpdateOneHopIngredientOperatorsInput: FilterUpdateOneHopIngredientOperatorsInput;
  FilterUpdateOneHopIngredientSensoryPanelsInput: FilterUpdateOneHopIngredientSensoryPanelsInput;
  FilterUpdateOneHopIngredient_idOperatorsInput: FilterUpdateOneHopIngredient_IdOperatorsInput;
  FilterUpdateOneOtherIngredientInput: FilterUpdateOneOtherIngredientInput;
  FilterUpdateOneOtherIngredientOperatorsInput: FilterUpdateOneOtherIngredientOperatorsInput;
  FilterUpdateOneOtherIngredient_idOperatorsInput: FilterUpdateOneOtherIngredient_IdOperatorsInput;
  FilterUpdateOneStyleInput: FilterUpdateOneStyleInput;
  FilterUpdateOneStyleOperatorsInput: FilterUpdateOneStyleOperatorsInput;
  FilterUpdateOneStyleSubCategoryInput: FilterUpdateOneStyleSubCategoryInput;
  FilterUpdateOneStyleSubCategoryOperatorsInput: FilterUpdateOneStyleSubCategoryOperatorsInput;
  FilterUpdateOneStyleSubCategory_idOperatorsInput: FilterUpdateOneStyleSubCategory_IdOperatorsInput;
  FilterUpdateOneStyleSubcategoryIdOperatorsInput: FilterUpdateOneStyleSubcategoryIdOperatorsInput;
  FilterUpdateOneStyleVitalsAbvInput: FilterUpdateOneStyleVitalsAbvInput;
  FilterUpdateOneStyleVitalsFgInput: FilterUpdateOneStyleVitalsFgInput;
  FilterUpdateOneStyleVitalsIbuInput: FilterUpdateOneStyleVitalsIbuInput;
  FilterUpdateOneStyleVitalsInput: FilterUpdateOneStyleVitalsInput;
  FilterUpdateOneStyleVitalsOgInput: FilterUpdateOneStyleVitalsOgInput;
  FilterUpdateOneStyleVitalsSrmInput: FilterUpdateOneStyleVitalsSrmInput;
  FilterUpdateOneStyle_idOperatorsInput: FilterUpdateOneStyle_IdOperatorsInput;
  FilterUpdateOneYeastIngredientInput: FilterUpdateOneYeastIngredientInput;
  FilterUpdateOneYeastIngredientOperatorsInput: FilterUpdateOneYeastIngredientOperatorsInput;
  FilterUpdateOneYeastIngredient_idOperatorsInput: FilterUpdateOneYeastIngredient_IdOperatorsInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HopIngredient: ResolverTypeWrapper<HopIngredient>;
  HopIngredientSensoryPanels: ResolverTypeWrapper<HopIngredientSensoryPanels>;
  HopIngredientSensoryPanelsInput: HopIngredientSensoryPanelsInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  MongoError: ResolverTypeWrapper<MongoError>;
  MongoID: ResolverTypeWrapper<Scalars['MongoID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OtherIngredient: ResolverTypeWrapper<OtherIngredient>;
  Query: ResolverTypeWrapper<{}>;
  RegExpAsString: ResolverTypeWrapper<Scalars['RegExpAsString']['output']>;
  RuntimeError: ResolverTypeWrapper<RuntimeError>;
  SortFindManyFermentableIngredientInput: SortFindManyFermentableIngredientInput;
  SortFindManyHopIngredientInput: SortFindManyHopIngredientInput;
  SortFindManyOtherIngredientInput: SortFindManyOtherIngredientInput;
  SortFindManyStyleInput: SortFindManyStyleInput;
  SortFindManyStyleSubCategoryInput: SortFindManyStyleSubCategoryInput;
  SortFindManyYeastIngredientInput: SortFindManyYeastIngredientInput;
  SortFindOneFermentableIngredientInput: SortFindOneFermentableIngredientInput;
  SortFindOneHopIngredientInput: SortFindOneHopIngredientInput;
  SortFindOneOtherIngredientInput: SortFindOneOtherIngredientInput;
  SortFindOneStyleInput: SortFindOneStyleInput;
  SortFindOneStyleSubCategoryInput: SortFindOneStyleSubCategoryInput;
  SortFindOneYeastIngredientInput: SortFindOneYeastIngredientInput;
  SortUpdateOneFermentableIngredientInput: SortUpdateOneFermentableIngredientInput;
  SortUpdateOneHopIngredientInput: SortUpdateOneHopIngredientInput;
  SortUpdateOneOtherIngredientInput: SortUpdateOneOtherIngredientInput;
  SortUpdateOneStyleInput: SortUpdateOneStyleInput;
  SortUpdateOneStyleSubCategoryInput: SortUpdateOneStyleSubCategoryInput;
  SortUpdateOneYeastIngredientInput: SortUpdateOneYeastIngredientInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Style: ResolverTypeWrapper<Style>;
  StyleSubCategory: ResolverTypeWrapper<StyleSubCategory>;
  StyleVitals: ResolverTypeWrapper<StyleVitals>;
  StyleVitalsAbv: ResolverTypeWrapper<StyleVitalsAbv>;
  StyleVitalsAbvInput: StyleVitalsAbvInput;
  StyleVitalsFg: ResolverTypeWrapper<StyleVitalsFg>;
  StyleVitalsFgInput: StyleVitalsFgInput;
  StyleVitalsIbu: ResolverTypeWrapper<StyleVitalsIbu>;
  StyleVitalsIbuInput: StyleVitalsIbuInput;
  StyleVitalsInput: StyleVitalsInput;
  StyleVitalsOg: ResolverTypeWrapper<StyleVitalsOg>;
  StyleVitalsOgInput: StyleVitalsOgInput;
  StyleVitalsSrm: ResolverTypeWrapper<StyleVitalsSrm>;
  StyleVitalsSrmInput: StyleVitalsSrmInput;
  UpdateOneFermentableIngredientInput: UpdateOneFermentableIngredientInput;
  UpdateOneFermentableIngredientPayload: ResolverTypeWrapper<UpdateOneFermentableIngredientPayload>;
  UpdateOneHopIngredientInput: UpdateOneHopIngredientInput;
  UpdateOneHopIngredientPayload: ResolverTypeWrapper<UpdateOneHopIngredientPayload>;
  UpdateOneHopIngredientSensoryPanelsInput: UpdateOneHopIngredientSensoryPanelsInput;
  UpdateOneOtherIngredientInput: UpdateOneOtherIngredientInput;
  UpdateOneOtherIngredientPayload: ResolverTypeWrapper<UpdateOneOtherIngredientPayload>;
  UpdateOneStyleInput: UpdateOneStyleInput;
  UpdateOneStylePayload: ResolverTypeWrapper<UpdateOneStylePayload>;
  UpdateOneStyleSubCategoryInput: UpdateOneStyleSubCategoryInput;
  UpdateOneStyleSubCategoryPayload: ResolverTypeWrapper<UpdateOneStyleSubCategoryPayload>;
  UpdateOneStyleVitalsAbvInput: UpdateOneStyleVitalsAbvInput;
  UpdateOneStyleVitalsFgInput: UpdateOneStyleVitalsFgInput;
  UpdateOneStyleVitalsIbuInput: UpdateOneStyleVitalsIbuInput;
  UpdateOneStyleVitalsInput: UpdateOneStyleVitalsInput;
  UpdateOneStyleVitalsOgInput: UpdateOneStyleVitalsOgInput;
  UpdateOneStyleVitalsSrmInput: UpdateOneStyleVitalsSrmInput;
  UpdateOneYeastIngredientInput: UpdateOneYeastIngredientInput;
  UpdateOneYeastIngredientPayload: ResolverTypeWrapper<UpdateOneYeastIngredientPayload>;
  ValidationError: ResolverTypeWrapper<ValidationError>;
  ValidatorError: ResolverTypeWrapper<ValidatorError>;
  YeastIngredient: ResolverTypeWrapper<YeastIngredient>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  CreateOneFermentableIngredientInput: CreateOneFermentableIngredientInput;
  CreateOneFermentableIngredientPayload: CreateOneFermentableIngredientPayload;
  CreateOneHopIngredientInput: CreateOneHopIngredientInput;
  CreateOneHopIngredientPayload: CreateOneHopIngredientPayload;
  CreateOneOtherIngredientInput: CreateOneOtherIngredientInput;
  CreateOneOtherIngredientPayload: CreateOneOtherIngredientPayload;
  CreateOneStyleInput: CreateOneStyleInput;
  CreateOneStylePayload: CreateOneStylePayload;
  CreateOneStyleSubCategoryInput: CreateOneStyleSubCategoryInput;
  CreateOneStyleSubCategoryPayload: CreateOneStyleSubCategoryPayload;
  CreateOneYeastIngredientInput: CreateOneYeastIngredientInput;
  CreateOneYeastIngredientPayload: CreateOneYeastIngredientPayload;
  ErrorInterface: ResolversInterfaceTypes<ResolversParentTypes>['ErrorInterface'];
  FermentableIngredient: FermentableIngredient;
  FilterFindManyFermentableIngredientInput: FilterFindManyFermentableIngredientInput;
  FilterFindManyFermentableIngredientOperatorsInput: FilterFindManyFermentableIngredientOperatorsInput;
  FilterFindManyFermentableIngredient_idOperatorsInput: FilterFindManyFermentableIngredient_IdOperatorsInput;
  FilterFindManyHopIngredientInput: FilterFindManyHopIngredientInput;
  FilterFindManyHopIngredientOperatorsInput: FilterFindManyHopIngredientOperatorsInput;
  FilterFindManyHopIngredientSensoryPanelsInput: FilterFindManyHopIngredientSensoryPanelsInput;
  FilterFindManyHopIngredient_idOperatorsInput: FilterFindManyHopIngredient_IdOperatorsInput;
  FilterFindManyOtherIngredientInput: FilterFindManyOtherIngredientInput;
  FilterFindManyOtherIngredientOperatorsInput: FilterFindManyOtherIngredientOperatorsInput;
  FilterFindManyOtherIngredient_idOperatorsInput: FilterFindManyOtherIngredient_IdOperatorsInput;
  FilterFindManyStyleInput: FilterFindManyStyleInput;
  FilterFindManyStyleOperatorsInput: FilterFindManyStyleOperatorsInput;
  FilterFindManyStyleSubCategoryInput: FilterFindManyStyleSubCategoryInput;
  FilterFindManyStyleSubCategoryOperatorsInput: FilterFindManyStyleSubCategoryOperatorsInput;
  FilterFindManyStyleSubCategory_idOperatorsInput: FilterFindManyStyleSubCategory_IdOperatorsInput;
  FilterFindManyStyleSubcategoryIdOperatorsInput: FilterFindManyStyleSubcategoryIdOperatorsInput;
  FilterFindManyStyleVitalsAbvInput: FilterFindManyStyleVitalsAbvInput;
  FilterFindManyStyleVitalsFgInput: FilterFindManyStyleVitalsFgInput;
  FilterFindManyStyleVitalsIbuInput: FilterFindManyStyleVitalsIbuInput;
  FilterFindManyStyleVitalsInput: FilterFindManyStyleVitalsInput;
  FilterFindManyStyleVitalsOgInput: FilterFindManyStyleVitalsOgInput;
  FilterFindManyStyleVitalsSrmInput: FilterFindManyStyleVitalsSrmInput;
  FilterFindManyStyle_idOperatorsInput: FilterFindManyStyle_IdOperatorsInput;
  FilterFindManyYeastIngredientInput: FilterFindManyYeastIngredientInput;
  FilterFindManyYeastIngredientOperatorsInput: FilterFindManyYeastIngredientOperatorsInput;
  FilterFindManyYeastIngredient_idOperatorsInput: FilterFindManyYeastIngredient_IdOperatorsInput;
  FilterFindOneFermentableIngredientInput: FilterFindOneFermentableIngredientInput;
  FilterFindOneFermentableIngredientOperatorsInput: FilterFindOneFermentableIngredientOperatorsInput;
  FilterFindOneFermentableIngredient_idOperatorsInput: FilterFindOneFermentableIngredient_IdOperatorsInput;
  FilterFindOneHopIngredientInput: FilterFindOneHopIngredientInput;
  FilterFindOneHopIngredientOperatorsInput: FilterFindOneHopIngredientOperatorsInput;
  FilterFindOneHopIngredientSensoryPanelsInput: FilterFindOneHopIngredientSensoryPanelsInput;
  FilterFindOneHopIngredient_idOperatorsInput: FilterFindOneHopIngredient_IdOperatorsInput;
  FilterFindOneOtherIngredientInput: FilterFindOneOtherIngredientInput;
  FilterFindOneOtherIngredientOperatorsInput: FilterFindOneOtherIngredientOperatorsInput;
  FilterFindOneOtherIngredient_idOperatorsInput: FilterFindOneOtherIngredient_IdOperatorsInput;
  FilterFindOneStyleInput: FilterFindOneStyleInput;
  FilterFindOneStyleOperatorsInput: FilterFindOneStyleOperatorsInput;
  FilterFindOneStyleSubCategoryInput: FilterFindOneStyleSubCategoryInput;
  FilterFindOneStyleSubCategoryOperatorsInput: FilterFindOneStyleSubCategoryOperatorsInput;
  FilterFindOneStyleSubCategory_idOperatorsInput: FilterFindOneStyleSubCategory_IdOperatorsInput;
  FilterFindOneStyleSubcategoryIdOperatorsInput: FilterFindOneStyleSubcategoryIdOperatorsInput;
  FilterFindOneStyleVitalsAbvInput: FilterFindOneStyleVitalsAbvInput;
  FilterFindOneStyleVitalsFgInput: FilterFindOneStyleVitalsFgInput;
  FilterFindOneStyleVitalsIbuInput: FilterFindOneStyleVitalsIbuInput;
  FilterFindOneStyleVitalsInput: FilterFindOneStyleVitalsInput;
  FilterFindOneStyleVitalsOgInput: FilterFindOneStyleVitalsOgInput;
  FilterFindOneStyleVitalsSrmInput: FilterFindOneStyleVitalsSrmInput;
  FilterFindOneStyle_idOperatorsInput: FilterFindOneStyle_IdOperatorsInput;
  FilterFindOneYeastIngredientInput: FilterFindOneYeastIngredientInput;
  FilterFindOneYeastIngredientOperatorsInput: FilterFindOneYeastIngredientOperatorsInput;
  FilterFindOneYeastIngredient_idOperatorsInput: FilterFindOneYeastIngredient_IdOperatorsInput;
  FilterUpdateOneFermentableIngredientInput: FilterUpdateOneFermentableIngredientInput;
  FilterUpdateOneFermentableIngredientOperatorsInput: FilterUpdateOneFermentableIngredientOperatorsInput;
  FilterUpdateOneFermentableIngredient_idOperatorsInput: FilterUpdateOneFermentableIngredient_IdOperatorsInput;
  FilterUpdateOneHopIngredientInput: FilterUpdateOneHopIngredientInput;
  FilterUpdateOneHopIngredientOperatorsInput: FilterUpdateOneHopIngredientOperatorsInput;
  FilterUpdateOneHopIngredientSensoryPanelsInput: FilterUpdateOneHopIngredientSensoryPanelsInput;
  FilterUpdateOneHopIngredient_idOperatorsInput: FilterUpdateOneHopIngredient_IdOperatorsInput;
  FilterUpdateOneOtherIngredientInput: FilterUpdateOneOtherIngredientInput;
  FilterUpdateOneOtherIngredientOperatorsInput: FilterUpdateOneOtherIngredientOperatorsInput;
  FilterUpdateOneOtherIngredient_idOperatorsInput: FilterUpdateOneOtherIngredient_IdOperatorsInput;
  FilterUpdateOneStyleInput: FilterUpdateOneStyleInput;
  FilterUpdateOneStyleOperatorsInput: FilterUpdateOneStyleOperatorsInput;
  FilterUpdateOneStyleSubCategoryInput: FilterUpdateOneStyleSubCategoryInput;
  FilterUpdateOneStyleSubCategoryOperatorsInput: FilterUpdateOneStyleSubCategoryOperatorsInput;
  FilterUpdateOneStyleSubCategory_idOperatorsInput: FilterUpdateOneStyleSubCategory_IdOperatorsInput;
  FilterUpdateOneStyleSubcategoryIdOperatorsInput: FilterUpdateOneStyleSubcategoryIdOperatorsInput;
  FilterUpdateOneStyleVitalsAbvInput: FilterUpdateOneStyleVitalsAbvInput;
  FilterUpdateOneStyleVitalsFgInput: FilterUpdateOneStyleVitalsFgInput;
  FilterUpdateOneStyleVitalsIbuInput: FilterUpdateOneStyleVitalsIbuInput;
  FilterUpdateOneStyleVitalsInput: FilterUpdateOneStyleVitalsInput;
  FilterUpdateOneStyleVitalsOgInput: FilterUpdateOneStyleVitalsOgInput;
  FilterUpdateOneStyleVitalsSrmInput: FilterUpdateOneStyleVitalsSrmInput;
  FilterUpdateOneStyle_idOperatorsInput: FilterUpdateOneStyle_IdOperatorsInput;
  FilterUpdateOneYeastIngredientInput: FilterUpdateOneYeastIngredientInput;
  FilterUpdateOneYeastIngredientOperatorsInput: FilterUpdateOneYeastIngredientOperatorsInput;
  FilterUpdateOneYeastIngredient_idOperatorsInput: FilterUpdateOneYeastIngredient_IdOperatorsInput;
  Float: Scalars['Float']['output'];
  HopIngredient: HopIngredient;
  HopIngredientSensoryPanels: HopIngredientSensoryPanels;
  HopIngredientSensoryPanelsInput: HopIngredientSensoryPanelsInput;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  MongoError: MongoError;
  MongoID: Scalars['MongoID']['output'];
  Mutation: {};
  OtherIngredient: OtherIngredient;
  Query: {};
  RegExpAsString: Scalars['RegExpAsString']['output'];
  RuntimeError: RuntimeError;
  String: Scalars['String']['output'];
  Style: Style;
  StyleSubCategory: StyleSubCategory;
  StyleVitals: StyleVitals;
  StyleVitalsAbv: StyleVitalsAbv;
  StyleVitalsAbvInput: StyleVitalsAbvInput;
  StyleVitalsFg: StyleVitalsFg;
  StyleVitalsFgInput: StyleVitalsFgInput;
  StyleVitalsIbu: StyleVitalsIbu;
  StyleVitalsIbuInput: StyleVitalsIbuInput;
  StyleVitalsInput: StyleVitalsInput;
  StyleVitalsOg: StyleVitalsOg;
  StyleVitalsOgInput: StyleVitalsOgInput;
  StyleVitalsSrm: StyleVitalsSrm;
  StyleVitalsSrmInput: StyleVitalsSrmInput;
  UpdateOneFermentableIngredientInput: UpdateOneFermentableIngredientInput;
  UpdateOneFermentableIngredientPayload: UpdateOneFermentableIngredientPayload;
  UpdateOneHopIngredientInput: UpdateOneHopIngredientInput;
  UpdateOneHopIngredientPayload: UpdateOneHopIngredientPayload;
  UpdateOneHopIngredientSensoryPanelsInput: UpdateOneHopIngredientSensoryPanelsInput;
  UpdateOneOtherIngredientInput: UpdateOneOtherIngredientInput;
  UpdateOneOtherIngredientPayload: UpdateOneOtherIngredientPayload;
  UpdateOneStyleInput: UpdateOneStyleInput;
  UpdateOneStylePayload: UpdateOneStylePayload;
  UpdateOneStyleSubCategoryInput: UpdateOneStyleSubCategoryInput;
  UpdateOneStyleSubCategoryPayload: UpdateOneStyleSubCategoryPayload;
  UpdateOneStyleVitalsAbvInput: UpdateOneStyleVitalsAbvInput;
  UpdateOneStyleVitalsFgInput: UpdateOneStyleVitalsFgInput;
  UpdateOneStyleVitalsIbuInput: UpdateOneStyleVitalsIbuInput;
  UpdateOneStyleVitalsInput: UpdateOneStyleVitalsInput;
  UpdateOneStyleVitalsOgInput: UpdateOneStyleVitalsOgInput;
  UpdateOneStyleVitalsSrmInput: UpdateOneStyleVitalsSrmInput;
  UpdateOneYeastIngredientInput: UpdateOneYeastIngredientInput;
  UpdateOneYeastIngredientPayload: UpdateOneYeastIngredientPayload;
  ValidationError: ValidationError;
  ValidatorError: ValidatorError;
  YeastIngredient: YeastIngredient;
}>;

export type CreateOneFermentableIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneFermentableIngredientPayload'] = ResolversParentTypes['CreateOneFermentableIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['FermentableIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneHopIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneHopIngredientPayload'] = ResolversParentTypes['CreateOneHopIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['HopIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneOtherIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneOtherIngredientPayload'] = ResolversParentTypes['CreateOneOtherIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['OtherIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneStylePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneStylePayload'] = ResolversParentTypes['CreateOneStylePayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['Style']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneStyleSubCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneStyleSubCategoryPayload'] = ResolversParentTypes['CreateOneStyleSubCategoryPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['StyleSubCategory']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneYeastIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOneYeastIngredientPayload'] = ResolversParentTypes['CreateOneYeastIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['YeastIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorInterface'] = ResolversParentTypes['ErrorInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MongoError' | 'RuntimeError' | 'ValidationError', ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type FermentableIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['FermentableIngredient'] = ResolversParentTypes['FermentableIngredient']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxUsage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  potential?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  power?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HopIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['HopIngredient'] = ResolversParentTypes['HopIngredient']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  alpha?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  alphaRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  caryophyllene?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  caryophylleneRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  cohumulone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cohumuloneRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  farnesene?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  farneseneRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  flavor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  humulene?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humuleneRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  myrcene?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  myrceneRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sensoryPanels?: Resolver<Maybe<Array<Maybe<ResolversTypes['HopIngredientSensoryPanels']>>>, ParentType, ContextType>;
  styles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  substitutes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MongoID']>>>, ParentType, ContextType>;
  totalOil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalOilRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<ResolversTypes['MongoID']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HopIngredientSensoryPanelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HopIngredientSensoryPanels'] = ResolversParentTypes['HopIngredientSensoryPanels']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  berry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  citrus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earthy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  floral?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grassy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  herbal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  melon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pomme?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  spicy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stoneFruit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sweetAromatic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tropical?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vegetal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  woody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MongoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MongoError'] = ResolversParentTypes['MongoError']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MongoIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MongoID'], any> {
  name: 'MongoID';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  fermentableCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneFermentableIngredientPayload']>, ParentType, ContextType, RequireFields<MutationFermentableCreateOneArgs, 'record'>>;
  fermentableUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneFermentableIngredientPayload']>, ParentType, ContextType, RequireFields<MutationFermentableUpdateOneArgs, 'record'>>;
  hopCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneHopIngredientPayload']>, ParentType, ContextType, RequireFields<MutationHopCreateOneArgs, 'record'>>;
  hopUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneHopIngredientPayload']>, ParentType, ContextType, RequireFields<MutationHopUpdateOneArgs, 'record'>>;
  otherCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneOtherIngredientPayload']>, ParentType, ContextType, RequireFields<MutationOtherCreateOneArgs, 'record'>>;
  otherUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneOtherIngredientPayload']>, ParentType, ContextType, RequireFields<MutationOtherUpdateOneArgs, 'record'>>;
  styleCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneStylePayload']>, ParentType, ContextType, RequireFields<MutationStyleCreateOneArgs, 'record'>>;
  styleSubCategoryCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneStyleSubCategoryPayload']>, ParentType, ContextType, RequireFields<MutationStyleSubCategoryCreateOneArgs, 'record'>>;
  styleSubCategoryUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneStyleSubCategoryPayload']>, ParentType, ContextType, RequireFields<MutationStyleSubCategoryUpdateOneArgs, 'record'>>;
  styleUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneStylePayload']>, ParentType, ContextType, RequireFields<MutationStyleUpdateOneArgs, 'record'>>;
  yeastCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneYeastIngredientPayload']>, ParentType, ContextType, RequireFields<MutationYeastCreateOneArgs, 'record'>>;
  yeastUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneYeastIngredientPayload']>, ParentType, ContextType, RequireFields<MutationYeastUpdateOneArgs, 'record'>>;
}>;

export type OtherIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['OtherIngredient'] = ResolversParentTypes['OtherIngredient']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fermentable?: Resolver<Maybe<ResolversTypes['FermentableIngredient']>, ParentType, ContextType, Partial<QueryFermentableArgs>>;
  fermentables?: Resolver<Array<ResolversTypes['FermentableIngredient']>, ParentType, ContextType, RequireFields<QueryFermentablesArgs, 'limit'>>;
  hop?: Resolver<Maybe<ResolversTypes['HopIngredient']>, ParentType, ContextType, Partial<QueryHopArgs>>;
  hops?: Resolver<Array<ResolversTypes['HopIngredient']>, ParentType, ContextType, RequireFields<QueryHopsArgs, 'limit'>>;
  other?: Resolver<Maybe<ResolversTypes['OtherIngredient']>, ParentType, ContextType, Partial<QueryOtherArgs>>;
  others?: Resolver<Array<ResolversTypes['OtherIngredient']>, ParentType, ContextType, RequireFields<QueryOthersArgs, 'limit'>>;
  style?: Resolver<Maybe<ResolversTypes['Style']>, ParentType, ContextType, Partial<QueryStyleArgs>>;
  styles?: Resolver<Array<ResolversTypes['Style']>, ParentType, ContextType, RequireFields<QueryStylesArgs, 'limit'>>;
  stylesubcategories?: Resolver<Array<ResolversTypes['StyleSubCategory']>, ParentType, ContextType, RequireFields<QueryStylesubcategoriesArgs, 'limit'>>;
  stylesubcategory?: Resolver<Maybe<ResolversTypes['StyleSubCategory']>, ParentType, ContextType, Partial<QueryStylesubcategoryArgs>>;
  yeast?: Resolver<Maybe<ResolversTypes['YeastIngredient']>, ParentType, ContextType, Partial<QueryYeastArgs>>;
  yeasts?: Resolver<Array<ResolversTypes['YeastIngredient']>, ParentType, ContextType, RequireFields<QueryYeastsArgs, 'limit'>>;
}>;

export interface RegExpAsStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RegExpAsString'], any> {
  name: 'RegExpAsString';
}

export type RuntimeErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['RuntimeError'] = ResolversParentTypes['RuntimeError']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Style'] = ResolversParentTypes['Style']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  appearance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aroma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['EnumStyleCategory']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comparison?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  examples?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flavor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  history?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mouthfeel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subcategory?: Resolver<Maybe<ResolversTypes['StyleSubCategory']>, ParentType, ContextType, Partial<StyleSubcategoryArgs>>;
  subcategoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vitals?: Resolver<Maybe<ResolversTypes['StyleVitals']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleSubCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleSubCategory'] = ResolversParentTypes['StyleSubCategory']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['EnumStyleSubCategoryCategory']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  styles?: Resolver<Array<ResolversTypes['Style']>, ParentType, ContextType, RequireFields<StyleSubCategoryStylesArgs, 'limit'>>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitals'] = ResolversParentTypes['StyleVitals']> = ResolversObject<{
  abv?: Resolver<Maybe<ResolversTypes['StyleVitalsAbv']>, ParentType, ContextType>;
  fg?: Resolver<Maybe<ResolversTypes['StyleVitalsFg']>, ParentType, ContextType>;
  ibu?: Resolver<Maybe<ResolversTypes['StyleVitalsIbu']>, ParentType, ContextType>;
  og?: Resolver<Maybe<ResolversTypes['StyleVitalsOg']>, ParentType, ContextType>;
  srm?: Resolver<Maybe<ResolversTypes['StyleVitalsSrm']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsAbvResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitalsAbv'] = ResolversParentTypes['StyleVitalsAbv']> = ResolversObject<{
  flexible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsFgResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitalsFg'] = ResolversParentTypes['StyleVitalsFg']> = ResolversObject<{
  flexible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsIbuResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitalsIbu'] = ResolversParentTypes['StyleVitalsIbu']> = ResolversObject<{
  flexible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsOgResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitalsOg'] = ResolversParentTypes['StyleVitalsOg']> = ResolversObject<{
  flexible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StyleVitalsSrmResolvers<ContextType = any, ParentType extends ResolversParentTypes['StyleVitalsSrm'] = ResolversParentTypes['StyleVitalsSrm']> = ResolversObject<{
  flexible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneFermentableIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneFermentableIngredientPayload'] = ResolversParentTypes['UpdateOneFermentableIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['FermentableIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneHopIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneHopIngredientPayload'] = ResolversParentTypes['UpdateOneHopIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['HopIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneOtherIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneOtherIngredientPayload'] = ResolversParentTypes['UpdateOneOtherIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['OtherIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneStylePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneStylePayload'] = ResolversParentTypes['UpdateOneStylePayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['Style']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneStyleSubCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneStyleSubCategoryPayload'] = ResolversParentTypes['UpdateOneStyleSubCategoryPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['StyleSubCategory']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneYeastIngredientPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOneYeastIngredientPayload'] = ResolversParentTypes['UpdateOneYeastIngredientPayload']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['ErrorInterface']>, ParentType, ContextType>;
  record?: Resolver<Maybe<ResolversTypes['YeastIngredient']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidationError'] = ResolversParentTypes['ValidationError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ValidatorError']>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidatorErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidatorError'] = ResolversParentTypes['ValidatorError']> = ResolversObject<{
  idx?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type YeastIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['YeastIngredient'] = ResolversParentTypes['YeastIngredient']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  attenuation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  flocculation?: Resolver<Maybe<ResolversTypes['EnumYeastIngredientFlocculation']>, ParentType, ContextType>;
  tolerance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  urlString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CreateOneFermentableIngredientPayload?: CreateOneFermentableIngredientPayloadResolvers<ContextType>;
  CreateOneHopIngredientPayload?: CreateOneHopIngredientPayloadResolvers<ContextType>;
  CreateOneOtherIngredientPayload?: CreateOneOtherIngredientPayloadResolvers<ContextType>;
  CreateOneStylePayload?: CreateOneStylePayloadResolvers<ContextType>;
  CreateOneStyleSubCategoryPayload?: CreateOneStyleSubCategoryPayloadResolvers<ContextType>;
  CreateOneYeastIngredientPayload?: CreateOneYeastIngredientPayloadResolvers<ContextType>;
  ErrorInterface?: ErrorInterfaceResolvers<ContextType>;
  FermentableIngredient?: FermentableIngredientResolvers<ContextType>;
  HopIngredient?: HopIngredientResolvers<ContextType>;
  HopIngredientSensoryPanels?: HopIngredientSensoryPanelsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  MongoError?: MongoErrorResolvers<ContextType>;
  MongoID?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OtherIngredient?: OtherIngredientResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegExpAsString?: GraphQLScalarType;
  RuntimeError?: RuntimeErrorResolvers<ContextType>;
  Style?: StyleResolvers<ContextType>;
  StyleSubCategory?: StyleSubCategoryResolvers<ContextType>;
  StyleVitals?: StyleVitalsResolvers<ContextType>;
  StyleVitalsAbv?: StyleVitalsAbvResolvers<ContextType>;
  StyleVitalsFg?: StyleVitalsFgResolvers<ContextType>;
  StyleVitalsIbu?: StyleVitalsIbuResolvers<ContextType>;
  StyleVitalsOg?: StyleVitalsOgResolvers<ContextType>;
  StyleVitalsSrm?: StyleVitalsSrmResolvers<ContextType>;
  UpdateOneFermentableIngredientPayload?: UpdateOneFermentableIngredientPayloadResolvers<ContextType>;
  UpdateOneHopIngredientPayload?: UpdateOneHopIngredientPayloadResolvers<ContextType>;
  UpdateOneOtherIngredientPayload?: UpdateOneOtherIngredientPayloadResolvers<ContextType>;
  UpdateOneStylePayload?: UpdateOneStylePayloadResolvers<ContextType>;
  UpdateOneStyleSubCategoryPayload?: UpdateOneStyleSubCategoryPayloadResolvers<ContextType>;
  UpdateOneYeastIngredientPayload?: UpdateOneYeastIngredientPayloadResolvers<ContextType>;
  ValidationError?: ValidationErrorResolvers<ContextType>;
  ValidatorError?: ValidatorErrorResolvers<ContextType>;
  YeastIngredient?: YeastIngredientResolvers<ContextType>;
}>;

