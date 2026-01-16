"use client";
import { UnitMaskType } from "@/lib/Converter/adjustUnits";
import { UnitTypes } from "@/lib/Converter/UnitDict";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";

export type MaskType<T> = {
  [Key in keyof T]: Omit<T[Key], "object">;
};
export type MaskContextType<
  T extends FieldValues = FieldValues,
  M extends MaskType<T> = MaskType<T>
> = {
  mask: T;
};
export const MaskContext = createContext<MaskContextType>({ mask: {} });
