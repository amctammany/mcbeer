import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { IngredientContext } from "@/contexts/IngredientContext";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { AdjustedHopIngredientType } from "@/types/Recipe";
import React from "react";

export type HopIngredientItemProps = {
  src: AdjustedHopIngredientType;
};
function UnitValueProp({ src }: { src?: UnitValue }) {
  return (
    <div>
      <b>{src?.value}</b>
      <span>{src?.unit}</span>
    </div>
  );
}
export default function HopIngredientItem({ src }: HopIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const hops = React.use(ctx.hopPromise);
  const hop = hops.find((h) => h.id === src.hopId);
  return (
    <div className="inline-flex">
      <b>{hop?.name}</b>
      <UnitValueProp src={src.alpha} />
      <UnitValueProp src={src.amount} />
      <UnitValueProp src={src.duration} />
    </div>
  );
}
