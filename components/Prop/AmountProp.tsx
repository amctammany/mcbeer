"use client";
import { Prop, PropProps } from "./Prop";
import { precisionRound } from "@/lib/utils";
import { PercentUnits, UnitNames } from "@/lib/Converter/UnitDict";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { useContext } from "react";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { MaskContext } from "@/contexts/MaskContext";
export type AmountPropProps = Omit<PropProps, "value"> & {
  name?: string;
  value?: UnitValue;
  unit?: UnitNames;
  precision?: number;
};
export function AmountProp({
  name,
  value: val,
  unit: _unit,
  precision = 1,
  ...props
}: AmountPropProps) {
  const { mask } = useContext(MaskContext);
  const preferenceContext = useContext(UserPreferencesContext);
  const s = preferenceContext?.[mask[name ?? ""]];
  console.log(name, val, _unit, s);
  // const unitN = unit ?? (amountType ? preferenceContext?.[amountType!] : "");

  const { value, unit: _u } = val ?? {};
  //  const prefs = getPreferences();
  const unit = _unit || _u;
  const u = unit === "percent" || unit === "number" ? PercentUnits[unit] : unit;
  const v = value !== undefined ? precisionRound(value ?? 0, precision) : "";
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
