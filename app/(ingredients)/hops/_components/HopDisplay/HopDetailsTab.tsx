import Prop from "@/components/Prop/Prop";
import type { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import type { HopType } from "@/types/Ingredient";
import React from "react";

export type HopDetailsTabProps = {
  src: HopType;
  prefs: UserPreferencesType;
};
export default function HopDetailsTab({ src }: HopDetailsTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <Prop label="Name" value={src.name} />
      <Prop label="Description" value={src.description} />
      <Prop label="Country" value={src.country} />
      <Prop label="Notes" value={src.notes} />
    </div>
  );
}
