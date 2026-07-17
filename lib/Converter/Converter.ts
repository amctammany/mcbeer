import {
  MassUnit,
  PercentUnit,
  TimeUnit,
  UserColorPreference,
  UserGravityPreference,
  UserTemperaturePreference,
  UserVolumePreference,
} from "@/generated/prisma/client";
import { BASE_UNITS, UnitDict, UnitNames, UnitTypes } from "./UnitDict";

const massConverter: Record<MassUnit, ConversionType> = {
  g: 1,
  Kg: 1 / 1000,
  Lb: [(t: number) => (t * 2.2) / 1000, (t: number) => (1000 * t) / 2.2],
  Oz: 0.035274,
};
const volumeConverter: Record<UserVolumePreference, ConversionType> = {
  L: 1,
  gal: [(t: number) => t * 3.7854, (t: number) => t * 0.26417],
  bbl: [(t: number) => t * 0.00852166, (t: number) => t * 117.34784],
};

const timeConverter: Record<TimeUnit, ConversionType> = {
  min: 1,
  hr: 60,
  days: 60 * 24,
};
const colorConverter: Record<UserColorPreference, ConversionType> = {
  L: 1,
  EBC: 12,
  SRM: 100,
};
const percentConverter: Record<PercentUnit, ConversionType> = {
  number: 1,
  percent: 1,
};

const gravityConverter: Record<UserGravityPreference, ConversionType> = {
  SG: 1,
  GCM3: 1,
  Plato: 1,
  Brix: 1,
  nD: 1,
  /**
  Plato: [
    (sg: number) => ((sg - 1) * 1000) / 4,
    (plato: number) => (plato * 4) / 1000 + 1,
  ],
  Brix: [
    (sg: number) => ((sg - 1) * 1000) / 4,
    (brix: number) => (brix * 4) / 1000 + 1,
  ],
  nD: [
    (sg: number) => ((sg - 1) * 1000) / 4,
    (nd: number) => (nd * 4) / 1000 + 1,
  ],*/
  PPG: 1,
};
const tempConverter: Record<UserTemperaturePreference, ConversionType> = {
  C: 1,
  F: [(c: number) => c * 1.8 + 32, (f: number) => (f - 32) * 0.5556],
};
/**export const UnitTypesDict: Record<UnitTypes, UnitNames[]> = {
  mass: Object.keys(massConverter) as UnitNames[],
  volume: Object.keys(volumeConverter) as UnitNames[],
  time: Object.keys(timeConverter) as UnitNames[],
  color: Object.keys(colorConverter) as UnitNames[],
  percent: Object.keys(percentConverter) as UnitNames[],
  temperature: Object.keys(tempConverter) as UnitNames[],
  pressure: Object.keys(tempConverter) as UnitNames[],
  gravity: Object.keys(tempConverter) as UnitNames[],
};
*/

export const converters: Partial<
  Record<UnitTypes, Record<UnitNames, ConverterType>>
> = {
  time: makeConverter(timeConverter),
  mass: makeConverter(massConverter),
  color: makeConverter(colorConverter),
  temperature: makeConverter(tempConverter),
  volume: makeConverter(volumeConverter),
  percent: makeConverter(percentConverter),
  gravity: makeConverter(gravityConverter),
};

export type ConversionType =
  | number
  //  | [number, number]
  | [(x: number) => number, (x: number) => number];
export type ConverterDict = Partial<Record<UnitNames, ConversionType>>;
function makeConvertFn(src: ConverterDict) {
  return (
    value: number,
    from: keyof ConverterDict,
    to: keyof ConverterDict,
  ) => {
    if (!src.hasOwnProperty(from) || !src.hasOwnProperty(to)) throw new Error();
    const baseValue =
      typeof src[from] === "number" ? value / src[from] : src[from]?.[0](value);
    const res =
      typeof src[to] === "number"
        ? (baseValue ?? 1) * src[to]
        : src[to]?.[1](value);
    return res;
  };
}
export type ConverterType = {
  to: (v: number) => number;
  from: (v: number) => number;
};
function makeConverter(src: ConverterDict) {
  return Object.entries(src).reduce(
    (acc, [unit, converter]) => {
      const to = Array.isArray(converter)
        ? converter[0]
        : (v: number) => v * converter;
      const from = Array.isArray(converter)
        ? converter[1]
        : (v: number) => v / converter;
      acc[unit as UnitNames] = { to, from };
      return acc;
    },
    {} as Record<UnitNames, ConverterType>,
  );
}
export function getUnitGroup(unit: UnitNames): UnitTypes {
  const group = UnitDict[unit];
  if (!group) throw new Error(`Unit ${unit} not found in UnitDict`);
  return group;
}
export function getBaseUnit(unit: UnitNames): UnitNames {
  const group = getUnitGroup(unit);
  return BASE_UNITS[group];
}
export function Converter(value: number, from: UnitNames, to?: UnitNames) {
  const group = UnitDict[from];
  const _to = to ?? BASE_UNITS[group];
  if (UnitDict[_to] !== group)
    throw new Error("Cannot convert between two different measurements");
  const convert = converters[group];
  if (!convert) throw new Error("Converter not available");
  const baseValue = convert[from].from(value);
  const newValue = convert[_to].to(baseValue);
  return newValue;
}
