import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
// import RecipeEditor from "../../_components/RecipeEditor/RecipeEditor";
import { BaseRecipe, RecipeType } from "@/types/Recipe";
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
  } as RecipeType;
  return (
    <div>
      <RecipeFormContainer src={src} action={updateRecipe}>
        <TopBar breadcrumbs={[{ title: "Ingredients" }]}></TopBar>
        <RecipeForm src={{ owner: { name: "" } } as any} />
      </RecipeFormContainer>
    </div>
  );
}
