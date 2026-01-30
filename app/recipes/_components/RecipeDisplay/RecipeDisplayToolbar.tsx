import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import { Pencil, Split } from "lucide-react";
import React from "react";

export default function RecipeDisplayToolbar({
  recipe,
}: {
  recipe: RecipeType;
}) {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Recipes", url: "/recipes" },
        { title: recipe.name, url: `/recipes/${recipe.id}` },
      ]}
    >
      <IconButton icon={Split} href={`/recipes/${recipe.id}/fork`}>
        Fork
      </IconButton>

      <IconButton icon={Pencil} href={`/recipes/${recipe.id}/edit`}>
        Edit
      </IconButton>
    </TopBar>
  );
}
