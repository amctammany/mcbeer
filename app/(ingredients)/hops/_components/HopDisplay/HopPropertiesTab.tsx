import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits, UnitValue } from "@/lib/Converter/adjustUnits";
import { HopMask } from "@/lib/Converter/Masks";
import { HopType } from "@/types/Ingredient";
import React from "react";

export type HopPropertiesTabProps = {
  src: HopType;
};
const rangeProps: { name: keyof HopType; label: string }[] = [
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
  /**
   * 
  const src = adjustUnits({
    src: _src,
    prefs,
    mask: HopMask,
    inline: false,
    precision: 4,
    dir: true,
  });
   */
  return (
    <Section title="Properties" className="grid lg:grid-cols-1 ">
      {rangeProps.map((field) => (
        <div className="grid grid-cols-3 gap-1" key={field.name as any}>
          <AmountProp
            name={field.name as any}
            // unit="number"
            label={field.label}
            value={src[field.name] as any}
          />
          <Prop
            label={`${field.label} Range`}
            unit={"%"}
            className="col-span-2"
          >
            {src[`${field.name as any}Low` as keyof HopType] as number}-
            {src[`${field.name as any}High` as keyof HopType] as number}
          </Prop>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Prop label={"Total Oil"} value={src["totalOil"]} unit="mg/100mL" />
        <Prop label={"Total Oil Range"} unit="mg/100mL">
          {src["totalOilLow"]} - {src["totalOilHigh"]}
        </Prop>
      </div>
    </Section>
  );
}
