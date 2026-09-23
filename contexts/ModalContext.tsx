"use client";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type ModalTag = {
  type: string;
  id?: string;
  index?: number;
  mode?: ModalStates;
};
export type ModalStates = "CREATE" | "EDIT" | "SUBSTITUTE" | "DUPLICATE";

export type ModalState = {
  id?: string;
  index?: number;
  mode?: ModalStates;
  getSource: (def?: any) => any;
};
export type ModalContextType = {
  open: boolean;
  triggerId?: string | ModalTag;
  handle: any;
  setOpen: any;
  handleOpenChange: any;
  handleDialogOpen: (id?: string | ModalTag) => () => void;
  getState: (fields: any) => ModalState;
};
export const ModalContext = createContext<ModalContextType>({
  open: false,
  getState: (fields: any) =>
    ({
      id: undefined,
      index: undefined,
      getSource: (d) => d,
    }) as ModalState,
  setOpen: (o: boolean) => null,
  handle: null,
  triggerId: undefined,
  handleOpenChange: () => null,
  handleDialogOpen: (id?: string | ModalTag) => () => null,
});
