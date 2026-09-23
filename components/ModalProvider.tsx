"use client";
import { ModalContext, ModalStates, ModalTag } from "@/contexts/ModalContext";
import { Dialog } from "@base-ui/react";
import React, { ReactNode, use, useCallback, useMemo } from "react";
import { ArrayPath, FieldArrayWithId, FieldValues } from "react-hook-form";
export const ModalState: Record<string, ModalStates> = {
  CREATE: "CREATE",
  EDIT: "EDIT",
  SUBSTITUTE: "SUBSTITUTE",
  DUPLICATE: "DUPLICATE",
};
export default function ModalProvider<
  TFieldValues extends FieldValues,
  TFieldArrayName extends ArrayPath<TFieldValues>,
  TKeyName extends string = "_id",
>({ children }: { children: ReactNode | ReactNode[] }) {
  const handle = Dialog.createHandle();
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<
    string | ModalTag | undefined
  >(undefined);
  const getState = useCallback(
    (
      fields: (FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName> & {
        id: string;
        disabled?: boolean;
      })[],
    ) => {
      const id =
        !triggerId || typeof triggerId === "string" ? triggerId : triggerId.id;
      const index =
        !triggerId || typeof triggerId === "string"
          ? undefined
          : triggerId.index;

      const mode =
        !triggerId || typeof triggerId === "string"
          ? undefined
          : triggerId.mode;
      // const _mode =
      //   id !== undefined
      //     ? index !== undefined
      //       ? ModalState.EDIT
      //       : ModalState.DUPLICATE
      //     : index !== undefined
      //       ? ModalState.SUBSTITUTE
      //       : ModalState.DUPLICATE;
      const getSource = (def: any) => {
        if (!fields) return def;
        console.log({ fields, index, id, mode });
        const _current = index !== undefined ? fields[index] : def;
        const currentIndex = fields.findIndex(({ id: _id }) => _id === id);
        const current = currentIndex >= 0 ? fields[currentIndex] : _current;

        return current;
      };
      return {
        getSource,
        mode,
        id,
        index,
      };
    },
    [triggerId],
  );
  const handleOpenChange = (isOpen: boolean, eventDetails: any) => {
    // console.log({ isOpen, eventDetails });
    setOpen(isOpen);
    // setTriggerId(eventDetails.trigger?.id ?? null);
  };
  const handleDialogOpen = (tag?: string | ModalTag) => () => {
    if (tag === undefined || typeof tag === "string") {
      setOpen(tag === undefined ? false : true);
      setTriggerId(tag);
    } else {
      setOpen(true);
      setTriggerId(tag);
    }
  };
  //   const hopPromise = getHopNames()
  //   const fermPromise = getFermentableNames()
  //   const yeastPromise = getYeastNames()
  const store = useMemo(
    () => ({
      triggerId,
      setOpen,
      getState,
      open,
      handle,
      handleOpenChange,
      handleDialogOpen,
    }),
    [open, getState, setOpen, triggerId, handleDialogOpen, handleOpenChange],
  );
  return (
    <ModalContext
      value={{
        triggerId,
        getState,
        setOpen,
        open,
        handle,
        handleOpenChange,
        handleDialogOpen,
      }}
    >
      {children}
    </ModalContext>
  );
}
