"use client";
import { RecipeType } from "@/types/Recipe";
import { createContext } from "react";

export type RecipeContextType = {
  recipe: RecipeType;
};
export const RecipeContext = createContext<RecipeType | null>(null);
