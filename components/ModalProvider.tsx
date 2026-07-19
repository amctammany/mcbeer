"use client";
import { ModalContext } from "@/contexts/ModalContext";
import { Dialog } from "@base-ui/react";
import React, { ReactNode, use, useMemo } from "react";
export type ModalTag = { type: string; id?: string };
export default function ModalProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const handle = Dialog.createHandle();
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<string | ModalTag | null>(
    null,
  );
  const handleOpenChange = (isOpen: boolean, eventDetails: any) => {
    // console.log({ isOpen, eventDetails });
    setOpen(isOpen);
    // setTriggerId(eventDetails.trigger?.id ?? null);
  };
  const handleDialogOpen = (tag?: string | ModalTag) => () => {
    if (tag === undefined || typeof tag === "string") {
      setOpen(tag === undefined ? false : true);
      setTriggerId(tag === undefined ? null : tag);
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
      open,
      handle,
      handleOpenChange,
      handleDialogOpen,
    }),
    [open, setOpen, triggerId, handleDialogOpen, handleOpenChange],
  );
  return <ModalContext value={store}>{children}</ModalContext>;
}
