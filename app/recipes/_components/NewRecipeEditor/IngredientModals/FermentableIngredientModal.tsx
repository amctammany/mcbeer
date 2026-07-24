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
  useFormContext,
  type UseFormProps,
} from "react-hook-form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { ModalContext } from "@/contexts/ModalContext";
import { useStateMachine } from "little-state-machine";
import {
  addFermentableIngredient,
  updateFermentableIngredient as stateUpdateFermentableIngredient,
  updateRecipe,
  updateRevision,
} from "@/app/recipes/stateActions";
import {
  createFermentableIngredient,
  createHopIngredient,
  updateFermentableIngredient,
} from "@/app/recipes/actions";
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
  const s = useContext(IngredientContext);
  const revisionContext = useContext(RevisionContext);
  const f = useFormContext();
  const fermentableIngredients = f.getValues("fermentableIngredients");
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const currentIndex = fermentableIngredients.findIndex(
    ({ id: _id }: { id?: any }) => _id && tid === _id,
  );
  const currentIngredient =
    fermentableIngredients[currentIndex] ??
    ({
      recipeId: f.getValues("id"),
      usage: $Enums.FermentableIngredientUsage.Mash,
    } as any);

  const onSubmit = (data: any) => {
    console.log("submitFermIng", data);
    if (currentIndex > -1) {
      const old = f.getValues("fermentableIngredients");
      revisionContext?.update({
        type: "SET",
        payload: {
          name: "fermentableIngredients",
          prev: old,
          value: old.map((d: { id: any }, index: any) =>
            d.id === tid ? data : d,
          ),
        },
      });
      // f.setValue(`fermentableIngredients[${currentIndex}]`, data);
    } else {
      const old = f.getValues(`fermentableIngredients`);
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "fermentableIngredients",
          value: data,
        },
      });
      // f.setValue("fermentableIngredients", [...old, data]);
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
        action={
          currentIngredient.id
            ? updateFermentableIngredient
            : createFermentableIngredient
        }
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <FermentableIngredientForm src={currentIngredient} />
      </FermentableIngredientFormContainer>
    </MaskContext>
  );
}
