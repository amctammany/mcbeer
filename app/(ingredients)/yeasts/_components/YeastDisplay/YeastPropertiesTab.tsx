"use client";
import { AmountProp } from "@/components/Prop/AmountProp";
import { AmtProp } from "@/components/Prop/AmtProp";
import Prop from "@/components/Prop/Prop";
import { MaskContext } from "@/contexts/MaskContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { adjustUnits, UnitValue } from "@/lib/Converter/adjustUnits";
import { YeastMask } from "@/lib/Converter/Masks";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import React, { useContext } from "react";

export type YeastPropertiesTabProps = {
  src: YeastType;
  prefs?: UserPreferencesType;
};
const rangeProps: { name: keyof YeastType; label: string }[] = [
  { name: "attenuation", label: "Attenuation" },
];
export default function YeastPropertiesTab({
  src: _src,
}: YeastPropertiesTabProps) {
  const prefs = useContext(UserPreferencesContext);
  const ctx = useContext(MaskContext);
  console.log(ctx, prefs);
  const src = ctx
    ? adjustUnits({
        src: _src,
        prefs: prefs!,
        mask: ctx.mask,
        inline: false,
        precision: 2,
        dir: true,
      })
    : _src;
  return (
    <div className="grid lg:grid-cols-1 ">
      <AmtProp name="tempLow" label="Temp Low" value={_src.tempLow} />
      <AmtProp name="tempHigh" label="Temp High" value={_src.tempHigh} />

      <AmtProp name="tolerance" label="Tolerance" value={_src.tolerance} />

      {rangeProps.map((field) => (
        <div className="grid lg:grid-cols-2 " key={field.name}>
          <AmtProp
            label={field.label}
            name={field.name}
            value={_src[field.name] as number}
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
      <Prop label={"Temperature Range"} unit={src.tempLow?.unit}>
        {_src.tempLow}- {_src.tempHigh}
      </Prop>
    </div>
  );
}
