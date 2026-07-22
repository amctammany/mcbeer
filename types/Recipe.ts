import {
  HopIngredient,
  Recipe,
  Style,
  FermentableIngredient,
} from "@/generated/prisma/client";
import { BaseUser } from "./User";
import { AmountFields, OptionalNullable } from "@/lib/utils";

export interface BaseRecipeType extends Omit<
  OptionalNullable<Recipe>,
  "id" | "userId" | "fermentableIngredients" | "hopIngredients"
> {
  id?: string;
  userId: string;
}

export interface BaseFermentableIngredientType extends Omit<
  OptionalNullable<FermentableIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}

type FermentableIngredientAmountFieldNames = "amount";
export type AdjustedFermentableIngredientType = AmountFields<
  BaseFermentableIngredientType,
  FermentableIngredientAmountFieldNames
>;

export interface BaseHopIngredientType extends Omit<
  OptionalNullable<HopIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}

type HopIngredientAmountFieldNames = "alpha" | "duration" | "amount";
export type AdjustedHopIngredientType = AmountFields<
  BaseHopIngredientType,
  HopIngredientAmountFieldNames
>;

export interface RecipeType extends BaseRecipeType {
  owner: Partial<BaseUser>;
  style?: Partial<Style> | null;
  origin?: BaseRecipeType;
  forks?: BaseRecipeType[];
  hopIngredients: BaseHopIngredientType[];
  fermentableIngredients: BaseFermentableIngredientType[];
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
> & {
  fermentableIngredients: AdjustedFermentableIngredientType[];
  hopIngredients: AdjustedHopIngredientType[];
};
