import React from "react";
import { getRecipes } from "./queries";
import RecipeExplorer from "./_components/RecipeExplorer/RecipeExplorer";

export default async function RecipesPage() {
  const recipes = await getRecipes();
  return <RecipeExplorer recipes={recipes} />;
}
