import Prop from "@/components/Prop/Prop";
import { Hop } from "@/generated/prisma/client";
import { AdjustedHopType } from "@/types/Ingredient";
import React from "react";

export type HopDetailsTabProps = {
  src: AdjustedHopType;
};
export default function HopDetailsTab({ src }: HopDetailsTabProps) {
  return (
    <div className="grid lg:grid-cols-1 *:m-1 lg:*:m-3">
      <Prop label="Name" value={src.name} />
      <Prop label="Description" value={src.description} />
      <Prop label="Country" value={src.country} />
      <Prop label="Notes" value={src.notes} />
    </div>
  );
}
