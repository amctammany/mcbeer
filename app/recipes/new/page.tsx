import { verifySession } from "@/lib/verifySession";
import { RecipeType } from "@/types/Recipe";
import { unauthorized } from "next/navigation";
import React from "react";
import RecipeEditor from "../_components/RecipeEditor/RecipeEditor";
import { createRecipe } from "../actions";

export default async function RecipeCreatorPage() {
  const session = await verifySession("/recipes/new");
  if (!session?.user) unauthorized();
  const src = {
    userId: session.user.id,
  } as RecipeType;
  return (
    <RecipeEditor
      src={src}
      // preferences={prefs}
      action={createRecipe}
    />
  );

  return <div>RecipeCreatorPage</div>;
}
