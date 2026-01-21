import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";
import dynamic from "next/dynamic";
import CollapsibleCard from "@/components/CollapsibleCard";
const FermentableDetailsTab = dynamic(() => import("./FermentableDetailsTab"));
const FermentablePropertiesTab = dynamic(
  () => import("./FermentablePropertiesTab"),
);
export type FermentableDisplayProps = {
  src: AdjustedFermentableType;
};
export function FermentableDisplay({ src }: FermentableDisplayProps) {
  return (
    <div className="max-w-3xl mx-auto grid lg:grid-cols-2 gap-1 ">
      <FermentableDetailsTab src={src} />
      <FermentablePropertiesTab src={src} />
    </div>
  );
  return;
}
export default FermentableDisplay;
