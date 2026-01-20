"use client";
import AmountField from "@/components/Form/AmountField";
import Form from "@/components/Form/Form";
import HistoryForm from "@/components/Form/HistoryForm";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  type UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
export type EquipmentProfileFormContainerProps<S = unknown> = {
  profile: AdjustedEquipmentProfileType;
  // preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function EquipmentProfileFormContainer({
  action,
  profile,
  // preferences,
  children,
}: EquipmentProfileFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<EquipmentProfileType>(
  //   form.getValues() as any,
  //   form.setValue as any
  // );
  const [state, formAction] = useActionState<any, FormData>(action, null);

  return (
    <Form
      action={formAction}
      formProps={{ defaultValues: profile, errors: state?.errors }}
    >
      {children}
    </Form>
  );
}
export type EquipmentProfileFormProps = {
  preferences?: UserPreferencesType;
};
export function EquipmentProfileForm({}: // preferences,
EquipmentProfileFormProps) {
  const { register, control } = useFormContext<EquipmentProfileType>();
  return (
    <div className="m-2 p-2 gap-2 *:mb-2">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
      <TextField
        control={control}
        {...register("name")}
        label="Name "
        // onBlur={updateHistory}
      />
      <TextField
        control={control}
        {...register("description")}
        label="Description"
        // onBlur={updateHistory}
      />
      <div className="grid lg:grid-cols-3 gap-2">
        <Card className="grid">
          <CardHeader>
            <CardTitle>Volumes</CardTitle>
          </CardHeader>
          <CardContent>
            Fields
            <AmountField
              amountType="time"
              unit="min"
              name="boilTime"
              type="number"
              control={control}
              step={1}
              label="Boil Time "
            />
            <AmountField
              name="preboilVolume"
              unit="gal"
              type="number"
              amountType="volume"
              step={1}
              label="Preboil Volume"
            />
            <AmountField
              name="boilVolume"
              unit="gal"
              type="number"
              amountType="volume"
              step={1}
              label="Boil Volume"
            />
            <AmountField
              name="batchVolume"
              unit="gal"
              type="number"
              amountType="volume"
              step={1}
              label="Batch Volume"
            />
            <TextField
              {...register("boilOffRate")}
              step={1}
              label="Boil Off Rate"
              onBlur={(e) => console.log(e.currentTarget.form)}
            />
            <AmountField
              amountType="volume"
              name="mashLoss"
              unit="gal"
              type="number"
              step={1}
              label="Mash Loss"
            />
            <AmountField
              amountType="volume"
              unit="gal"
              name="fermenterLoss"
              type="number"
              step={1}
              label="Fermenter Loss"
            />
            <AmountField
              amountType="volume"
              unit="gal"
              name="trubLoss"
              type="number"
              step={1}
              label="Trub Loss"
            />
          </CardContent>
        </Card>
        <Card className="grid">
          <CardHeader>
            <CardTitle>Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <AmountField
              amountType="percent"
              name="mashEfficiency"
              type="number"
              step={1}
              label="Mash Efficiency "
            />
            <AmountField
              amountType="percent"
              name="brewEfficiency"
              type="number"
              step={1}
              label="Brew Efficiency "
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
