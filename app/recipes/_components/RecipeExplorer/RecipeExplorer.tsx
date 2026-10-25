import { BaseRecipeType, RecipeFolderType, RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeListItem from "./RecipeListItem";
import RecipeExplorerToolbar from "./RecipeExplorerToolbar";
import List from "@/components/Form/List/List";
import RecipeFolderListItem from "./RecipeFolderListItem";

export type RecipeExplorerProps = {
  folder?: RecipeFolderType;
  userId?: string;
  recipes?: BaseRecipeType[];
};
export default function RecipeExplorer({
  folder,
  userId,
  recipes,
}: RecipeExplorerProps) {
  console.log(folder);
  return (
    <div>
      <RecipeExplorerToolbar folder={folder!} userId={userId} />
      <h4>Recipes for {folder?.pathname}</h4>
      <List>
        {folder?.recipeFolders?.map((folder) => (
          <RecipeFolderListItem key={folder.id} folder={folder} />
        ))}
      </List>

      <List>
        {folder?.recipes?.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  );
}
