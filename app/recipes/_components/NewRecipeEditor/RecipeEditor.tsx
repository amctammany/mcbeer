import React from "react";
import { RecipeEditorForm } from "./RecipeEditorForm";
import { RecipeType } from "@/types/Recipe";
import RecipeEditorFormContainer from "./RecipeEditorFormContainer";
export type RecipeEditorProps = {
  src: RecipeType;
  action: any; //(state: any, data: RecipeType) => void;
};
export default function RecipeEditor({ src, action }: RecipeEditorProps) {
  return (
    <div>
      <RecipeEditorFormContainer src={src} action={action}>
        <RecipeEditorForm />
      </RecipeEditorFormContainer>
    </div>
  );
}
