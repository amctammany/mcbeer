import { BaseRecipe, RecipeType } from "@/types/Recipe";
import Link from "next/link";
import React from "react";

export type RecipeListItemProps = {
  recipe: BaseRecipe;
};
export default function RecipeListItem({ recipe }: RecipeListItemProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div>
        {recipe.name} - {recipe.id}{" "}
      </div>
    </Link>
  );
}
