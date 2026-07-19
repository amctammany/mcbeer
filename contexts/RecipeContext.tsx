"use client";
import {
  AdjustedHopIngredientType,
  BaseHopIngredientType,
  BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { createContext } from "react";

export type RecipeContextType = {
  recipe: RecipeType;
  current: RecipeType;
  updateRecipe: (data: BaseRecipeType) => void;
  addHopIngredientToRecipe: (data: AdjustedHopIngredientType) => void;
  addFermentableIngredientToRecipe: (data: AdjustedHopIngredientType) => void;
};
export const RecipeContext = createContext<RecipeContextType | null>(null);
