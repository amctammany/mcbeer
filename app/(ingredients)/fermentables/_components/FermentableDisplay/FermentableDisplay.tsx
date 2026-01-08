import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";
import dynamic from "next/dynamic";
import CollapsibleCard from "@/components/CollapsibleCard";
const FermentableDetailsTab = dynamic(() => import("./FermentableDetailsTab"));
const FermentablePropertiesTab = dynamic(
  () => import("./FermentablePropertiesTab")
);
export type FermentableDisplayProps = {
  src: AdjustedFermentableType;
};
export function FermentableDisplay({ src }: FermentableDisplayProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <CollapsibleCard title="Details">
        <FermentableDetailsTab src={src} />
      </CollapsibleCard>
      <CollapsibleCard title="Properties">
        <FermentablePropertiesTab src={src} />
      </CollapsibleCard>
    </div>
  );
  return;
}
export default FermentableDisplay;
