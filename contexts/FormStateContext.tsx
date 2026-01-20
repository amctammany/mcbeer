"use client";

import { State } from "@/lib/validateSchema";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type FromStateContextType<T extends FieldValues = FieldValues> =
  State<T>;
export const FormStateContext = createContext<FromStateContextType>({
  success: false,
});
