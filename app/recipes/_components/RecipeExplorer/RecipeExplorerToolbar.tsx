"use client";
import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { RecipeType } from "@/types/Recipe";
import { Plus } from "lucide-react";
import React, { useContext } from "react";
export type RecipeExplorerToolbarProps = {
  src?: RecipeType;
};
export default function RecipeExplorerToolbar(
  {
    //   src,
  }: RecipeExplorerToolbarProps,
) {
  return (
    <TopBar breadcrumbs={[{ title: "Recipes", url: "/recipes" }]}>
      <IconButton type="button" icon={Plus} href="/recipes/new">
        New
      </IconButton>
    </TopBar>
  );
}
