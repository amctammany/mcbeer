import {
  HopIngredient,
  Recipe,
  Style,
  FermentableIngredient,
  YeastIngredient,
  EquipmentProfile,
  FermentationProfile,
} from "@/generated/prisma/client";
import { BaseUser } from "./User";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { FermentableType, HopType, YeastType } from "./Ingredient";
import {
  AdjustedFermentationStepType,
  AdjustedMashStepType,
  FermentationProfileType,
  FermentationStepType,
  MashProfileType,
  MashStepType,
  WaterProfileType,
} from "./Profile";

export interface BaseRecipeType extends Omit<
  OptionalNullable<Recipe>,
  | "id"
  | "userId"
  | "fermentableIngredients"
  | "hopIngredients"
  | "mashSteps"
  | "fermentationSteps"
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
export type ExtendedYeastIngredientType = OptionalNullable<YeastIngredient> & {
  yeast: YeastType;
};

export interface BaseFermentableIngredientType extends Omit<
  OptionalNullable<FermentableIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}

type FermentableIngredientAmountFieldNames = "amount" | "color" | "potential";
export type AdjustedFermentableIngredientType = AmountFields<
  BaseFermentableIngredientType,
  FermentableIngredientAmountFieldNames
>;
export type ExtendedFermentableIngredientType =
  OptionalNullable<FermentableIngredient> & {
    fermentable: FermentableType;
  };
export interface BaseHopIngredientType extends Omit<
  OptionalNullable<HopIngredient>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}
// const t = {} as BaseHopIngredientType

type HopIngredientAmountFieldNames = "alpha" | "duration" | "amount";
export type AdjustedHopIngredientType = AmountFields<
  BaseHopIngredientType,
  HopIngredientAmountFieldNames
> & { hop?: Partial<HopType> };

export type ExtendedHopIngredientType = OptionalNullable<HopIngredient> & {
  hop: HopType;
};
/**
 * 
export interface RecipeMashStepType extends Omit<
  OptionalNullable<RecipeMashStep>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}
type RecipeMashStepTypeAmountFieldNames = "time" | "temperature" | "rampTime";
export type AdjustedRecipeMashStepType = AmountFields<
  RecipeMashStepType,
  RecipeMashStepTypeAmountFieldNames
>;
type RecipeFermentationStepTypeAmountFieldNames =
  | "time"
  | "temperature"
  | "rampTime";
export type AdjustedRecipeFermentationStepType = AmountFields<
  RecipeFermentationStepType,
  RecipeFermentationStepTypeAmountFieldNames
>;

export interface RecipeFermentationStepType extends Omit<
  OptionalNullable<RecipeFermentationStep>,
  "id" | "recipeId"
> {
  id?: string;
  recipeId?: string;
}
 */
export interface RecipeType extends BaseRecipeType {
  owner: Partial<BaseUser>;
  WaterProfile?: Partial<WaterProfileType> | null;
  MashProfile?: Partial<MashProfileType> | null;
  FermentationProfile?: Partial<FermentationProfileType> | null;
  EquipmentProfile?: Partial<EquipmentProfile> | null;
  style?: Partial<Style> | null;
  origin?: BaseRecipeType;
  forks?: BaseRecipeType[];
  fermentationSteps: FermentationStepType[];
  mashSteps: MashStepType[];
  yeastIngredients: BaseYeastIngredientType[];
  hopIngredients: BaseHopIngredientType[];
  fermentableIngredients: BaseFermentableIngredientType[];
}
export type ExtendedRecipeType = Omit<
  RecipeType,
  | "fermentableIngredients"
  | "hopIngredients"
  | "yeastIngredients"
  | "mashSteps"
  | "fermentationSteps"
> & {
  fermentableIngredients: ExtendedFermentableIngredientType[];
  hopIngredients: ExtendedHopIngredientType[];
  yeastIngredients: ExtendedYeastIngredientType[];
  // mashSteps: AdjustedMashStepType[];
  // fermentationSteps: AdjustedFermentationStepType[];
};
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
  MashProfile?: Partial<MashProfileType> | null;
  EquipmentProfile?: Partial<EquipmentProfile> | null;
  WaterProfile?: Partial<WaterProfileType> | null;
  FermentationProfile?: Partial<FermentationProfileType> | null;

  owner: Partial<BaseUser>;
  style?: Partial<Style> | null;
  origin?: BaseRecipeType;
  forks?: BaseRecipeType[];

  mashSteps: AdjustedMashStepType[];
  fermentationSteps: AdjustedFermentationStepType[];
  fermentableIngredients: AdjustedFermentableIngredientType[];

  hopIngredients: AdjustedHopIngredientType[];
  yeastIngredients: AdjustedYeastIngredientType[];
};
