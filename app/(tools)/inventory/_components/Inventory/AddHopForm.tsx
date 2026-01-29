"use client";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import React, { useActionState } from "react";
import { FormProvider, useForm } from "react-hook-form";
export type AddHopInput = {
  inventoryId?: string;
  name?: string;
  amount?: number;
};
export type AddHopFormProps = {
  inventoryId?: string;
  action: any;
};
export default function AddHopForm({ action, inventoryId }: AddHopFormProps) {
  const form = useForm<AddHopInput>();
  return (
    <div className="grow w-full">
      <FormProvider {...form}>
        <form action={action}>
          <input type="hidden" name="type" value="Hop" />
          <input type="hidden" name="inventoryId" value={inventoryId} />
          <TextField name="name" label="Name" />
          <TextField type="number" name="amount" label="Amount" />
          <Button type="submit">Save</Button>
        </form>
      </FormProvider>
    </div>
  );
}
