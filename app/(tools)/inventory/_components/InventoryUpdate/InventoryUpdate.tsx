"use client";
import { TextAreaField } from "@/components/Form/TextAreaField";
import {
  InventoryInput,
  InventoryInputType,
  InventoryType,
} from "@/types/Inventory";
import React, { useActionState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InventoryUpdateRawForm from "./InventoryUpdateRawForm";
import InventoryUpdateItemsForm from "./InventoryUpdateItemsForm";

export type InventoryUpdateProps = {
  src: InventoryType;
  action: any;
};
type InventoryUpdateInput = {
  names: string;
  values: string;
};
export default function InventoryUpdate({ src, action }: InventoryUpdateProps) {
  const [state, formAction] = useActionState<InventoryInputType>(action, {
    status: "RAW",
    data: src,
  });

  return (
    <div>
      <b>{state?.status}</b>
      {state?.status === "RAW" && (
        <InventoryUpdateRawForm src={state} action={formAction} />
      )}
      {state?.status === "ITEMIZED" && (
        <InventoryUpdateItemsForm src={state} action={formAction} />
      )}
    </div>
  );
}
