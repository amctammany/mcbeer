"use client";
import { UserPreferences } from "@/generated/prisma/client";
import {
  PercentUnitType,
  UnitNames,
  UnitTypes,
} from "@/lib/Converter/UnitDict";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type UserPreferencesType = Partial<UserPreferences>;
/** 
   * 
  Omit<UserPreferences, "percent"> & { percent: PercentUnitType }
>;
  */
export type UserPreferencesContextType = {
  preferences: UserPreferencesType | null;
  units: Partial<Record<UnitTypes, UnitNames[]>>;
};
export const UserPreferencesContext =
  createContext<UserPreferencesContextType | null>(null);
