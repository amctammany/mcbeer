"use client";
import Form from "@/components/Form/Form";
import { TextField } from "@/components/Form/TextField";
import { RecipeType } from "@/types/Recipe";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import { FormStateContext } from "@/contexts/FormStateContext";
import StyleSection from "./StyleSection";
import IngredientsSection from "./IngredientsSection";

export type RecipeFormContainerProps<S = unknown> = {
  src: RecipeType;
  // preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export default function RecipeFormContainer({
  action,
  src,
  children,
}: RecipeFormContainerProps) {
  return (
    <Form action={action} src={src}>
      {children}
    </Form>
  );
}

export type RecipeFormProps = {
  src?: RecipeType;
};

export function RecipeForm({ src }: RecipeFormProps) {
  const { register } = useFormContext<RecipeType>();
  // console.log(formContext);
  return (
    <div>
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
    </div>
  );
}
