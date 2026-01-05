import {
  MassUnit,
  PercentUnit,
  TimeUnit,
  UserColorPreference,
  UserTemperaturePreference,
  UserVolumePreference,
} from "@/generated/prisma/client";
import { UnitDict, UnitNames, UnitTypes } from "./UnitDict";

const massConverter: Record<MassUnit, ConversionType> = {
  Kg: 1,
  g: 1000,
  Lb: [(t: number) => t * 2.2, (t: number) => t / 2.2],
  Oz: 35.2,
};
const volumeConverter: Record<UserVolumePreference, ConversionType> = {
  L: 1,
  gal: [(t: number) => t * 0.26417, (t: number) => t * 3.7854],
  bbl: [(t: number) => t * 0.00852166, (t: number) => t * 117.34784],
};

const timeConverter: Record<TimeUnit, ConversionType> = {
  min: 1,
  hr: 60,
  day: 60 * 24,
};
const colorConverter: Record<UserColorPreference, ConversionType> = {
  L: 1,
  EBC: 12,
  SRM: 100,
};
const percentConverter: Record<PercentUnit, ConversionType> = {
  percentage: 1,
  percent: 1,
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
    to: keyof ConverterDict
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
  return Object.entries(src).reduce((acc, [unit, converter]) => {
    const to = Array.isArray(converter)
      ? converter[0]
      : (v: number) => v / converter;
    const from = Array.isArray(converter)
      ? converter[1]
      : (v: number) => v * converter;
    acc[unit as UnitNames] = { to, from };
    return acc;
  }, {} as Record<UnitNames, ConverterType>);
}
export function Converter(value: number, from: UnitNames, to: UnitNames) {
  const group = UnitDict[from];
  if (UnitDict[to] !== group)
    throw new Error("Cannot convert between two different measurements");
  const convert = converters[group];
  if (!convert) throw new Error("Converter not available");
  const baseValue = convert[from].from(value);
  const newValue = convert[to].to(baseValue);
  return newValue;
}
