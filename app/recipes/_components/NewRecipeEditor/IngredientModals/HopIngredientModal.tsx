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
  createHopIngredient,
  updateHopIngredient,
} from "@/app/recipes/actions";
import HopIngredientForm, {
  HopIngredientFormContainer,
} from "./HopIngredientForm";
import { MaskContext } from "@/contexts/MaskContext";
import { HopIngredientMask } from "@/lib/Converter/Masks";
import { RevisionContext } from "@/contexts/RevisionContext";

export default function HopIngredientModal({
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
  const fields = useFieldArray({ name: "hopIngredients", control: f.control });
  const hopIngredients = useWatch({
    name: "hopIngredients",
    control: f.control,
  });
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const tIndex =
    !d.triggerId || typeof d.triggerId === "string"
      ? undefined
      : d.triggerId.index;
  const currentIndex = hopIngredients.findIndex(
    ({ id: _id }: { id?: any }) => _id && tid === _id,
  );
  const currentIngredient =
    tIndex !== undefined && tIndex >= 0 && hopIngredients[tIndex]
      ? hopIngredients[tIndex]
      : ({
          recipeId: f.getValues("id"),
          usage: $Enums.HopIngredientUsage.Boil,
        } as any);

  const onSubmit = (data: any) => {
    console.log("submitHopIng", data, f.getValues());
    if (tIndex !== undefined && tIndex >= 0) {
      const old = hopIngredients[tIndex];
      // const newValue = old.map((d: { id: any }, index: any) =>
      // d.id === tid ? data : d,
      // );
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `hopIngredients.${tIndex}`,
          prev: old,
          value: data,
        },
      });
      // f.setValue(`hopIngredients`, newValue);
      fields.update(tIndex, data);
    } else {
      const old = f.getValues(`hopIngredients`);
      const newValue = [...old, data];
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "hopIngredients",
          // prev: old,
          value: data,
        },
      });
      // fields.append(data);
      f.setValue("hopIngredients", newValue);
    }
    handleClose();
  };
  return (
    <MaskContext
      value={{
        mask: HopIngredientMask,
      }}
    >
      <HopIngredientFormContainer
        index={tIndex}
        action={currentIngredient.id ? fields.update : fields.append}
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <HopIngredientForm
          // action={currentIngredient.id ? fields.update : fields.append}
          src={currentIngredient}
          index={tIndex}
        />
      </HopIngredientFormContainer>
    </MaskContext>
  );
}
