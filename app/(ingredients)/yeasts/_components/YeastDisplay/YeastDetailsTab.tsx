import Prop from "@/components/Prop/Prop";
import type { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import type { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import React from "react";

export type YeastDetailsTabProps = {
  src: AdjustedYeastType;
  prefs: UserPreferencesType;
};
export default function YeastDetailsTab({ src }: YeastDetailsTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <Prop label="Name" value={src.name} />
      <Prop label="Description" value={src.description} />
      <Prop label="Manufacturer" value={src.manufacturer} />
      <Prop label="Country" value={src.country} />
      <Prop label="Notes" value={src.notes} />
    </div>
  );
}
