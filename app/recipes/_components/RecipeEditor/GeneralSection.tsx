import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import React from "react";

export default function GeneralSection() {
  return (
    <Section title="General">
      <TextField name="name" label="Name" />
      <TextField name="description" label="Name" />
    </Section>
  );
}
