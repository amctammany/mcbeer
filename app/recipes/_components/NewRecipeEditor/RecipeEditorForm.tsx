"use client";
import { RecipeType } from "@/types/Recipe";
import { useFormContext } from "react-hook-form";

export function RecipeEditorForm() {
  const { register } = useFormContext<RecipeType>();
  return (
    <div>
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
    </div>
  );
}

export default RecipeEditorForm;
