import React from "react";
import { RecipeEditorForm } from "./RecipeEditorForm";
import {
  AdjustedRecipeType,
  ExtendedRecipeType,
  RecipeType,
} from "@/types/Recipe";
import RecipeEditorFormContainer from "./RecipeEditorFormContainer";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import VitalsSection from "./VitalsSection";
import RecipeEditorToolbar from "./RecipeEditorToolbar";
import IngredientsSection from "./IngredientsSection";
import RecipeModals from "./RecipeModals";
import MashSection from "./MashSection";
import WaterSection from "./WaterSection";
import FermentationSection from "./FermentationSection";
import RecipeTools from "./RecipeTools";
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
        toolbar={<RecipeEditorToolbar key="toolbar" src={src} />}
        modals={<RecipeModals key="modals" recipeId={src.id} />}
      >
        <div className="p-1 lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
          <GeneralSection />
          <EquipmentSection />
          <VitalsSection src={src as any} />
        </div>

        <RecipeEditorForm />

        <RecipeTools src={src} />
        <div className="p-1">
          <IngredientsSection src={src} />
        </div>
        <div className="p-1 lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-2 lg:col-span-2 mx-auto">
          <MashSection src={src} />
          <WaterSection />
          <FermentationSection />
        </div>
      </RecipeEditorFormContainer>
    </div>
  );
}
