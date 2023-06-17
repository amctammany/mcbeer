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
  name?: InputMaybe<Scalars['String']['input']>;
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

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
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
  styleCreateOne?: Maybe<CreateOneStylePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  styleSubCategoryCreateOne?: Maybe<CreateOneStyleSubCategoryPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  styleSubCategoryUpdateOne?: Maybe<UpdateOneStyleSubCategoryPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  styleUpdateOne?: Maybe<UpdateOneStylePayload>;
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

export type Query = {
  __typename?: 'Query';
  style?: Maybe<Style>;
  styles: Array<Style>;
  stylesubcategories: Array<StyleSubCategory>;
  stylesubcategory?: Maybe<StyleSubCategory>;
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

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
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
  name?: Maybe<Scalars['String']['output']>;
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
  CreateOneStyleInput: CreateOneStyleInput;
  CreateOneStylePayload: ResolverTypeWrapper<CreateOneStylePayload>;
  CreateOneStyleSubCategoryInput: CreateOneStyleSubCategoryInput;
  CreateOneStyleSubCategoryPayload: ResolverTypeWrapper<CreateOneStyleSubCategoryPayload>;
  EnumStyleCategory: EnumStyleCategory;
  EnumStyleSubCategoryCategory: EnumStyleSubCategoryCategory;
  ErrorInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ErrorInterface']>;
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
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  MongoError: ResolverTypeWrapper<MongoError>;
  MongoID: ResolverTypeWrapper<Scalars['MongoID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RegExpAsString: ResolverTypeWrapper<Scalars['RegExpAsString']['output']>;
  RuntimeError: ResolverTypeWrapper<RuntimeError>;
  SortFindManyStyleInput: SortFindManyStyleInput;
  SortFindManyStyleSubCategoryInput: SortFindManyStyleSubCategoryInput;
  SortFindOneStyleInput: SortFindOneStyleInput;
  SortFindOneStyleSubCategoryInput: SortFindOneStyleSubCategoryInput;
  SortUpdateOneStyleInput: SortUpdateOneStyleInput;
  SortUpdateOneStyleSubCategoryInput: SortUpdateOneStyleSubCategoryInput;
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
  ValidationError: ResolverTypeWrapper<ValidationError>;
  ValidatorError: ResolverTypeWrapper<ValidatorError>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  CreateOneStyleInput: CreateOneStyleInput;
  CreateOneStylePayload: CreateOneStylePayload;
  CreateOneStyleSubCategoryInput: CreateOneStyleSubCategoryInput;
  CreateOneStyleSubCategoryPayload: CreateOneStyleSubCategoryPayload;
  ErrorInterface: ResolversInterfaceTypes<ResolversParentTypes>['ErrorInterface'];
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
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  MongoError: MongoError;
  MongoID: Scalars['MongoID']['output'];
  Mutation: {};
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
  ValidationError: ValidationError;
  ValidatorError: ValidatorError;
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

export type ErrorInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorInterface'] = ResolversParentTypes['ErrorInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MongoError' | 'RuntimeError' | 'ValidationError', ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  styleCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneStylePayload']>, ParentType, ContextType, RequireFields<MutationStyleCreateOneArgs, 'record'>>;
  styleSubCategoryCreateOne?: Resolver<Maybe<ResolversTypes['CreateOneStyleSubCategoryPayload']>, ParentType, ContextType, RequireFields<MutationStyleSubCategoryCreateOneArgs, 'record'>>;
  styleSubCategoryUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneStyleSubCategoryPayload']>, ParentType, ContextType, RequireFields<MutationStyleSubCategoryUpdateOneArgs, 'record'>>;
  styleUpdateOne?: Resolver<Maybe<ResolversTypes['UpdateOneStylePayload']>, ParentType, ContextType, RequireFields<MutationStyleUpdateOneArgs, 'record'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  style?: Resolver<Maybe<ResolversTypes['Style']>, ParentType, ContextType, Partial<QueryStyleArgs>>;
  styles?: Resolver<Array<ResolversTypes['Style']>, ParentType, ContextType, RequireFields<QueryStylesArgs, 'limit'>>;
  stylesubcategories?: Resolver<Array<ResolversTypes['StyleSubCategory']>, ParentType, ContextType, RequireFields<QueryStylesubcategoriesArgs, 'limit'>>;
  stylesubcategory?: Resolver<Maybe<ResolversTypes['StyleSubCategory']>, ParentType, ContextType, Partial<QueryStylesubcategoryArgs>>;
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
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = ResolversObject<{
  CreateOneStylePayload?: CreateOneStylePayloadResolvers<ContextType>;
  CreateOneStyleSubCategoryPayload?: CreateOneStyleSubCategoryPayloadResolvers<ContextType>;
  ErrorInterface?: ErrorInterfaceResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  MongoError?: MongoErrorResolvers<ContextType>;
  MongoID?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
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
  UpdateOneStylePayload?: UpdateOneStylePayloadResolvers<ContextType>;
  UpdateOneStyleSubCategoryPayload?: UpdateOneStyleSubCategoryPayloadResolvers<ContextType>;
  ValidationError?: ValidationErrorResolvers<ContextType>;
  ValidatorError?: ValidatorErrorResolvers<ContextType>;
}>;

