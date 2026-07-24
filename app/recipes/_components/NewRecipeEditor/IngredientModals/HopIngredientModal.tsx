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
  FieldValues,
  FormProvider,
  get,
  SubmitHandler,
  useForm,
  useFormContext,
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
  const hopIngredients = f.getValues("hopIngredients");
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const currentIndex = hopIngredients.findIndex(
    ({ id: _id }: { id?: any }) => _id && tid === _id,
  );
  const currentIngredient =
    hopIngredients[currentIndex] ??
    ({
      recipeId: f.getValues("id"),
      usage: $Enums.HopIngredientUsage.Mash,
    } as any);

  const onSubmit = (data: any) => {
    console.log("submitFermIng", data);
    if (currentIndex > -1) {
      const old = f.getValues("hopIngredients");
      revisionContext?.update({
        type: "SET",
        payload: {
          name: "hopIngredients",
          prev: old,
          value: old.map(({ id: _id }: { id: any }, index: any) =>
            _id === tid ? data : old[index],
          ),
        },
      });
      // f.setValue(`hopIngredients[${currentIndex}]`, data);
    } else {
      const old = f.getValues(`hopIngredients`);
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "hopIngredients",
          value: data,
        },
      });
      // f.setValue("hopIngredients", [...old, data]);
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
        action={
          currentIngredient.id ? updateHopIngredient : createHopIngredient
        }
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <HopIngredientForm src={currentIngredient} />
      </HopIngredientFormContainer>
    </MaskContext>
  );
}
