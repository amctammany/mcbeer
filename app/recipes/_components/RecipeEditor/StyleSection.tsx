"use client";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import Section from "@/components/Section";
import { Style } from "@/generated/prisma/client";
import { Item } from "@radix-ui/react-select";
import React, { Usable, use } from "react";

export default function StyleSection({
  styles,
}: {
  styles: Usable<Partial<Style>[]>;
}) {
  const opts = use(styles);
  return (
    <Section title="Style">
      <ComboBoxField
        name="styleIdentifier"
        label="Style"
        options={opts}
        placeholder="Select Style"
      />
      Chart to Come
    </Section>
  );
}
