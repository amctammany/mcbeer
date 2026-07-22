"use client";
import {
  AdjustedHopIngredientType,
  AdjustedRecipeType,
  BaseHopIngredientType,
  BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { createContext } from "react";

export type RecipeContextType = {
  recipe: AdjustedRecipeType;
  current: AdjustedRecipeType;
  updateRecipe: (data: AdjustedRecipeType) => void;
  addHopIngredientToRecipe: (data: AdjustedHopIngredientType) => void;
  addFermentableIngredientToRecipe: (data: AdjustedHopIngredientType) => void;
};
export const RecipeContext = createContext<RecipeContextType | null>(null);
