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
import { HopIngredient } from "@/generated/prisma/client";
import { $Enums } from "@/generated/prisma/browser";

import {
  AdjustedHopIngredientType,
  BaseHopIngredientType,
  RecipeType,
} from "@/types/Recipe";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { ModalContext } from "@/contexts/ModalContext";
import { addHopIngredientToRecipe } from "@/app/recipes/actions";
import { MaskContext } from "@/contexts/MaskContext";
import { HopIngredientMask } from "@/lib/Converter/Masks";
import HopIngredientForm, {
  HopIngredientFormContainer,
} from "./HopIngredientForm";

export default function HopIngredientModal({
  recipe: src,
  // handleClose,
}: {
  recipe: RecipeType;
  id?: string;
  // handleClose: (id?: string) => void;
}) {
  const s = useContext(IngredientContext);
  const f = useContext(FormStateContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const id =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const currentIngredient = src.hopIngredients.find(
    ({ id: _id }) => id === _id,
  ) ?? { recipeId: src.id };
  console.log({ src, currentIngredient, f });
  // const form = useForm<AdjustedHopIngredientType>({
  //   defaultValues: currentIngredient as any,
  // });
  // const hopIngredient: Partial<BaseHopIngredientType> = {
  // recipeId: src.id,
  // };
  const onSubmit = (data: any) => {
    console.log(data);
    handleClose();
  };
  const onChangeCb = (selectedId: { label: string; value: string }) => {
    console.log(selectedId);
    const selected = hops.find(({ id }) => id === selectedId.value);
    console.log(selected);
    if (!selected) return;
    // form.setValue("alpha.value", selected.alpha ?? 5);
  };
  return (
    <MaskContext
      value={{
        mask: HopIngredientMask,
      }}
    >
      <HopIngredientFormContainer src={currentIngredient}>
        <HopIngredientForm />
      </HopIngredientFormContainer>
    </MaskContext>
  );
}
