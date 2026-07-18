"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { EquipmentProfile } from "@/generated/prisma/client";
import React, { use, useContext } from "react";

function EquipmentSectionToolbar() {
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

export default function EquipmentSection() {
  const { equipPromise } = useContext(IngredientContext);
  const equipmentProfiles = use(equipPromise);
  return (
    <Section title="Equipment" actions={<EquipmentSectionToolbar />}>
      <ComboBoxField
        name="equipmentProfileId"
        label="Equipment Profile"
        options={equipmentProfiles.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
      />
      <AmountField name="boilTime" label="Boil Time" />
      <AmountField name="batchVolume" label="Batch Volume" />
      <AmountField name="brewEfficiency" label="Efficiency" step="0.01" />
    </Section>
  );
}
