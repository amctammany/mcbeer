import {
  HopIngredient,
  Recipe,
  Style,
  FermentableIngredient,
  YeastIngredient,
} from "@/generated/prisma/client";
import { BaseUser } from "./User";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { FermentableType, HopType, YeastType } from "./Ingredient";

export interface BaseRecipeType extends Omit<
  OptionalNullable<Recipe>,
  "id" | "userId" | "fermentableIngredients" | "hopIngredients"
> {
  id?: string;
  userId: string;
}
export interface BaseYeastIngredientType extends Omit<
  OptionalNullable<YeastIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}

type YeastIngredientAmountFieldNames = "amount" | "attenuation";
export type AdjustedYeastIngredientType = AmountFields<
  BaseYeastIngredientType,
  YeastIngredientAmountFieldNames
>;
export type ExtendedYeastIngredientType = AdjustedYeastIngredientType & {
  yeast?: Partial<YeastType>;
};

export interface BaseFermentableIngredientType extends Omit<
  OptionalNullable<FermentableIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}

type FermentableIngredientAmountFieldNames = "amount" | "color";
export type AdjustedFermentableIngredientType = AmountFields<
  BaseFermentableIngredientType,
  FermentableIngredientAmountFieldNames
>;
export type ExtendedFermentableIngredientType =
  AdjustedFermentableIngredientType & {
    fermentable?: Partial<FermentableType>;
  };
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
> & { hop?: Partial<HopType> };

export type ExtendedHopIngredientType = AdjustedHopIngredientType & {
  hop?: Partial<HopType>;
};
export interface RecipeType extends BaseRecipeType {
  owner: Partial<BaseUser>;
  style?: Partial<Style> | null;
  origin?: BaseRecipeType;
  forks?: BaseRecipeType[];
  yeastIngredients: BaseYeastIngredientType[];
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
  BaseRecipeType,
  RecipeAmountFieldNames
> & {
  owner: Partial<BaseUser>;
  style?: Partial<Style> | null;
  origin?: BaseRecipeType;
  forks?: BaseRecipeType[];

  fermentableIngredients: AdjustedFermentableIngredientType[];

  hopIngredients: AdjustedHopIngredientType[];
  yeastIngredients: AdjustedYeastIngredientType[];
};
