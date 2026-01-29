"use client";
import { ComboboxField } from "@/components/Form/ComboboxField";
import { Option } from "@/components/Form/Combobox";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import React, { use, useActionState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  InventoryItemInput,
  InventoryItemType,
  InventoryListItemType,
} from "@/types/Inventory";
export type AddHopInput = {
  inventoryId?: string;
  name?: string;
  amount?: number;
};
export type AddHopFormProps = {
  inventoryId?: string;
  type?: InventoryItemType;
  src?: InventoryListItemType;
  action: any;
  options?: Option[];
  getOptions: Promise<Option[]>;
};
export default function AddHopForm({
  action,
  type,
  inventoryId,
  src,
  options,
  getOptions,
}: AddHopFormProps) {
  const opts = use(getOptions);
  const form = useForm<AddHopInput>({
    defaultValues: src ?? { inventoryId, name: "", amount: 0 },
  });
  return (
    <div className="relative grow w-full">
      <FormProvider {...form}>
        <form action={action}>
          <input type="hidden" name="id" value={src?.id} />
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="inventoryId" value={inventoryId} />
          <ComboboxField name="name" label="Name" options={opts} />
          <TextField type="number" name="amount" label="Amount" />
          <Button type="submit">Save</Button>
        </form>
      </FormProvider>
    </div>
  );
}
