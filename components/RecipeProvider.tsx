"use client";
import { RecipeContext } from "@/contexts/RecipeContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/browser";
import { RecipeType } from "@/types/Recipe";
import React, { ReactNode, use } from "react";

export default function RecipeProvider({
  recipe,
  children,
}: {
  recipe: RecipeType;
  children: ReactNode | ReactNode[];
}) {
  return <RecipeContext value={recipe}>{children}</RecipeContext>;
}
