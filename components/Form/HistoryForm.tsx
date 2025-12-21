"use client";
import {
  RevisionContext,
  type RevisionContextType,
} from "@/contexts/RevisionContext";
import React from "react";
import {
  FieldValues,
  Form,
  FormProvider,
  FormProviderProps,
} from "react-hook-form";

export type HistoryFormProps<T extends FieldValues = any> = {
  formProps: Omit<FormProviderProps<T>, "children">;
  children: React.ReactNode | React.ReactNode[];
  historyProps: RevisionContextType<T>;
};

export default function HistoryForm({
  children,
  formProps,
  historyProps,
}: HistoryFormProps) {
  return (
    <FormProvider {...formProps}>
      <RevisionContext value={historyProps}>{children}</RevisionContext>
    </FormProvider>
  );
}
