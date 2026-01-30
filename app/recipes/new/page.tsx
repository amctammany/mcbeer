import { verifySession } from "@/lib/verifySession";
import { RecipeType } from "@/types/Recipe";
import { unauthorized } from "next/navigation";
import React from "react";
import RecipeEditor from "../_components/RecipeEditor/RecipeEditor";
import { createRecipe } from "../actions";
import { getStyleNames } from "@/app/styles/queries";

export default async function RecipeCreatorPage() {
  const session = await verifySession("/recipes/new");
  if (!session?.user) unauthorized();
  const src = {
    userId: session.user.id,
  } as RecipeType;
  const styles = getStyleNames();
  return (
    <RecipeEditor
      src={src}
      styles={styles}
      // preferences={prefs}
      action={createRecipe}
    />
  );

  return <div>RecipeCreatorPage</div>;
}
