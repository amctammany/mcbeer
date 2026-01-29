"use client";
import { SelectField } from "@/components/Form/SelectField";
import { TextAreaField } from "@/components/Form/TextAreaField";
import {
  InventoryInput,
  InventoryInputType,
  InventoryType,
} from "@/types/Inventory";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export type InventoryUpdateRawFormProps = {
  src: InventoryInputType;
  action: any;
};
type InventoryUpdateInput = {
  id: string;
  userId: string;
  type: string;
  names: string;
  values: string;
};
export default function InventoryUpdateRawForm({
  src,
  action,
}: InventoryUpdateRawFormProps) {
  const form = useForm<InventoryUpdateInput>({
    defaultValues: {
      ...src.data,
      //   id: src.data?.id,
      type: "Hop",
      names: "apollo",
      values: "12",
    },
  });
  return (
    <div>
      <FormProvider {...form}>
        <form action={action}>
          <input type="hidden" name="id" value={src?.data?.id} />
          <input type="hidden" name="userId" value={src?.data?.userId} />

          <SelectField name="type" options={{ Hop: "Hop", Yeast: "Yeast" }} />
          <div className="grid grid-cols-2">
            <TextAreaField label="Names" name="names" />
            <TextAreaField label="Values" name="values" />
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}
