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
import { object } from "zod";
import { setRecipe } from "../../stateActions";
function _setRecipe(state: GlobalState, recipe: BaseRecipeType) {
  return { ...state, recipe };
}

export type RecipeFormContainerProps<S = unknown> = {
  src: RecipeType;
  // preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
function objectToFormData(obj: any, form = new FormData(), namespace = "") {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      const formKey = namespace ? `${namespace}.${property}` : property;

      if (obj[property] instanceof File) {
        // If it's a file, append it directly
        form.append(formKey, obj[property]);
      } else if (obj[property] instanceof Date) {
        // If it's a date, convert to string
        form.append(formKey, obj[property].toISOString());
      } else if (typeof obj[property] === "object" && obj[property] !== null) {
        // If it's a nested object or array, recurse
        objectToFormData(obj[property], form, formKey);
      } else {
        // If it's a primitive value
        form.append(formKey, obj[property]);
      }
    }
  }
  return form;
}

export default function RecipeFormContainer({
  action,
  src,
  children,
}: RecipeFormContainerProps) {
  const { state, actions } = useStateMachine({ actions: { setRecipe } });
  useEffect(() => {
    // console.log(getValues());
    actions.setRecipe(src);
  }, []);
  const decorator = (src: FormData) => {
    const his = objectToFormData(state.hopIngredients, src, "hopIngredients");
    console.log(Object.fromEntries(his.entries()));
    return his;
  };
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
      decorator={decorator}
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

  // console.log(formContext);
  return (
    <div>
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
    </div>
  );
}
