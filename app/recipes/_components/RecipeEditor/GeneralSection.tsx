"use client";
import { type Option } from "@/components/Form/ComboBox";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { TextAreaField } from "@/components/Form/TextAreaField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { IngredientContext } from "@/contexts/IngredientContext";
import { RecipeType } from "@/types/Recipe";
import React, { type Usable, use, useContext } from "react";

export default function GeneralSection({
  src,
  // styles,
}: {
  // styles: Usable<Option[]>;
  src: RecipeType;
}) {
  const { stylePromise } = useContext(IngredientContext);
  const opts = use(stylePromise);
  return (
    <Section title="General">
      <TextField name="name" label="Name" />
      <ComboBoxField
        name="styleIdentifier"
        label="Style"
        options={opts}
        placeholder="Select Style"
      />

      <TextField
        disabled
        name="owner.name"
        label="Author"
        value={src.owner.name}
      />
      <TextAreaField name="description" label="Description" />
    </Section>
  );
}
