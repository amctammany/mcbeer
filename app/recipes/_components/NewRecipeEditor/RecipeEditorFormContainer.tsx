"use client";
import { TextField } from "@/components/Form/TextField";
import { State } from "@/lib/validateSchema";
import { RecipeType } from "@/types/Recipe";
import React, { useActionState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type RecipeEditorFormContainerProps = {
  src: RecipeType;
  action: any;
  children?: React.ReactNode | React.ReactNode[];
};
export function RecipeEditorFormContainer({
  src,
  action,
  children,
}: RecipeEditorFormContainerProps) {
  const [state, formAction] = useActionState<State<RecipeType>, FormData>(
    action,
    {
      success: true,
      data: src,
    },
  );
  const form = useForm<RecipeType>({
    values: state.data,
    defaultValues: state.data as any,
    errors: state.errors,
  });
  return (
    <FormProvider {...form}>
      <form action={formAction}>{children}</form>
    </FormProvider>
  );
}

export default RecipeEditorFormContainer;
