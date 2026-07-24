import React from "react";
import { RecipeEditorForm } from "./RecipeEditorForm";
import { RecipeType } from "@/types/Recipe";
import RecipeEditorFormContainer from "./RecipeEditorFormContainer";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import VitalsSection from "./VitalsSection";
import RecipeEditorToolbar from "./RecipeEditorToolbar";
import IngredientsSection from "./IngredientsSection";
import RecipeModals from "./RecipeModals";
export type RecipeEditorProps = {
  src: RecipeType;
  action: any; //(state: any, data: RecipeType) => void;
};
export default function RecipeEditor({ src, action }: RecipeEditorProps) {
  return (
    <div>
      <RecipeEditorFormContainer
        src={src}
        action={action}
        toolbar={<RecipeEditorToolbar />}
        modals={<RecipeModals />}
      >
        <div className="lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
          <GeneralSection />
          <EquipmentSection />
          <VitalsSection />
        </div>

        <RecipeEditorForm />

        <div>
          <IngredientsSection src={src} />
        </div>
      </RecipeEditorFormContainer>
    </div>
  );
}
