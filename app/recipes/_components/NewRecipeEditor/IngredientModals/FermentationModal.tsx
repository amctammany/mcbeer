"use client";
import IconButton from "@/components/Button/IconButton";
import Card from "@/components/Card";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import Form from "@/components/Form/Form";
import { SelectField } from "@/components/Form/SelectField";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { IngredientContext } from "@/contexts/IngredientContext";
import { $Enums } from "@/generated/prisma/browser";

import { RecipeType } from "@/types/Recipe";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import {
  appendErrors,
  FieldValues,
  FormProvider,
  get,
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch,
  type UseFormProps,
} from "react-hook-form";
import { ModalContext } from "@/contexts/ModalContext";
// import { createFermentation, updateFermentation } from "@/app/recipes/actions";
// import FermentationForm, {
// FermentationFormContainer,
// } from "./FermentationForm";
import { MaskContext } from "@/contexts/MaskContext";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import {
  FermentationProfileForm,
  FermentationProfileFormContainer,
} from "@/app/(profiles)/fermentation/_components/FermentationProfileEditor/FermentationProfileForm";
import { FermentationFormContainer } from "./FermentationForm";

export default function FermentationModal({
  id,
  // recipe,
  // handleClose,
}: {
  id?: string;
  // recipe: RecipeType;
  // handleClose: (id?: string) => void;
}) {
  const s = useContext(IngredientContext);
  const revisionContext = useContext(RevisionContext);
  const prefs = useContext(UserPreferencesContext);
  const f = useFormContext<RecipeType>();
  const iD = f.getValues("fermentationProfileId");
  // const { fields, update, append } = useFieldArray({
  //   name: "fermentations",
  //   control: f.control,
  //   keyName: "_id",
  // });
  // const watchFermentables = f.watch("fermentations", []);
  // const _fermentables = fields.map((field, index) => {
  //   return {
  //     ...field,
  //     ...watchFermentables[index],
  //   };
  // });
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const fermentationProfiles = use(s.fermentationPromise);
  const opts = fermentationProfiles.map((h) => ({
    label: h.name,
    value: h.id,
  }));
  const currentProfile = fermentationProfiles.find(
    ({ id: _id }) => iD && iD === _id,
  );
  // const currentIngredient =
  // tIndex !== undefined && tIndex >= 0 && fields[tIndex]
  // ? fields[tIndex]
  // const { id: tid, index: tIndex, mode, getSource } = d.getState(fields);
  // const currentIngredient = getSource({
  //   recipeId: f.getValues("id"),
  //   usage: $Enums.FermentationUsage.Mash,
  // });
  // console.log({ tid, tIndex, currentIngredient, mode });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <MaskContext
      value={{
        mask: FermentationProfileMask,
      }}
    >
      <FermentationFormContainer
        action={() => null}
        onSubmit={onSubmit}
        src={currentProfile}
      >
        <FermentationProfileForm
          profile={currentProfile}
          // action={currentIngredient.id ? fields.update : fields.append}
          // src={currentProfile}
        />
      </FermentationFormContainer>
    </MaskContext>
  );
}
