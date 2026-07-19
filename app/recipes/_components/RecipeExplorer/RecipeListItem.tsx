import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import Link from "next/link";
import React from "react";

export type RecipeListItemProps = {
  recipe: BaseRecipeType;
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
