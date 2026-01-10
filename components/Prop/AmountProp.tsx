import { Prop, PropProps } from "./Prop";
import { precisionRound } from "@/lib/utils";
import { PercentUnits, UnitNames } from "@/lib/Converter/UnitDict";
import { UnitValue } from "@/lib/Converter/adjustUnits";
export type AmountPropProps = Omit<PropProps, "value"> & {
  value?: UnitValue;
  unit?: UnitNames;
  precision?: number;
};
export async function AmountProp({
  value: val,
  unit: _unit,
  precision = 1,
  ...props
}: AmountPropProps) {
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
