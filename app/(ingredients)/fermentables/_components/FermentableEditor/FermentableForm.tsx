"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboboxField } from "@/components/Form/ComboboxField";
import Form from "@/components/Form/Form";
import { SelectField } from "@/components/Form/SelectField";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  FermentableType as FermentableTypeEnum,
  IngredientUsage,
} from "@/generated/prisma/enums";
import { FermentableMask } from "@/lib/Converter/Masks";
import { AdjustedFermentableType, FermentableType } from "@/types/Ingredient";
import { useActionState } from "react";
import { useFormContext } from "react-hook-form";

export type FermentableFormContainerProps<S = unknown> = {
  src: AdjustedFermentableType;
  // preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function FermentableFormContainer({
  action,
  src,
  // preferences,
  children,
}: FermentableFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<FermentableType>(
  //   form.getValues() as any,
  //   form.setValue as any
  // );
  // const [state, formAction] = useActionState<any, FormData>(action, {
  //   success: true,
  //   data: src,
  //   errors: [],
  // });

  return (
    <Form
      action={action}
      src={src}
      // formProps={{
      // values: state.data,
      // defaultValues: src,
      // errors: state.errors,
      // }}
    >
      {children}
    </Form>
  );
}
export type FermentableFormProps = {
  // preferences: UserPreferencesType;
  src: AdjustedFermentableType;
  countries: string[];
};
export function FermentableForm({
  countries,
  // preferences,
  src,
}: FermentableFormProps) {
  const { register, control } = useFormContext<FermentableType>();
  return (
    <div className="m-0 lg:m-2 lg:p-2 lg:gap-2 *:mb-1 *:px-2 grid  lg:grid-cols-2">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
      <TextField name="name" control={control} label="Name" />
      <TextField name="description" label="Description" control={control} />
      <SelectField
        name="type"
        label="Type"
        control={control}
        options={FermentableTypeEnum}
      />
      <SelectField
        name="usage"
        label="Usage"
        control={control}
        options={IngredientUsage}
      />
      <ComboboxField
        name="country"
        label="Country"
        options={countries.map((country) => ({
          value: country,
          label: country,
        }))}
      />

      <TextField name="manufacturer" label="Manufacturer" control={control} />
      <TextField name="notes" label="Notes" control={control} />
      <div className="grid grid-cols-2 gap-1">
        <AmountField
          amountType="percent"
          name="maxUsage"
          step="0.1"
          type="percent"
          label="Max Usage"
        />
        <AmountField name="price" step="0.1" type="number" label="Price" />
        <AmountField
          name="potential"
          step="0.001"
          type="number"
          label="Potential"
          amountType="gravity"
          unit="PPG"
        />
        <AmountField
          name="yield"
          step="0.01"
          type="number"
          label="Yield"
          amountType="percent"
        />
        <AmountField
          name="color"
          step="0.01"
          type="number"
          label="Color"
          amountType="color"
        />
        <AmountField
          name="protein"
          step="0.01"
          type="number"
          label="Protein"
          amountType="percent"
        />
        <AmountField
          name="coarseFineDiff"
          step="0.01"
          type="number"
          label="Coarse Fine Diff"
          amountType="percent"
        />
        <AmountField
          name="power"
          step="0.01"
          type="number"
          label="Diastatic Power"
          amountType="percent"
        />
        <AmountField
          name="moisture"
          step="0.01"
          type="number"
          label="Moisture"
          amountType="percent"
        />
        <AmountField
          name="friability"
          step="0.01"
          type="number"
          label="Friability"
          amountType="percent"
        />
      </div>
    </div>
  );
}
