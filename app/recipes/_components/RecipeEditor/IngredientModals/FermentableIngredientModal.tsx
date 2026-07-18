"use client";
import IconButton from "@/components/Button/IconButton";
import Card from "@/components/Card";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import Form from "@/components/Form/Form";
import { SelectField } from "@/components/Form/SelectField";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { IngredientContext } from "@/contexts/IngredientContext";
import { FermentableIngredient } from "@/generated/prisma/client";
import { $Enums } from "@/generated/prisma/browser";

import { RecipeType } from "@/types/Recipe";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";

export default function FermentableIngredientModal({
  recipe,
  handleClose,
}: {
  recipe: RecipeType;
  handleClose: (id?: string) => void;
}) {
  const s = useContext(IngredientContext);
  const fermentables = use(s.fermPromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const form = useForm<FermentableIngredient>({
    defaultValues: {
      recipeId: recipe.id,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    handleClose();
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ComboBoxField
            onChangeCallback={(f: string) => console.log("onchangecb", f)}
            orientation="horizontal"
            name="fermentableId"
            className="col-span-2 lg:col-span-3"
            label="Fermentable Variety"
            options={opts}
          />
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <TextField type="number" step="0.1" name="alpha" label="Alpha" />
            <AmountField
              type="number"
              step="0.1"
              name="amount"
              label="Amount"
            />
            <SelectField
              name="usage"
              options={$Enums.FermentableIngredientUsage}
              label="Usage"
            />
            <AmountField
              type="number"
              step="0.1"
              unit="min"
              name="duration"
              label="Duration"
            />
          </div>
          <IconButton type="submit" icon={SaveIcon} label="Create" />
        </form>
      </FormProvider>
    </div>
  );
}
