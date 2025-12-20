"use client";
import { UserPreferences } from "@/generated/prisma/client";
import { PercentUnitType } from "@/lib/Converter/UnitDict";
import { createContext } from "react";
export type UserPreferencesType = Partial<UserPreferences>;
/** 
   * 
  Omit<UserPreferences, "percent"> & { percent: PercentUnitType }
>;
  */
export const UserPreferencesContext = createContext<UserPreferencesType | null>(
  null
);
