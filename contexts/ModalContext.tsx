"use client";
import { ModalTag } from "@/components/ModalProvider";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";

export type ModalContextType = {
  open: boolean;
  triggerId: string | ModalTag | null;
  handle: any;
  setOpen: any;
  handleOpenChange: any;
  handleDialogOpen: (id?: string | ModalTag) => () => void;
};
export const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: (o: boolean) => null,
  handle: null,
  triggerId: null,
  handleOpenChange: () => null,
  handleDialogOpen: (id?: string | ModalTag) => () => null,
});
