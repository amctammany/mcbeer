"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ModalContext } from "@/contexts/ModalContext";
// import dynamic from "next/dynamic";
import React, { useContext } from "react";
import VesselModal from "./VesselModal";

// const VesselModal = dynamic(() => import("./VesselModal"));

export function BreweryModals({ breweryId }: { breweryId?: string }) {
  //   const a = useContext(BreweryContext);
  const context = useContext(ModalContext);
  console.log(context);
  if (!Object.keys(context).length) {
    console.log(context);
    // throw new Error("useAlert must be used within a AlertProvider");
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

export default BreweryModals;
