"use client";
import {
  RevisionContext,
  type RevisionContextType,
} from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  UserPreferencesContextType,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/client";
import { UNITS } from "@/lib/Converter/UnitDict";
import React from "react";
import {
  FieldValues,
  Form,
  FormProvider,
  FormProviderProps,
} from "react-hook-form";

export type HistoryFormProps<T extends FieldValues = any> = {
  preferences: UserPreferencesType;
  formProps: Omit<FormProviderProps<T>, "children">;
  children: React.ReactNode | React.ReactNode[];
  historyProps: RevisionContextType<T>;
};

export default function HistoryForm({
  children,
  formProps,
  preferences,
  historyProps,
}: HistoryFormProps) {
  const UnitTypeDict = Object.entries(UNITS).reduce((acc, [k, v]) => {
    acc[k] = Object.values(v);

    return acc;
  }, {} as Record<string, string[]>);
  console.log(UnitTypeDict);
  return (
    <FormProvider {...formProps}>
      <UserPreferencesContext value={{ preferences, units: UnitTypeDict }}>
        <RevisionContext value={historyProps}>{children}</RevisionContext>
      </UserPreferencesContext>
    </FormProvider>
  );
}
