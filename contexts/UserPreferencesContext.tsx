"use client";
import { UserPreferences } from "@/generated/prisma/client";
import {
  BASE_UNITS,
  PercentUnitType,
  UnitNames,
  UnitTypes,
} from "@/lib/Converter/UnitDict";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type UserPreferencesType = Partial<
  Pick<
    UserPreferences,
    | "color"
    // | "concentration"
    | "gravity"
    // | "hopMass"
    | "mass"
    | "time"
    // | "fermentableMass"
    | "percent"
    | "pressure"
    | "temperature"
    | "volume"
  >
>;
/** 
   * 
  Omit<UserPreferences, "percent"> & { percent: PercentUnitType }
>;
  */
export type UserPreferencesContextType = {
  preferences: UserPreferencesType | null;
  mask: any;
  units: Partial<Record<UnitTypes, UnitNames[]>>;
};
export const UserPreferencesContext =
  createContext<UserPreferencesType>(BASE_UNITS);
