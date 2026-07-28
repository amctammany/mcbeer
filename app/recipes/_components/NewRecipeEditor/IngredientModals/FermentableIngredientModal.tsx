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
  appendErrors,
  FieldValues,
  FormProvider,
  get,
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch,
  type UseFormProps,
} from "react-hook-form";
import { ModalContext } from "@/contexts/ModalContext";
import {
  createFermentableIngredient,
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
  const fields = useFieldArray({
    name: "fermentableIngredients",
    control: f.control,
  });
  const fermentableIngredients = useWatch({
    name: "fermentableIngredients",
    control: f.control,
  });
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const tIndex =
    !d.triggerId || typeof d.triggerId === "string"
      ? undefined
      : d.triggerId.index;
  const currentIndex = fermentableIngredients.findIndex(
    ({ id: _id }: { id?: any }) => _id && tid === _id,
  );
  const currentIngredient =
    tIndex !== undefined && tIndex >= 0 && fermentableIngredients[tIndex]
      ? fermentableIngredients[tIndex]
      : ({
          recipeId: f.getValues("id"),
          usage: $Enums.FermentableIngredientUsage.Mash,
        } as any);

  const onSubmit = (data: any) => {
    console.log("submitFermentableIng", data, f.getValues());
    if (tIndex !== undefined && tIndex >= 0) {
      const old = fermentableIngredients[tIndex];
      // const newValue = old.map((d: { id: any }, index: any) =>
      // d.id === tid ? data : d,
      // );
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `fermentableIngredients.${tIndex}`,
          prev: old,
          value: data,
        },
      });
      // f.setValue(`fermentableIngredients`, newValue);
      fields.update(tIndex, data);
    } else {
      const old = f.getValues(`fermentableIngredients`);
      const newValue = [...old, data];
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "fermentableIngredients",
          // prev: old,
          value: data,
        },
      });
      // fields.append(data);
      f.setValue("fermentableIngredients", newValue);
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
        index={tIndex}
        action={currentIngredient.id ? fields.update : fields.append}
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <FermentableIngredientForm
          // action={currentIngredient.id ? fields.update : fields.append}
          src={currentIngredient}
          index={tIndex}
        />
      </FermentableIngredientFormContainer>
    </MaskContext>
  );
}
