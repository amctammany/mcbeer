"use client";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";

export type ModalContextType = {
  open: boolean;
  triggerId: string | null;
  handleDialogOpen: (id?: string) => () => void;
};
export const ModalContext = createContext<ModalContextType>({
  open: false,
  triggerId: null,
  handleDialogOpen: (id?: string) => () => null,
});
