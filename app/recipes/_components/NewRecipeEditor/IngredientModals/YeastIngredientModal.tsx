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
import { YeastIngredient } from "@/generated/prisma/client";
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

import YeastIngredientForm, {
  YeastIngredientFormContainer,
} from "./YeastIngredientForm";
import { MaskContext } from "@/contexts/MaskContext";
import { YeastIngredientMask } from "@/lib/Converter/Masks";
import { RevisionContext } from "@/contexts/RevisionContext";

export default function YeastIngredientModal({
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
  const { fields, update, append } = useFieldArray({
    name: "yeastIngredients",
    control: f.control,
    keyName: "_id",
  });
  // const yeastIngredients = f.watch("yeastIngredients");
  // console.log(revisionContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const yeasts = use(s.yeastPromise);
  const opts = yeasts.map((h) => ({ label: h.name, value: h.id }));
  const tid =
    !d.triggerId || typeof d.triggerId === "string"
      ? d.triggerId
      : d.triggerId.id;
  const tIndex =
    !d.triggerId || typeof d.triggerId === "string"
      ? undefined
      : d.triggerId.index;
  // const currentIndex = yeastIngredients.findIndex(
  // ({ id: _id }: { id?: any }) => _id && tid === _id,
  // );
  const currentIngredient =
    tIndex !== undefined && tIndex >= 0 && fields[tIndex]
      ? fields[tIndex]
      : ({
          recipeId: f.getValues("id"),
          // usage: $Enums.YeastIngredientUsage.Mash,
        } as any);

  const onSubmit = (data: any) => {
    console.log("submitYeastIng", data, f.getValues());
    if (tIndex !== undefined && tIndex >= 0) {
      const old = fields[tIndex];
      // const newValue = old.map((d: { id: any }, index: any) =>
      // d.id === tid ? data : d,
      // );
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `yeastIngredients.${tIndex}`,
          prev: old,
          value: data,
        },
      });
      // f.setValue(`yeastIngredients`, newValue);
      update(tIndex, data);
    } else {
      const old = f.getValues(`yeastIngredients`);
      const newValue = [...old, data];
      revisionContext?.update({
        type: "ADD",
        payload: {
          name: "yeastIngredients",
          // prev: old,
          value: data,
        },
      });
      // append(data);
      f.setValue("yeastIngredients", newValue);
    }
    handleClose();
  };
  return (
    <MaskContext
      value={{
        mask: YeastIngredientMask,
      }}
    >
      <YeastIngredientFormContainer
        index={tIndex}
        action={currentIngredient.id ? update : append}
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <YeastIngredientForm
          // action={currentIngredient.id ? fields.update : fields.append}
          src={currentIngredient}
          index={tIndex}
        />
      </YeastIngredientFormContainer>
    </MaskContext>
  );
}
