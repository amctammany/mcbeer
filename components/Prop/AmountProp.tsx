"use client";
import { Prop, PropProps } from "./Prop";
import { precisionRound } from "@/lib/utils";
import {
  BASE_UNITS,
  PercentUnits,
  UnitNames,
  UnitTypes,
} from "@/lib/Converter/UnitDict";
import {
  convertUnit,
  isUnitValue,
  UnitValue,
} from "@/lib/Converter/adjustUnits";
import { useContext } from "react";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { MaskContext } from "@/contexts/MaskContext";
import { PercentUnit } from "@/generated/prisma/browser";
export type AmountPropProps = Omit<PropProps, "value"> & {
  name?: string;
  value?: UnitValue | number;
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
  const preferenceContext = useContext(UserPreferencesContext);
  const { mask } = useContext(MaskContext);
  const mn = mask[(name ?? "") as keyof typeof mask] as any;
  const maskV = Array.isArray(mn) ? mn[0] : mn;
  const s = preferenceContext?.[maskV as keyof typeof preferenceContext];

  const value = typeof val === "number" ? val : val?.value;

  const unitName = isUnitValue(val) ? (val as UnitValue).unit : s;
  const unit2 =
    _unit ??
    (isUnitValue(val)
      ? (val as any).unit
      : (s ?? BASE_UNITS[maskV as UnitTypes]));
  // if (!isUnitValue(val))
  // return <Prop value={val as number} unit="" {...props} />;

  // const unitN = unit ?? (amountType ? preferenceContext?.[amountType!] : "");
  const unit = _unit ?? unitName;
  // return <Prop value={value} unit={unit} {...props} />;
  // console.log({ maskV, value, unit, s });
  const converted = convertUnit({
    value,
    type: maskV,
    unit: s ?? BASE_UNITS[maskV as keyof typeof BASE_UNITS],
    inline: true,
    dir: true,
  });
  // console.log(converted);
  // const { value, unit: _u } = val ?? {};
  //  const prefs = getPreferences();
  const u =
    unit === "percent" || unit === "number"
      ? PercentUnits[unit as keyof typeof PercentUnits]
      : unit;
  const v =
    converted !== undefined ? precisionRound(converted ?? 0, precision) : "";
  // console.log({ name, val, unit, value, _unit, maskV, s, converted, u, v });

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
