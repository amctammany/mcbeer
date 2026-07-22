"use client";
import Form from "@/components/Form/Form";
import { TextField } from "@/components/Form/TextField";
import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import React, { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import GeneralSection from "./GeneralSection";
import EquipmentSection from "./EquipmentSection";
import { FormStateContext } from "@/contexts/FormStateContext";
import StyleSection from "./StyleSection";
import IngredientsSection from "./IngredientsSection";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { RecipeMask } from "@/lib/Converter/Masks";
import { GlobalState, useStateMachine } from "little-state-machine";
function setRecipe(state: GlobalState, recipe: BaseRecipeType) {
  return { ...state, recipe };
}

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
  // const prefs = useContext(UserPreferencesContext);

  // const adjusted = adjustUnits({
  //   src,
  //   mask: RecipeMask,
  //   prefs,
  //   inline: false,
  //   dir: true,
  // });
  // const [state, formAction] = useActionState<any, FormData>(action, {
  // success: true,
  // data: adjusted,
  // errors: [],
  // });

  // console.log(state);
  return (
    <Form
      action={action}
      src={src}
      // mask={YeastMask}
      // formProps={{
      //   values: state.data,
      //   mode: "onBlur",
      //   // defaultValues: adjusted,
      //   errors: state?.errors,
      // }}
    >
      {children}
    </Form>
  );
}

export type RecipeFormProps = {
  // src?: RecipeType;
};

export function RecipeForm({}: RecipeFormProps) {
  const { register, getValues } = useFormContext<RecipeType>();
  const { state, actions } = useStateMachine({ actions: { setRecipe } });
  useEffect(() => {
    // console.log(getValues());
    // actions.setRecipe(getValues());
  }, []);
  // console.log(formContext);
  return (
    <div>
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
    </div>
  );
}
