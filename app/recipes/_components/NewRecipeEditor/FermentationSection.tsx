"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { FermentationProfile } from "@/generated/prisma/client";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import { fstat } from "node:fs";
import React, { use, useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FermentationStep from "./FermentationStep";
import List from "@/components/Form/List/List";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import {
  FermentationProfileMask,
  FermentationStepMask,
} from "@/lib/Converter/Masks";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";

function FermentationSectionToolbar() {
  const tools: any[] = [];
  return (
    <div className="flex gap-2">
      {tools.map((tool) => (
        <button key={tool.name} onClick={tool.onClick}>
          {tool.icon}
        </button>
      ))}
    </div>
  );
}

export default function FermentationSection() {
  const { fermentationPromise } = useContext(IngredientContext);
  const prefs = useContext(UserPreferencesContext);

  const fermentationProfiles = use(fermentationPromise);
  const { register, watch, setValue, control } =
    useFormContext<AdjustedRecipeType>();
  const { fields, replace } = useFieldArray({
    name: "fermentationSteps",
    control,
    keyName: "_id",
  });
  const watchFermSteps = watch("fermentationSteps", []);
  const _fermSteps = fields.map((field, index) => {
    return { ...field, ...watchFermSteps[index] };
  });
  const onChangeCb = (r: any) => {
    // console.log({ src, index, r });
    const profile = fermentationProfiles.find(({ id }) => id === r);
    if (profile?.steps) {
      const adjusted = adjustUnits({
        src: profile,
        mask: FermentationProfileMask,
        prefs,
        inline: false,
        dir: true,
        precision: 3,
      });
      replace(adjusted.steps);
    }
    // handleClose();
  };
  return (
    <Section title="Fermentation" actions={<FermentationSectionToolbar />}>
      <ComboBoxField
        name="fermentationProfileId"
        label="Fermentation Profile"
        onChangeCallback={onChangeCb}
        options={fermentationProfiles.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <List>
          {_fermSteps.map((fs, index) => (
            <FermentationStep key={fs._id} index={index} src={fs} />
          ))}
        </List>
      </div>
    </Section>
  );
}
