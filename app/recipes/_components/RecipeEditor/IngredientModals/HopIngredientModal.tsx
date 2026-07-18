import IconButton from "@/components/Button/IconButton";
import Card from "@/components/Card";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import Form from "@/components/Form/Form";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { IngredientContext } from "@/contexts/IngredientContext";
import { HopIngredient } from "@/generated/prisma/client";
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

export default function HopIngredientModal({
  recipe,
  handleClose,
}: {
  recipe: RecipeType;
  handleClose: (id?: string) => void;
}) {
  const s = useContext(IngredientContext);
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const form = useForm<HopIngredient>({
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
            name="hopId"
            label="Hop Variety"
            options={opts}
          />
          <IconButton type="submit" icon={SaveIcon} label="Create" />
        </form>
      </FormProvider>
    </div>
  );
}
