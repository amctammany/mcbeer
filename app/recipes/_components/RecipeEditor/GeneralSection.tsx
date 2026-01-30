"use client";
import { TextAreaField } from "@/components/Form/TextAreaField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { RecipeType } from "@/types/Recipe";
import React from "react";

export default function GeneralSection({ src }: { src: RecipeType }) {
  return (
    <Section title="General">
      <TextField name="name" label="Name" />
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
