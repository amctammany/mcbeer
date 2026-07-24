"use client";
import { TextField } from "@/components/Form/TextField";
import { MaskContext } from "@/contexts/MaskContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { State } from "@/lib/validateSchema";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import React, { useActionState, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type RecipeEditorFormContainerProps = {
  src: RecipeType;
  action: any;
  toolbar?: React.ReactNode | React.ReactNode[];
  modals?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
};
export function RecipeEditorFormContainer({
  src,
  toolbar,
  modals,
  action,
  children,
}: RecipeEditorFormContainerProps) {
  const { mask } = useContext(MaskContext);
  const preferenceContext = useContext(UserPreferencesContext);
  const adjusted = adjustUnits({
    src,
    mask,
    prefs: preferenceContext,
    inline: false,
    dir: false,
  }) as AdjustedRecipeType;
  const [state, formAction] = useActionState<
    State<AdjustedRecipeType>,
    FormData
  >(action, {
    success: true,
    data: adjusted,
  });
  const form = useForm<AdjustedRecipeType>({
    values: state.data,
    defaultValues: state.data as any,
    errors: state.errors,
  });
  const revision = useRevisionHistory<AdjustedRecipeType>(
    form.getValues() as any,
    form.setValue as any,
  );
  return (
    <FormProvider {...form}>
      <RevisionContext value={revision}>
        <form action={formAction}>
          {toolbar}
          {children}
        </form>
        {modals}
      </RevisionContext>
    </FormProvider>
  );
}

export default RecipeEditorFormContainer;
