"use client";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";

export type ModalContextType = {
  open: boolean;
  triggerId: string | null;
  handle: any;
  handleOpenChange: any;
  handleDialogOpen: (id?: string) => () => void;
};
export const ModalContext = createContext<ModalContextType>({
  open: false,
  handle: null,
  triggerId: null,
  handleOpenChange: () => null,
  handleDialogOpen: (id?: string) => () => null,
});
