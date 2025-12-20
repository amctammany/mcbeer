import {
  MassUnit,
  UserPressurePreference,
  UserGravityPreference,
  UserVolumePreference,
  UserMassPreference,
  UserTemperaturePreference,
  TimeUnit,
  PercentUnit,
  UserColorPreference,
} from "@prisma/client";

export type PercentUnitType = "%" | "%%";
export const PercentUnits: Record<PercentUnit, PercentUnitType> = {
  percent: "%",
  percentage: "%%",
};
export type UnitNames =
  //  | (typeof PercentUnits)[keyof typeof PercentUnits]
  | PercentUnitType
  | PercentUnit
  | TimeUnit
  | MassUnit
  | UserColorPreference
  | UserTemperaturePreference
  | UserPressurePreference
  | UserGravityPreference
  | UserVolumePreference
  | UserMassPreference;
const UNITS = {
  time: TimeUnit,
  percent: PercentUnit,
  mass: UserMassPreference,
  color: UserColorPreference,
  temperature: UserTemperaturePreference,
  pressure: UserPressurePreference,
  gravity: UserGravityPreference,
  volume: UserVolumePreference,
};
export const BASE_UNITS = {
  time: TimeUnit.min,
  percent: PercentUnit.percent,
  mass: UserMassPreference.Kg,
  temperature: UserTemperaturePreference.F,
  color: UserColorPreference.L,
  pressure: UserPressurePreference.PSI,
  gravity: UserGravityPreference.Brix,
  volume: UserVolumePreference.gal,
};
export type UnitTypes = keyof typeof UNITS;
export const UnitTypesType = Object.keys(UNITS);
export const UnitDict = Object.entries(UNITS).reduce((acc, [k, v]) => {
  return Object.values(v).reduce((dict, unit) => {
    dict[unit] = k as UnitTypes;
    return dict;
  }, acc);
}, {} as Record<UnitNames, UnitTypes>);
