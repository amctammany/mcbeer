"use client";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
/** 
   * 
  Omit<UserPreferences, "percent"> & { percent: PercentUnitType }
>;
  */
export type RevisionContextType<T extends FieldValues> = ReturnType<
  typeof useRevisionHistory<T>
> | null;
export const RevisionContext = createContext<RevisionContextType<any>>(null);
