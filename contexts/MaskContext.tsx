"use client";
import { createContext } from "react";

export type MaskContextType = {
  mask: any;
};
export const MaskContext = createContext<MaskContextType | null>(null);
