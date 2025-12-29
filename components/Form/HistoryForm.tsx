"use client";
import {
  RevisionContext,
  type RevisionContextType,
} from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UnitTypeDict } from "@/lib/Converter/UnitDict";
import React from "react";
import { FieldValues, FormProvider, FormProviderProps } from "react-hook-form";

export type HistoryFormProps<T extends FieldValues = any> = {
  preferences: UserPreferencesType | null;
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
  return (
    <FormProvider {...formProps}>
      <UserPreferencesContext value={{ preferences, units: UnitTypeDict }}>
        <RevisionContext value={historyProps}>{children}</RevisionContext>
      </UserPreferencesContext>
    </FormProvider>
  );
}
