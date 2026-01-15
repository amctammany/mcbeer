import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits, UnitValue } from "@/lib/Converter/adjustUnits";
import { YeastMask } from "@/lib/Converter/Masks";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import React from "react";

export type YeastPropertiesTabProps = {
  src: AdjustedYeastType;
  prefs: UserPreferencesType;
};
const rangeProps: { name: keyof YeastType; label: string }[] = [
  { name: "attenuation", label: "Attenuation" },
];
export default function YeastPropertiesTab({
  src,
  prefs,
}: YeastPropertiesTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <AmountProp label="Tolerance" value={src.tolerance as UnitValue} />

      {rangeProps.map((field) => (
        <div className="grid grid-cols-2 gap-2" key={field.name}>
          <AmountProp
            label={field.label}
            value={src[field.name] as UnitValue}
          />
          <Prop label={`${field.label} Range`} unit={"%"}>
            {
              ((src[`${field.name}Low` as keyof YeastType] as UnitValue)
                ?.value * 1) as any
            }
            -
            {
              ((src[`${field.name}High` as keyof YeastType] as UnitValue)
                ?.value * 1) as any
            }
          </Prop>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <AmountProp label="Temperature" value={src.temperature as UnitValue} />
        <Prop label={"Temperature Range"} unit={src.tempLow?.unit}>
          {src.tempLow?.value}- {src.tempHigh?.value}
        </Prop>
      </div>
    </div>
  );
}
