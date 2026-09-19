"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ModalContext } from "@/contexts/ModalContext";
import React, { useContext } from "react";
import VesselModal from "./BreweryForm/VesselModal";
import VesselForm, { VesselFormContainer } from "./BreweryForm/VesselForm";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { RevisionContext } from "@/contexts/RevisionContext";

export default function BreweryModals({ breweryId }: any) {
  const context = useContext(ModalContext);
  const revisionContext = useContext(RevisionContext);
  console.log(context);
  const f = useFormContext();
  const {
    open = false,
    handleDialogOpen,
    handleOpenChange,
    handle,
    triggerId,
  } = context;
  const fields = useFieldArray({
    name: "vessels",
    control: f.control,
  });

  const type =
    !triggerId || typeof triggerId === "string" ? triggerId : triggerId.type;
  const id =
    !triggerId || typeof triggerId === "string" ? undefined : triggerId.id;
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const vessels = useWatch({ name: "vessels", control: f.control });
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const tIndex =
    !d.triggerId || typeof d.triggerId === "string"
      ? undefined
      : d.triggerId.index;
  const currentVessel =
    tIndex !== undefined && tIndex >= 0 && vessels[tIndex]
      ? vessels[tIndex]
      : ({
          recipeId: f.getValues("id"),
          // usage: $Enums.YeastIngredientUsage.Mash,
        } as any);

  const onSubmit = (data: any) => {
    console.log("submitYeastIng", data, f.getValues());
    if (tIndex !== undefined && tIndex >= 0) {
      const old = vessels[tIndex];
      // const newValue = old.map((d: { id: any }, index: any) =>
      // d.id === tid ? data : d,
      // );
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `vessels.${tIndex}`,
          prev: old,
          value: data,
        },
      });
      // f.setValue(`yeastIngredients`, newValue);
      fields.update(tIndex, data);
    } else {
      const old = f.getValues(`vessels`);
      const newValue = [...old, data];
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "vessels",
          // prev: old,
          value: data,
        },
      });
      // fields.append(data);
      f.setValue("vessels", newValue);
    }
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>Dialog {type}</DialogHeader>
          {type === "vessel" && (
            <VesselFormContainer
              index={tIndex}
              action={currentVessel.id ? fields.update : fields.append}
              onSubmit={onSubmit}
              src={currentVessel}
            >
              <VesselForm src={currentVessel} />
            </VesselFormContainer>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
  // {type === "vessel" && <VesselModal id={id} />}
  /** 
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
  */
}
