import AmountField from "@/components/Form/AmountField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import React from "react";

export default function EquipmentSection() {
  return (
    <Section title="Equipment">
      <AmountField name="boilTime" label="Boil Time" />
      <AmountField name="batchVolume" label="Batch Volume" />
      <AmountField name="brewEfficiency" label="Efficiency" />
    </Section>
  );
}
