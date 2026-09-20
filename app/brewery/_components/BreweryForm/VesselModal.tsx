"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext } from "@/contexts/ModalContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { $Enums } from "@/generated/prisma/browser";
import { useContext, use } from "react";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import VesselForm, { VesselFormContainer } from "./VesselForm";
import { VesselMask } from "@/lib/Converter/Masks";
import { BreweryType } from "@/types/Brewery";

export default function VesselModal({
  id,
  // recipe,
  // handleClose,
}: {
  id?: string;
  // recipe: RecipeType;
  // handleClose: (id?: string) => void;
}) {
  const revisionContext = useContext(RevisionContext);
  const f = useFormContext<BreweryType>();
  const fields = useFieldArray({
    name: "vessels",
    control: f.control,
  });
  const vessels = useWatch({
    name: "vessels",
    control: f.control,
  });
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const tIndex =
    !d.triggerId || typeof d.triggerId === "string"
      ? undefined
      : d.triggerId.index;
  // const currentIndex = vessels.findIndex(
  // ({ id: _id }: { id?: any }) => _id && tid === _id,
  // );
  const currentVessel =
    tIndex !== undefined && tIndex >= 0 && vessels[tIndex]
      ? vessels[tIndex]
      : ({
          breweryId: f.getValues("id"),
          type: $Enums.VesselType.Fermenter,
        } as any);

  const onSubmit = (data: any) => {
    console.log("submitFermentableIng", data, f.getValues());
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
      // f.setValue(`vessels`, newValue);
      // fields.update(tIndex, data);
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
      // f.setValue("vessels", newValue);
    }
    handleClose();
  };
  return (
    <MaskContext value={{ mask: VesselMask }}>
      <VesselFormContainer
        index={tIndex}
        action={currentVessel.id ? fields.update : fields.append}
        onSubmit={onSubmit}
        src={currentVessel}
      >
        <VesselForm
          // action={currentIngredient.id ? fields.update : fields.append}
          src={currentVessel}
          index={tIndex}
        />
      </VesselFormContainer>
    </MaskContext>
  );
}
