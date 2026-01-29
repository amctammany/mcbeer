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
  id?: string;
  type?: InventoryItemType;
  inventoryId?: string;
  name?: string;
  amount?: number;
};
export type AddHopFormProps = {
  inventoryId?: string;
  type?: InventoryItemType;
  src?: InventoryListItemType | null;
  action: any;
  onSubmit?: any;
  options?: Option[];
  getOptions?: Promise<Option[]>;
};
export default function AddHopForm({
  action,
  type,
  inventoryId,
  src,
  onSubmit,
  options,
  getOptions,
}: AddHopFormProps) {
  const opts = getOptions ? use(getOptions) : [];
  const form = useForm<AddHopInput>({
    defaultValues: src ?? { inventoryId, type, name: "", amount: 0 },
  });
  return (
    <div className="relative grow w-full">
      <FormProvider {...form}>
        <form onSubmit={onSubmit} action={action}>
          <input type="hidden" {...form.register("id")} />
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="inventoryId" value={inventoryId} />
          <ComboboxField name="name" label="Name" options={opts} />
          <TextField
            type="number"
            name="amount"
            defaultValue={src?.amount}
            label="Amount"
          />
          <Button type="submit">Save</Button>
        </form>
      </FormProvider>
    </div>
  );
}
