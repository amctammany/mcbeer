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
import { WaterProfileType } from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
export type WaterProfileFormContainerProps<S = unknown> = {
  profile: WaterProfileType;
  preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function WaterProfileFormContainer({
  action,
  profile,
  preferences,
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
  const [state, formAction] = useActionState<any, FormData>(action, null);

  return (
    <Form
      action={formAction}
      preferences={preferences}
      formProps={{ defaultValues: profile, errors: state?.errors }}
    >
      {children}
    </Form>
  );
}
export type WaterProfileFormProps = {
  preferences: UserPreferencesType;
};
export function WaterProfileForm({ preferences }: WaterProfileFormProps) {
  const { register, control } = useFormContext<WaterProfileType>();
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
            <AmountField control={control} name="calcium" unit="ppm" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
