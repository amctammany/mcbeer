import { Fermentable } from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";

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
  | "friability"
  | "protein";
export type AdjustedFermentableType = AmountFields<
  FermentableType,
  FermentableAmountFieldNames
>;
