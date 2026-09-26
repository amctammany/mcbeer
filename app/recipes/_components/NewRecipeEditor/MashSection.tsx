"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MashProfile } from "@/generated/prisma/client";
import React, { use, useContext } from "react";
import { useFormContext } from "react-hook-form";

function MashSectionToolbar() {
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

export default function MashSection() {
  const { mashPromise } = useContext(IngredientContext);
  const mashProfiles = use(mashPromise);
  const ctx = useFormContext();
  return (
    <Section title="Mash" actions={<MashSectionToolbar />}>
      <ComboBoxField
        name="mashProfileId"
        label="Mash Profile"
        options={mashProfiles.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
      />
    </Section>
  );
}
