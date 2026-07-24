"use client";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/Form/TextField";
import { Input } from "@/components/ui/input";
import { RecipeType } from "@/types/Recipe";
import { useFormContext } from "react-hook-form";

export function RecipeEditorForm() {
  const { register } = useFormContext<RecipeType>();
  return (
    <div>
      <TextField name="name" label="Name" />
      <TextField name="ownerId" label="Owner ID" />
      <Button type="submit">Save</Button>
    </div>
  );
}

export default RecipeEditorForm;
