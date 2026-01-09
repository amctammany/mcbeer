import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";

export type FermentablePropertiesTabProps = {
  src: AdjustedFermentableType;
};
export default function FermentablePropertiesTab({
  src,
}: FermentablePropertiesTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <AmountProp label="Color" value={src.color} />
      <Prop label="Power" value={src.power} />
      <AmountProp precision={4} label="Potential" value={src.potential} />
      <AmountProp label="Yield" value={src.yield} />
      <AmountProp label="Protein" value={src.protein} />
      <AmountProp label="Friability" value={src.friability} />
      <AmountProp label="Coarse Fine Diff" value={src.coarseFineDiff} />
      <AmountProp label="Moisture" value={src.moisture} />
      <AmountProp label="Max Usage" value={src.maxUsage} />
    </div>
  );
}
