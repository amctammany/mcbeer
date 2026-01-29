"use client";
import { TextAreaField } from "@/components/Form/TextAreaField";
import { TextField } from "@/components/Form/TextField";
import {
  InventoryInput,
  InventoryInputType,
  InventoryItemizedInputType,
  InventoryType,
} from "@/types/Inventory";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

export type InventoryUpdateItemsFormProps = {
  src: InventoryItemizedInputType;
  action: any;
};
type InventoryUpdateItemsInput = {
  items?: {
    type: string;
    name: string;
    value: string;
  }[];
};
export default function InventoryUpdateItemsForm({
  src,
  action,
}: InventoryUpdateItemsFormProps) {
  console.log(src);
  const form = useForm<InventoryUpdateItemsInput>({
    values: src.data,
    errors: src.errors,
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: form.control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "items", // unique name for your Field Array
    },
  );

  return (
    <div>
      <FormProvider {...form}>
        <form action={action}>
          <input type="hidden" name="id" value={src?.data?.id} />
          <div className="grid grid-cols-2">
            {fields.map((field, index) => (
              <React.Fragment
                key={field.id} // important to include key with field's id
              >
                <input
                  type="hidden"
                  name={`items.${index}.type`}
                  value={field.type}
                />
                <TextField label="Name" name={`items.${index}.name`} />
                <TextField label="Value" name={`items.${index}.value`} />
              </React.Fragment>
            ))}
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}
