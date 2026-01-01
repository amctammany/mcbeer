import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { BASE_UNITS, UnitNames, UnitTypes } from "./UnitDict";
import { FieldValues } from "react-hook-form";
import { converters } from "./Converter";
export type UnitMaskType<T> = {
  [K in keyof T]?: UnitTypes | undefined | object;
};
export type UnitMask<T> = {
  [K in keyof T]?: UnitNames | undefined | object;
};

export type UnitValues<
  T extends FieldValues,
  Q extends Partial<Record<keyof T, UnitNames>>
> = {
  [P in keyof T]: Q[P] extends UnitNames ? UnitValue : T[P];
};

export type UnitValue = {
  value: any;
  unit: UnitNames;
};
function convertUnit({
  value,
  type,
  unit,
  inline = false,
  dir = true,
}: {
  value: number | UnitValue;
  type: UnitTypes | object;
  unit: UnitNames;
  inline?: boolean;
  dir?: boolean;
}) {
  // console.log("converUnit", { value, type, unit, inline, dir });

  if (typeof value === "number") {
    const convert = converters[type as UnitTypes];
    if (!convert) throw new Error("Converter not available");
    const baseValue = convert[unit].from(value);
    const newValue = convert[unit].to(value);
    const v = dir ? newValue : baseValue;
    return inline ? v : ({ value: v, unit } as UnitValue);
  }
  if (Array.isArray(value))
    return value.map((val) =>
      Object.entries(type).reduce((acc, [k, v]) => {
        acc[k] = convertUnit({
          value: val[k],
          type: v,
          unit: (type as any)[k] as any,
        });
        return acc;
      }, {} as any)
    );
  if (value?.unit && value?.value !== undefined)
    return convertUnit({
      value: value.value,
      unit: value.unit,
      type,
      inline: true,
    });
}
export function getUnits<T extends FieldValues>(
  src: T,
  mask: Partial<Record<keyof T, UnitTypes | object>>,
  prefs: UserPreferencesType
) {
  //  console.log({ src, mask, prefs });
  return Object.keys(src).reduce((acc, k) => {
    if (typeof mask[k] === "string") {
      if (mask[k]) acc[k] = prefs[mask[k]] ?? BASE_UNITS[mask[k]];
    }
    return acc;
  }, {} as any);
}
export function adjustUnits<T extends FieldValues>({
  src,
  mask,
  prefs,
  inline = false,
  dir = true,
}: {
  src: T | T[];
  mask: Partial<Record<keyof T, UnitTypes | object | string>>;
  prefs: UserPreferencesType;
  inline?: boolean;
  dir?: boolean;
}) {
  const s = Object.entries(mask).reduce(
    (acc, [k, v]) => {
      if (Array.isArray(src[k as keyof typeof src])) {
        acc[k] = src[k as keyof typeof src].map((val: any) =>
          adjustUnits({
            src: val,
            mask: v as any,
            prefs,
            inline,
            dir,
          })
        );
      } else {
        acc[k] =
          typeof v === "string"
            ? convertUnit({
                value: inline
                  ? src[k as keyof typeof src]
                  : src[k as keyof typeof src].value,
                type: v as UnitTypes,
                unit:
                  src[k as keyof typeof src]?.unit ??
                  prefs[v as UnitTypes] ??
                  BASE_UNITS[v as UnitTypes],
                inline,
                dir,
              })
            : src[k as keyof typeof src];
      }
      return acc;
    },
    { ...src } as any
  );
  return s as any;
}
export function stripUnits<T extends Record<string, unknown>>(src: T) {
  return Object.keys(src).reduce((acc, k) => {
    const v = src[k as keyof T];
    acc[k as keyof T] =
      !!v &&
      typeof v === "object" &&
      v.hasOwnProperty("value") &&
      v.hasOwnProperty("unit")
        ? (v as any).value
        : v;

    return acc;
  }, {} as T);
}
