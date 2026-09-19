"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ModalContext } from "@/contexts/ModalContext";
import React, { useContext } from "react";
import VesselModal from "./BreweryForm/VesselModal";

export default function BreweryModals({ breweryId }: any) {
  const context = useContext(ModalContext);
  if (!Object.keys(context).length) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  const {
    open = false,
    handleDialogOpen,
    handleOpenChange,
    handle,
    triggerId,
  } = context;
  const type =
    !triggerId || typeof triggerId === "string" ? triggerId : triggerId.type;
  const id =
    !triggerId || typeof triggerId === "string" ? undefined : triggerId.id;
  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>Dialog {type}</DialogHeader>
          {type === "vessel" && <VesselModal id={id} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
