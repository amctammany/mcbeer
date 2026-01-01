"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/client";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { UnitTypeDict } from "@/lib/Converter/UnitDict";
import { ExtendedUser } from "@/types/User";
import React from "react";
import { FormProvider, useForm, type UseFormProps } from "react-hook-form";

export type FormProps = {
  action: any;
  preferences: UserPreferences;
  formProps: UseFormProps;
  children?: React.ReactNode | React.ReactNode[];
};
export default function Form({
  preferences,
  action,
  formProps,
  children,
}: FormProps) {
  const form = useForm(formProps);
  const revision = useRevisionHistory<ExtendedUser>(
    form.getValues() as any,
    form.setValue as any
  );

  return (
    <div>
      <FormProvider {...form}>
        <UserPreferencesContext value={{ preferences, units: UnitTypeDict }}>
          <RevisionContext value={revision}>
            <form action={action}>{children}</form>
          </RevisionContext>
        </UserPreferencesContext>
      </FormProvider>
    </div>
  );
}
