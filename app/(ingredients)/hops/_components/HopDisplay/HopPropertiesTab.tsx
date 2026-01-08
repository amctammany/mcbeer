import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { AdjustedHopType } from "@/types/Ingredient";
import React from "react";

export type HopPropertiesTabProps = {
  src: AdjustedHopType;
};
export default function HopPropertiesTab({ src }: HopPropertiesTabProps) {
  return (
    <div className="grid lg:grid-cols-1 *:m-1 lg:*:m-3">
      <AmountProp label="Alpha" value={src.alpha} />
      <AmountProp label="Beta" value={src.beta} />
      <AmountProp label="Co-humulone" value={src.cohumulone} />
      <AmountProp label="Myrcene" value={src.myrcene} />
      <AmountProp label="Humulene" value={src.humulene} />
      <AmountProp label="Caryophyllene" value={src.caryophyllene} />
      <AmountProp label="Farnesene" value={src.farnesene} />
    </div>
  );
}
