"use client";

import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { TextField } from "@/components/Form/TextField";
import { Form } from "@/components/Form/Form";
import { Brewery } from "@/generated/prisma/client";
import { AdjustedBreweryType, BreweryType } from "@/types/Brewery";
import VesselsSection from "./VesselsSection";

// export type BreweryFormContainerProps<S = unknown, T = S | Promise<S>> = {
//   brewery: Brewery;
//   action: (state: S, formData: FormData) => T;
//   toolbar?: React.ReactNode | React.ReactNode[];

//   children: React.ReactNode;
// };
// export function BreweryFormContainer<S, T>({
//   brewery,
//   action,
//   toolbar,
//   children,
// }: BreweryFormContainerProps) {
//   return (
//     <Form src={brewery} action={action} toolbar={toolbar}>
//       {children}
//     </Form>
//   );
// }

export type BreweryFormProps = {
  src?: AdjustedBreweryType;
  //  action: (formData: FormData) => Promise<void>;
};
export function BreweryForm({ src }: BreweryFormProps) {
  const { register, control, getValues, formState } =
    useFormContext<BreweryType>();
  const brewery = getValues();
  return (
    <div className="grid grid-cols-2 *:p-4 *:border-2 *:m-4">
      <div className="*:py-1">
        <input type="hidden" {...register("id")} />
        <TextField name="name" label="Name" />
        <TextField name="description" label="Description" />
        <TextField name="address" label="Address" />
        <TextField name="city" label="City" />
        <TextField name="state" label="State" />
        <TextField name="country" label="Country" />
      </div>

      <div className="*:py-1">
        <VesselsSection />
      </div>
    </div>
  );
}
