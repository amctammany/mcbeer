import { Fermentable, Hop } from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";
export interface BaseHopType
  extends Omit<OptionalNullable<Hop>, "id" | "userId"> {
  id?: string;
  userId?: string;
}
export interface HopType extends BaseHopType {
  owner?: Partial<BaseUser>;
  origin?: BaseHopType;
  forks?: BaseHopType[];
}
type HopAmountFieldNames =
  | "alpha"
  | "beta"
  | "cohumulone"
  | "myrcene"
  | "humulene"
  | "caryophyllene"
  | "farnesene";
export type AdjustedHopType = AmountFields<HopType, HopAmountFieldNames>;

export interface BaseFermentableType
  extends Omit<OptionalNullable<Fermentable>, "id" | "userId"> {
  id?: string;
  userId?: string;
}
export interface FermentableType extends BaseFermentableType {
  owner?: Partial<BaseUser>;
  origin?: BaseFermentableType;
  forks?: BaseFermentableType[];
}
type FermentableAmountFieldNames =
  | "color"
  | "maxUsage"
  | "moisture"
  | "potential"
  | "friability"
  | "protein";
export type AdjustedFermentableType = AmountFields<
  FermentableType,
  FermentableAmountFieldNames
>;
