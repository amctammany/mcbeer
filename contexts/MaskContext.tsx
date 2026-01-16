"use client";
import { UnitTypes } from "@/lib/Converter/UnitDict";
import { createContext } from "react";

export type MaskContextType = {
  mask: Record<string, UnitTypes>;
};
export const MaskContext = createContext<MaskContextType>({ mask: {} });
