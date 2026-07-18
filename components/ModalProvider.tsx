"use client";
import { ModalContext } from "@/contexts/ModalContext";
import React, { ReactNode, use, useMemo } from "react";

export default function ModalProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<string | null>(null);
  const handleOpenChange = (isOpen: boolean, eventDetails: any) => {
    setOpen(isOpen);
    setTriggerId(eventDetails.trigger?.id ?? null);
  };
  const handleDialogOpen = (id?: string) => () => {
    setOpen(id === undefined ? false : true);
    setTriggerId(id === undefined ? null : id);
  };
  //   const hopPromise = getHopNames()
  //   const fermPromise = getFermentableNames()
  //   const yeastPromise = getYeastNames()
  const store = useMemo(
    () => ({
      triggerId,
      open,
      handleDialogOpen,
    }),
    [open, triggerId, handleDialogOpen],
  );
  return <ModalContext value={store}>{children}</ModalContext>;
}
