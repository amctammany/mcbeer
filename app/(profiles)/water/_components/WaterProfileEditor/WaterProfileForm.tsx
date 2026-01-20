"use client";
import { Ca2, Cl, HCO3, Mg2, Na, SO4 } from "@/components/Elements";
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
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { WaterProfileType } from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
export type WaterProfileFormContainerProps<S = unknown> = {
  profile: WaterProfileType;
  // preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function WaterProfileFormContainer({
  action,
  profile,
  children,
}: WaterProfileFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<WaterProfileType>(
  //   form.getValues() as any,
  //   form.setValue as any
  // );
  // const [state, formAction] = useActionState<any, FormData>(action, null);

  return (
    <Form
      action={action}
      src={profile}
      // formProps={{ defaultValues: profile, errors: state?.errors }}
    >
      {children}
    </Form>
  );
}
export type WaterProfileFormProps = {
  preferences?: UserPreferencesType;
};
export function WaterProfileForm({ preferences }: WaterProfileFormProps) {
  const { register, control, formState } = useFormContext<WaterProfileType>();
  console.log(formState.errors);
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
      <div className="">
        <Card className="grid">
          <CardHeader>
            <CardTitle>Ions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            <AmountField
              control={control}
              label={<Ca2 />}
              name="calcium"
              unit="ppm"
            />
            <AmountField
              control={control}
              label={<Na />}
              name="sodium"
              unit="ppm"
            />
            <AmountField
              control={control}
              label={<Mg2 />}
              name="magnesium"
              unit="ppm"
            />
            <AmountField
              control={control}
              label={<SO4 />}
              name="sulfate"
              unit="ppm"
            />
            <AmountField
              control={control}
              label={<Cl />}
              name="chloride"
              unit="ppm"
            />
            <AmountField
              control={control}
              label={<HCO3 />}
              name="bicarbonate"
              unit="ppm"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
