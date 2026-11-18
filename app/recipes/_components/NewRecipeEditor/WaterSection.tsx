"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { WaterProfile } from "@/generated/prisma/client";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import React, { use, useContext } from "react";
import { useFormContext } from "react-hook-form";

function WaterSectionToolbar() {
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

export default function WaterSection() {
  const { waterPromise } = useContext(IngredientContext);
  const waterProfiles = use(waterPromise);
  const { register, setValue, getValues } =
    useFormContext<AdjustedRecipeType>();
  const onChangeCb = (r: any) => {
    // console.log({ src, index, r });
    const profile = waterProfiles.find(({ id }) => id === r);
    if (profile) {
      console.log(profile, { calcium: profile.calcium });
      setValue("calcium.value", (profile?.calcium ?? 0) * 1);
      setValue("magnesium.value", (profile?.magnesium ?? 0) * 1);
      setValue("sulfate.value", (profile?.sulfate ?? 0) * 1);
      setValue("sodium.value", (profile?.sodium ?? 0) * 1);
      setValue("chloride.value", (profile?.chloride ?? 0) * 1);
      setValue("bicarbonate.value", (profile?.bicarbonate ?? 0) * 1);
    }
    // handleClose();
  };
  return (
    <Section title="Water" actions={<WaterSectionToolbar />}>
      <ComboBoxField
        name="waterProfileId"
        label="Water Profile"
        onChangeCallback={onChangeCb}
        options={waterProfiles.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <AmountField label="Calcium" type="number" name="calcium" unit="ppm" />
        <AmountField
          label="Magnesium"
          type="number"
          name="magnesium"
          unit="ppm"
        />
        <AmountField
          label="Chloride"
          type="number"
          name="chloride"
          unit="ppm"
        />
        <AmountField label="Sodium" type="number" name="sodium" unit="ppm" />
        <AmountField label="Sulfate" type="number" name="sulfate" unit="ppm" />
        <AmountField
          label="Bicarbonate"
          type="number"
          name="bicarbonate"
          unit="ppm"
        />
      </div>
    </Section>
  );
}
