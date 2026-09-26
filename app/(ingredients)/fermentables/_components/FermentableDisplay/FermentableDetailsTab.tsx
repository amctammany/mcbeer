import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { Fermentable } from "@/generated/prisma/client";
import { AdjustedFermentableType, FermentableType } from "@/types/Ingredient";
import React from "react";

export type FermentableDetailsTabProps = {
  src?: Partial<AdjustedFermentableType>;
};
export default function FermentableDetailsTab({
  src = {},
}: FermentableDetailsTabProps) {
  return (
    <div className="*:mb-4 ">
      <Section title="Details" className="block lg:grid-cols-1 ">
        <Prop variant="inline" label="Name" value={src.name} />
        <Prop variant="inline" label="Description" value={src.description} />
        <Prop variant="inline" label="Manufacturer" value={src.manufacturer} />
        <Prop variant="inline" label="Country" value={src.country} />
        <Prop variant="inline" label="Usage" value={src.usage} />
        <Prop variant="inline" label="Type" value={src.type} />

        <Prop variant="inline" label="Stability" value={src.stability} />
        <Prop variant="inline" label="Price" value={src.price} />

        <Prop label="Notes" value={src.notes} />
      </Section>
    </div>
  );
}
