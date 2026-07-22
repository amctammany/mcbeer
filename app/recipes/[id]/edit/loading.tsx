import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
// import RecipeEditor from "../../_components/RecipeEditor/RecipeEditor";
import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import { updateRecipe } from "../../actions";
import RecipeFormContainer, {
  RecipeForm,
} from "../../_components/RecipeEditor/RecipeForm";

export default function Loading() {
  const src = {
    name: "Loading",
    slug: "loading",
    userId: "",
    owner: {},
    style: {},
    fermentableIngredients: [],
    hopIngredients: [],
  } as RecipeType;
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Ingredients" }]}></TopBar>
    </div>
  );
}
// <RecipeFormContainer src={src} action={updateRecipe}>
// </RecipeFormContainer>
