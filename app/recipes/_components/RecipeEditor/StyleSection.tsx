"use client";
import { ComboboxField } from "@/components/Form/ComboboxField";
import Section from "@/components/Section";
import React, { use } from "react";

export default function StyleSection({ styles }: { styles: any }) {
  const opts = use(styles);
  return (
    <Section title="Style">
      <ComboboxField name="styleIdentifier" label="Style" options={opts} />
      Chart to Come
    </Section>
  );
}
