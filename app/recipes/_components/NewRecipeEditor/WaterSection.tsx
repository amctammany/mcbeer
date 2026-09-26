"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { WaterProfile } from "@/generated/prisma/client";
import { RecipeType } from "@/types/Recipe";
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
  const { register, setValue } = useFormContext<RecipeType>();
  const onChangeCb = (r: any) => {
    // console.log({ src, index, r });
    const profile = waterProfiles.find(({ id }) => id === r);
    if (profile) {
      console.log(profile);
      setValue("calcium", (profile?.calcium ?? 0) * 1);
      setValue("magnesium", (profile?.magnesium ?? 0) * 1);
      setValue("sulfate", (profile?.sulfate ?? 0) * 1);
      setValue("sodium", (profile?.sodium ?? 0) * 1);
      setValue("chloride", (profile?.chloride ?? 0) * 1);
      setValue("bicarbonate", (profile?.bicarbonate ?? 0) * 1);
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
        <TextField label="Calcium" type="number" {...register("calcium")} />
        <TextField label="Magnesium" type="number" {...register("magnesium")} />
        <TextField label="Chloride" type="number" {...register("chloride")} />
        <TextField label="Sodium" type="number" {...register("sodium")} />
        <TextField label="Sulfate" type="number" {...register("sulfate")} />
        <TextField
          label="Bicarbonate"
          type="number"
          {...register("bicarbonate")}
        />
      </div>
    </Section>
  );
}
