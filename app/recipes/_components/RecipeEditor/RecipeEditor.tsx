import { RecipeType } from "@/types/Recipe";
import React from "react";
import RecipeFormContainer, { RecipeForm } from "./RecipeForm";
import RecipeEditorToolbar from "./RecipeEditorToolbar";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import StyleSection from "./StyleSection";
import IngredientsSection from "./IngredientsSection";

export type RecipeEditorProps = {
  src: RecipeType;
  action: any;
  styles: any;
};
export default function RecipeEditor({
  src,
  styles,
  action,
}: RecipeEditorProps) {
  return (
    <RecipeFormContainer src={src} action={action}>
      <RecipeEditorToolbar src={src} />

      <div>
        <RecipeForm src={src} />
        <div className="lg:p-2 lg:gap-2 *:mb-1 *:px-2 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
          <GeneralSection src={src} />
          <EquipmentSection />
          <StyleSection styles={styles} />
        </div>
        <div>
          <IngredientsSection />
        </div>
      </div>
    </RecipeFormContainer>
  );
}
