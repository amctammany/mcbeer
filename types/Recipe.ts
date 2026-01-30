import { Recipe } from "@/generated/prisma/client";
import { BaseUser } from "./User";
import { AmountFields, OptionalNullable } from "@/lib/utils";

export interface BaseRecipe extends Omit<
  OptionalNullable<Recipe>,
  "id" | "userId" | "fermentableIngredients" | "hopIngredients"
> {
  id?: string;
  userId: string;
}
export interface RecipeType extends BaseRecipe {
  owner: Partial<BaseUser>;
  origin?: BaseRecipe;
  forks?: BaseRecipe[];
}
type RecipeAmountFieldNames =
  | "boilTime"
  | "boilVolume"
  | "preboilVolume"
  | "brewEfficiency"
  | "mashEfficiency"
  | "batchVolume"
  | "trubLoss"
  | "mashLoss"
  | "fermenterLoss";
export type AdjustedRecipeType = AmountFields<
  RecipeType,
  RecipeAmountFieldNames
>;
