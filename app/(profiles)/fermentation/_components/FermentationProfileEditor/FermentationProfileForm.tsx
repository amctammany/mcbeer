"use client";
import Form from "@/components/Form/Form";
import { TextField } from "@/components/Form/TextField";
import { type UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import React, { useActionState } from "react";
import { useFormContext } from "react-hook-form";
import { FermentationProfileStepsForm } from "./FermentationProfileStepsForm";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
export type FermentationProfileFormContainerProps<S = unknown> = {
  profile: FermentationProfileType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function FermentationProfileFormContainer({
  action,
  profile,
  children,
}: FermentationProfileFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<FermentationProfileType>(
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
export type FermentationProfileFormProps = {
  profile: FermentationProfileType;
};
export function FermentationProfileForm({
  profile,
}: FermentationProfileFormProps) {
  const { register, control } =
    useFormContext<AdjustedFermentationProfileType>();
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
      <FermentationProfileStepsForm src={profile} />
    </div>
  );
}
