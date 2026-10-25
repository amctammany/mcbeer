"use client";

import IconButton from "@/components/Button/IconButton";
import { BreadCrumb, TopBar } from "@/components/TopBar/TopBar";
import { RecipeFolderType, RecipeType } from "@/types/Recipe";
// import { Plus, Save } from "lucide-react";
import React, { useContext } from "react";

// import { RecipeFolderPopover } from "./RecipeFolderPopover";
// import { NewRecipePopover } from "./NewRecipePopover";

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
  const breadcrumbs =
    (folder?.pathname ?? "").split("/").reduce(
      (acc, crumb) => {
        const bc = { title: crumb, url: `/recipes/dir/${acc.prefix}/${crumb}` };

        acc.path.push(bc);
        acc.prefix = `${acc.prefix}/${crumb}`;
        return acc;
      },
      { path: [] as BreadCrumb[], prefix: "" },
    ) ?? [];
  // {breadcrumbs?.map((crumb) => ({title: crumb, url: `/recipes/dir${}`}))}

  return (
    <TopBar
      breadcrumbs={[
        { title: "Recipes", url: "/recipes" },
        ...(breadcrumbs.path ?? []),
      ]}
    ></TopBar>
  );
}
