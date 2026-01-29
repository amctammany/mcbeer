import {
  Fermentable,
  Hop,
  HopInventoryItem,
  Yeast,
} from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";
export interface BaseHopType extends Omit<
  OptionalNullable<Hop>,
  "id" | "userId" | "hopInventoryItems"
> {
  id?: string;
  userId?: string;
}
type B = Hop["alpha"];
export interface HopType extends BaseHopType {
  alphaRange: [number, number];
  betaRange: [number, number];
  cohumuloneRange: [number, number];
  totalOilRange: [number, number];
  farneseneRange: [number, number];
  bPineneRange: [number, number];
  linaloolRange: [number, number];
  geraniolRange: [number, number];
  caryophylleneRange: [number, number];
  myrceneRange: [number, number];
  humuleneRange: [number, number];
  owner?: Partial<BaseUser>;
  origin?: BaseHopType;
  hopInventoryItems: HopInventoryItem[];
  forks?: BaseHopType[];
}
type HopAmountFieldNames =
  | "alpha"
  | "alphaLow"
  | "alphaHigh"
  | "beta"
  | "cohumulone"
  | "myrcene"
  | "humulene"
  | "caryophyllene"
  | "totalOil"
  | "farnesene";
export type AdjustedHopType = AmountFields<HopType, HopAmountFieldNames>;
export interface BaseYeastType extends Omit<
  OptionalNullable<Yeast>,
  "id" | "userId"
> {
  attenuationRange: [number, number];
  tempRange: [number, number];
  id?: string;
  userId?: string;
}
export interface YeastType extends BaseYeastType {
  owner?: Partial<BaseUser>;
  origin?: BaseYeastType;
  forks?: BaseYeastType[];
}

type YeastAmountFieldNames =
  | "attenuation"
  | "attenuationLow"
  | "attenuationHigh"
  | "tolerance"
  | "tempLow"
  | "tempHigh";
export type AdjustedYeastType = AmountFields<YeastType, YeastAmountFieldNames>;

export interface BaseFermentableType extends Omit<
  OptionalNullable<Fermentable>,
  "id" | "userId"
> {
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
  | "coarseFineDiff"
  | "yield"
  | "protein";
export type AdjustedFermentableType = AmountFields<
  FermentableType,
  FermentableAmountFieldNames
>;
