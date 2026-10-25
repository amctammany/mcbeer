import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
// import RecipeEditor from "../../_components/RecipeEditor/RecipeEditor";
import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import { updateRecipe } from "../../actions";

export default function Loading() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Recipes" }]}></TopBar>
      <div className="max-w-2xl h-screen m-auto flex justify-center align-middle items-center text-center">
        <Spinner className="block size-26" />
      </div>
    </div>
  );
}
// <RecipeFormContainer src={src} action={updateRecipe}>
// </RecipeFormContainer>
