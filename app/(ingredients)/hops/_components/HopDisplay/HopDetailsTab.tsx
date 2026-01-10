"use client";
import Prop from "@/components/Prop/Prop";
import type { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { HopMask } from "@/lib/Converter/Masks";
import type { HopType } from "@/types/Ingredient";
import React, { use } from "react";

export type HopDetailsTabProps = {
  src: Promise<HopType>;
  prefs: UserPreferencesType;
};
export default function HopDetailsTab({
  src: _src,
  prefs,
}: HopDetailsTabProps) {
  const src = use(_src);
  const hop = adjustUnits({
    src,
    prefs,
    mask: HopMask,
    inline: false,
    precision: 4,
    dir: true,
  });
  return (
    <div className="grid lg:grid-cols-1 ">
      <Prop label="Name" value={hop.name} />
      <Prop label="Description" value={hop.description} />
      <Prop label="Country" value={hop.country} />
      <Prop label="Notes" value={hop.notes} />
    </div>
  );
}
