import Prop from "@/components/Prop/Prop";
import { Fermentable } from "@/generated/prisma/client";
import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";

export type FermentableDetailsTabProps = {
  src: AdjustedFermentableType;
};
export default function FermentableDetailsTab({
  src,
}: FermentableDetailsTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <Prop label="Name" value={src.name} />
      <Prop label="Description" value={src.description} />
      <Prop label="Manufacturer" value={src.manufacturer} />
      <Prop label="Country" value={src.country} />
      <Prop label="Stability" value={src.stability} />
      <Prop label="Notes" value={src.notes} />
    </div>
  );
}
