import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { IngredientContext } from "@/contexts/IngredientContext";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { UnitNames, UnitTypes } from "@/lib/Converter/UnitDict";
import { AdjustedHopIngredientType } from "@/types/Recipe";
import React from "react";

export type HopIngredientItemProps = {
  src: AdjustedHopIngredientType;
};
function UnitValueProp({
  src,
  unit,
}: {
  src?: UnitValue | number;
  unit?: UnitNames;
}) {
  return typeof src === "number" ? (
    <UnitValueProp src={{ value: src, unit: unit! }} />
  ) : (
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
  console.log(src);
  return (
    <div className="inline-flex">
      <b>{hop?.name}</b>
      <UnitValueProp src={src.alpha} unit="%" />
      <UnitValueProp src={src.amount} unit={src.amountType} />
      <UnitValueProp src={src.duration} unit={src.durationType} />
    </div>
  );
}
