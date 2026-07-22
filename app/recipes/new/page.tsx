import { verifySession } from "@/lib/verifySession";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import { unauthorized } from "next/navigation";
import React from "react";
import RecipeEditor from "../_components/RecipeEditor/RecipeEditor";
import { createRecipe } from "../actions";
import { getEquipmentProfileNames } from "@/app/(profiles)/equipment/queries";
import { getStyleNames } from "@/app/styles/queries";
import { BaseUser } from "@/types/User";
import RecipeModals from "../_components/RecipeEditor/RecipeModals";

export default async function RecipeCreatorPage() {
  const session = await verifySession("/recipes/new");
  if (!session?.user) unauthorized();
  const owner: Partial<BaseUser> = {
    id: session.user.id,
    name: session.user.name || "",
  };
  const src = {
    name: "New Recipe",
    style: {},
    userId: session.user.id,
    hopIngredients: [],
    fermentableIngredients: [],
    owner,
  } as AdjustedRecipeType;
  // const styles = getStyleNames();
  return (
    <RecipeEditor
      src={src}
      // preferences={prefs}
      action={createRecipe}
    />
  );
}
