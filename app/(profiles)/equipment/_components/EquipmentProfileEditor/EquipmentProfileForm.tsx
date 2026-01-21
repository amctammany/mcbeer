"use client";
import AmountField from "@/components/Form/AmountField";
import Form from "@/components/Form/Form";
import HistoryForm from "@/components/Form/HistoryForm";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MaskContext } from "@/contexts/MaskContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  type UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { success } from "zod";
export type EquipmentProfileFormContainerProps<S = unknown> = {
  profile: EquipmentProfileType;
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
  // const [state, formAction] = useActionState<any, FormData>(action, {
  //   success: true,
  //   data: profile,
  //   errors: [],
  // });

  // console.log(state);
  const { mask } = useContext(MaskContext);
  const preferenceContext = useContext(UserPreferencesContext);
  const adjusted = adjustUnits({
    src: profile,
    mask,
    prefs: preferenceContext,
    inline: false,
    dir: true,
  });

  return (
    <Form src={adjusted} action={action}>
      {children}
    </Form>
  );
}
export type EquipmentProfileFormProps = {
  preferences?: UserPreferencesType;
};
export function EquipmentProfileForm({}: // preferences,
EquipmentProfileFormProps) {
  const { formState, register, control } =
    useFormContext<EquipmentProfileType>();
  console.log(formState.errors);
  return (
    <div className="">
      <div className="max-w-2xl p-2 gap-2 *:mb-2 mx-auto">
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
        <div className="grid lg:grid-cols-2 gap-2">
          <Section title="Volumes">
            <AmountField
              // amountType="time"
              // unit="min"
              name="boilTime"
              type="number"
              // control={control}
              step={1}
              label="Boil Time "
            />
            <AmountField
              name="preboilVolume"
              // unit="gal"
              type="number"
              // amountType="volume"
              step={0.01}
              label="Preboil Volume"
            />
            <AmountField
              name="boilVolume"
              // unit="gal"
              type="number"
              // amountType="volume"
              step={0.01}
              label="Boil Volume"
            />
            <AmountField
              name="batchVolume"
              // unit="gal"
              type="number"
              // amountType="volume"
              step={0.01}
              label="Batch Volume"
            />
            <TextField
              {...register("boilOffRate")}
              step={1}
              label="Boil Off Rate"
              onBlur={(e) => console.log(e.currentTarget.form)}
            />
            <AmountField
              // amountType="volume"
              name="mashLoss"
              // unit="gal"
              type="number"
              step={0.01}
              label="Mash Loss"
            />
            <AmountField
              // amountType="volume"
              // unit="gal"
              name="fermenterLoss"
              type="number"
              step={0.01}
              label="Fermenter Loss"
            />
            <AmountField
              // amountType="volume"
              // unit="gal"
              name="trubLoss"
              type="number"
              step={0.01}
              label="Trub Loss"
            />
          </Section>
          <Section title="Efficiency">
            <AmountField
              // amountType="percent"
              name="mashEfficiency"
              type="number"
              step={1}
              label="Mash Efficiency "
            />
            <AmountField
              // amountType="percent"
              name="brewEfficiency"
              type="number"
              step={1}
              label="Brew Efficiency "
            />
          </Section>
        </div>
      </div>
    </div>
  );
}
