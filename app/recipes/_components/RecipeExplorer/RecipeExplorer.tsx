import { BaseRecipeType, RecipeFolderType, RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeListItem from "./RecipeListItem";
import RecipeExplorerToolbar from "./RecipeExplorerToolbar";
import List from "@/components/Form/List/List";
import RecipeFolderListItem from "./RecipeFolderListItem";
import Section from "@/components/Section";
import { RecipeFolderPopover } from "./RecipeFolderPopover";
import { NewRecipePopover } from "./NewRecipePopover";

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
      <Section
        className="m-2"
        title={folder?.name}
        actions={
          <div className="flex gap-1">
            <RecipeFolderPopover folder={folder!} />
            <NewRecipePopover folder={folder!} userId={userId} />
          </div>
        }
      >
        <List>
          {folder?.recipeFolders?.map((folder) => (
            <RecipeFolderListItem key={folder.name} folder={folder} />
          ))}
        </List>

        <List size="small">
          {folder?.recipes?.map((recipe, index) => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
              userId={userId!}
              index={index}
            />
          ))}
        </List>
      </Section>
    </div>
  );
}
