import { RecipeType } from "@/types/Recipe";
import React, { useContext } from "react";
import styles from "./IngredientSection.module.css";
import RecipeFormContainer, { RecipeForm } from "./RecipeForm";
import RecipeEditorToolbar from "./RecipeEditorToolbar";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import StyleSection from "./StyleSection";
import IngredientsSection from "./IngredientsSection";
import { EquipmentProfile, Style } from "@/generated/prisma/client";
import { Dialog as _Dialog } from "@base-ui/react/dialog";
import { type Option } from "@/components/Form/ComboBox";
import VitalsSection from "./VitalsSection";
import { ModalContext } from "@/contexts/ModalContext";
import RecipeModals from "./RecipeModals";

export type RecipeEditorProps = {
  src: RecipeType;
  action: any;
  // styles: Promise<Option[]>;
  // equipmentProfiles: Promise<EquipmentProfile[]>;
};
export default function RecipeEditor({
  src,
  // styles: _styles,
  action,
  // equipmentProfiles,
}: RecipeEditorProps) {
  return (
    <>
      <RecipeModals src={src} />
      <RecipeFormContainer src={src} action={action}>
        <RecipeEditorToolbar src={src} />

        <div>
          <RecipeForm src={src} />
          <div className="lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
            <GeneralSection src={src} />
            <EquipmentSection />
            <VitalsSection src={src} />
          </div>
          <div>
            <IngredientsSection src={src} />
          </div>
        </div>
      </RecipeFormContainer>
    </>
  );
}
