"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/client";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { UnitTypeDict } from "@/lib/Converter/UnitDict";
import { ExtendedUser } from "@/types/User";
import React, { startTransition } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";

export type FormProps = {
  action: any;
  // mask?: any;
  // preferences: UserPreferencesType;
  formProps: UseFormProps;
  children?: React.ReactNode | React.ReactNode[];
};
export default function Form({
  // preferences,
  action,
  // mask = {},
  formProps,
  children,
}: FormProps) {
  const form = useForm(formProps);
  const revision = useRevisionHistory<ExtendedUser>(
    form.getValues() as any,
    form.setValue as any
  );
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Wrap the async operation in startTransition
    startTransition(async () => {
      // Perform your non-urgent updates here, e.g., API call or server action
      console.log("Submitting data:", data);
      const r = await action(data);
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async call
      console.log("Submission complete", r);
    });
  };
  // const onSubmit = startTransition(() => form.handleSubmit(action));
  return (
    <FormProvider {...form}>
      {/* <UserPreferencesContext value={preferences}> */}
      <RevisionContext value={revision}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </RevisionContext>
      {/* </UserPreferencesContext> */}
    </FormProvider>
  );
}
