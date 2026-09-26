import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import type { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import React from "react";

export type YeastDetailsTabProps = {
  src: AdjustedYeastType;
};
export default function YeastDetailsTab({ src }: YeastDetailsTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <Section title="Details">
        <Prop label="Name" value={src.name} />
        <Prop label="Description" value={src.description} />
        <Prop label="Manufacturer" value={src.manufacturer} />
        <Prop label="Country" value={src.country} />
        <Prop label="Notes" value={src.notes} />
      </Section>
    </div>
  );
}
