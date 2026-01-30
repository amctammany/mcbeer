import { BaseRecipe, RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeListItem from "./RecipeListItem";
import RecipeExplorerToolbar from "./RecipeExplorerToolbar";

export type RecipeExplorerProps = {
  recipes?: BaseRecipe[];
};
export default function RecipeExplorer({ recipes }: RecipeExplorerProps) {
  return (
    <div>
      <RecipeExplorerToolbar />
      <h4>Recipes</h4>
      {recipes?.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
