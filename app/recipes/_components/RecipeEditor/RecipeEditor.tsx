import { RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeFormContainer, { RecipeForm } from "./RecipeForm";
import RecipeEditorToolbar from "./RecipeEditorToolbar";

export type RecipeEditorProps = {
  src: RecipeType;
  action: any;
};
export default function RecipeEditor({ src, action }: RecipeEditorProps) {
  return (
    <RecipeFormContainer src={src} action={action}>
      <RecipeEditorToolbar src={src} />

      <RecipeForm src={src} />
    </RecipeFormContainer>
  );
}
