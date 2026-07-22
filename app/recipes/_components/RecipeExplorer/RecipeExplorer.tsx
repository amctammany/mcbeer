import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeListItem from "./RecipeListItem";
import RecipeExplorerToolbar from "./RecipeExplorerToolbar";
import List from "@/components/Form/List/List";

export type RecipeExplorerProps = {
  recipes?: BaseRecipeType[];
};
export default function RecipeExplorer({ recipes }: RecipeExplorerProps) {
  return (
    <div>
      <RecipeExplorerToolbar />
      <h4>Recipes</h4>
      <List>
        {recipes?.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  );
}
