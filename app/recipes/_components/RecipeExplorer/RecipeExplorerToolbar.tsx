"use client";

import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { RecipeFolderType, RecipeType } from "@/types/Recipe";
import { Plus, Save } from "lucide-react";
import React, { useContext } from "react";
import { TextField } from "@/components/Form/TextField";
import { createRecipeFolder } from "../../actions";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { RecipeFolderPopover } from "./RecipeFolderPopover";
import { NewRecipePopover } from "./NewRecipePopover";

export type RecipeExplorerToolbarProps = {
  src?: RecipeType;
  userId?: string;
  folder: RecipeFolderType;
};
export default function RecipeExplorerToolbar({
  userId,
  folder,
  //   src,
}: RecipeExplorerToolbarProps) {
  return (
    <TopBar breadcrumbs={[{ title: "Recipes", url: "/recipes" }]}>
      <RecipeFolderPopover folder={folder!} />
      <NewRecipePopover folder={folder!} userId={userId} />
    </TopBar>
  );
}
