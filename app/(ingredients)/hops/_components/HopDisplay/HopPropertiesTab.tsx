import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { AdjustedHopType } from "@/types/Ingredient";
import React from "react";

export type HopPropertiesTabProps = {
  src: AdjustedHopType;
};
const rangeProps: { name: keyof AdjustedHopType; label: string }[] = [
  { name: "alpha", label: "Alpha" },
  { name: "beta", label: "Beta" },
  { name: "cohumulone", label: "Co-humulone" },
  { name: "humulene", label: "Humulene" },
  { name: "farnesene", label: "Farnesene" },
  { name: "myrcene", label: "Myrcene" },
  { name: "bPinene", label: "B-Pinene" },
  { name: "linalool", label: "Linalool" },
  { name: "geraniol", label: "Geraniol" },
];
export default function HopPropertiesTab({ src }: HopPropertiesTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      {rangeProps.map((field) => (
        <div className="grid grid-cols-2 gap-2" key={field.name}>
          <AmountProp
            label={field.label}
            value={src[field.name] as UnitValue}
          />
          <Prop label={`${field.label} Range`} unit={"%"}>
            {
              (src[`${field.name}Low` as keyof AdjustedHopType] as UnitValue)
                ?.value as any
            }
            -
            {
              (src[`${field.name}High` as keyof AdjustedHopType] as UnitValue)
                ?.value as any
            }
          </Prop>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Prop label={"Total Oil"} value={src["totalOil"]} unit="mg/100mL" />
        <Prop label={"Total Oil Range"} unit="mg/100mL">
          {src["totalOilLow"]} - {src["totalOilHigh"]}
        </Prop>
      </div>
    </div>
  );
}
