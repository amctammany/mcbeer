"use client";
import { Prop, PropProps } from "./Prop";
import { precisionRound } from "@/lib/utils";
import { BASE_UNITS, PercentUnits, UnitNames } from "@/lib/Converter/UnitDict";
import { convertUnit, UnitValue } from "@/lib/Converter/adjustUnits";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { useContext } from "react";
import { MaskContext } from "@/contexts/MaskContext";
import { UserPreferences } from "@/generated/prisma/client";
export type AmtPropProps = Omit<PropProps, "value"> & {
  name: string;
  value?: number;
  unit?: UnitNames;
  precision?: number;
};
export function AmtProp({
  name,
  value = 0,
  unit: _unit,
  precision = 1,
  ...props
}: AmtPropProps) {
  const prefs = useContext(UserPreferencesContext);
  const maskCtx = useContext(MaskContext);
  const s = maskCtx?.mask[name] as keyof UserPreferencesType;
  const unit = prefs?.[s] ?? BASE_UNITS[s];
  const u = unit === "percent" || unit === "number" ? PercentUnits[unit] : unit;
  // const v = value !== undefined ? precisionRound(value ?? 0, precision) : "";
  const v = convertUnit({ value, type: s, unit, inline: true, dir: true });
  console.log({ name, value, s, unit, u, v });
  return <Prop value={v} unit={u} {...props} />;
  /**
   * return (

    <Suspense fallback={<Prop value={val} unit={unit} {...props} />}>
      <ClientAmountProp
        unit={unit}
        value={val}
        precision={precision}
        prefs={prefs}
        {...props}
      />
    </Suspense>
  );
*/
}
