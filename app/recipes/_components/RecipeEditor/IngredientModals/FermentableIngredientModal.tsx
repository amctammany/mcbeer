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
  get,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { ModalContext } from "@/contexts/ModalContext";
import { useStateMachine } from "little-state-machine";
import {
  addFermentableIngredient,
  updateFermentableIngredient,
  updateRecipe,
  updateRevision,
} from "@/app/recipes/stateActions";
import FermentableIngredientForm, {
  FermentableIngredientFormContainer,
} from "./FermentableIngredientForm";
import { MaskContext } from "@/contexts/MaskContext";
import { FermentableIngredientMask } from "@/lib/Converter/Masks";
import { RevisionContext } from "@/contexts/RevisionContext";

export default function FermentableIngredientModal({
  id,
  // recipe,
  // handleClose,
}: {
  id?: string;
  // recipe: RecipeType;
  // handleClose: (id?: string) => void;
}) {
  const { state, actions } = useStateMachine({
    actions: {
      addFermentableIngredient,
      updateFermentableIngredient,
      updateRecipe,
      updateRevision,
    },
  });

  const s = useContext(IngredientContext);
  const { data: recipe } = useContext(FormStateContext);
  const revisionContext = useContext(RevisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const src = state.recipe!;
  const currentIndex = state.fermentableIngredients.findIndex(
    ({ id: _id }) => tid === _id,
  );
  const currentIngredient = (state.fermentableIngredients[currentIndex] ?? {
    recipeId: src.id,
    usage: $Enums.FermentableIngredientUsage.Mash,
  }) as any;

  const onSubmit = (data: any) => {
    console.log(data, state, currentIndex, revisionContext);
    if (currentIndex > -1) {
      const old = get(state, `fermentableIngredients.${currentIndex}`);
      actions.updateFermentableIngredient(data);
      actions.updateRevision({
        type: "SET",
        payload: {
          name: `fermentableIngredients.${currentIndex}`,
          prev: old,
          value: data,
        },
      });
    } else {
      actions.addFermentableIngredient(data);
      actions.updateRevision({
        type: "ADD",
        payload: {
          name: "fermentableIngredients",
          value: data,
        },
      });
    }
    handleClose();
  };
  return (
    <MaskContext
      value={{
        mask: FermentableIngredientMask,
      }}
    >
      <FermentableIngredientFormContainer
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <FermentableIngredientForm src={currentIngredient} />
      </FermentableIngredientFormContainer>
    </MaskContext>
  );
}
