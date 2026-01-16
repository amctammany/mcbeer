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
import { MashProfileType } from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { MashProfileStepsForm } from "./MashProfileStepsForm";
import { MashProfileMask } from "@/lib/Converter/Masks";
export type MashProfileFormContainerProps<S = unknown> = {
  profile: MashProfileType;
  preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function MashProfileFormContainer({
  action,
  profile,
  preferences,
  children,
}: MashProfileFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<MashProfileType>(
  //   form.getValues() as any,
  //   form.setValue as any
  // );
  const [state, formAction] = useActionState<any, FormData>(action, null);

  return (
    <Form
      action={formAction}
      mask={MashProfileMask}
      preferences={preferences}
      formProps={{ defaultValues: profile, errors: state?.errors }}
    >
      {children}
    </Form>
  );
}
export type MashProfileFormProps = {
  preferences: UserPreferencesType;
  profile: MashProfileType;
};
export function MashProfileForm({
  preferences,
  profile,
}: MashProfileFormProps) {
  const { register, control } = useFormContext<MashProfileType>();
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
      <MashProfileStepsForm src={profile} />
    </div>
  );
}
