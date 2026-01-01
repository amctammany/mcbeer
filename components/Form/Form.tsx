"use client";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/client";
import { UnitTypeDict } from "@/lib/Converter/UnitDict";
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
  return (
    <div>
      <FormProvider {...form}>
        <UserPreferencesContext value={{ preferences, units: UnitTypeDict }}>
          <form action={action}>{children}</form>
        </UserPreferencesContext>
      </FormProvider>
    </div>
  );
}
