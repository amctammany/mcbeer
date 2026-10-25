"use client";
import { TextField } from "@/components/Form/TextField";
import {
  IngredientContext,
  IngredientContextType,
  IngredientStoreType,
} from "@/contexts/IngredientContext";
import { ModalContext } from "@/contexts/ModalContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { IngType } from "@/types/Ingredient";
import { RecipeType } from "@/types/Recipe";
import React, { use, useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import SubstituteForm, { SubstituteFormContainer } from "./SubstituteForm";

export type SubstituteModalProps = {
  id?: string;
  type?: IngType;
};
const names: Record<
  IngType,
  keyof Pick<
    RecipeType,
    "hopIngredients" | "fermentableIngredients" | "yeastIngredients"
  >
> = {
  hop: "hopIngredients",
  yeast: "yeastIngredients",
  fermentable: "fermentableIngredients",
};

const promises: Record<
  IngType,
  keyof Pick<
    IngredientStoreType,
    "fermentablePromise" | "yeastPromise" | "hopPromise"
  >
> = {
  hop: "hopPromise",
  yeast: "yeastPromise",
  fermentable: "fermentablePromise",
};
function getNames(type: "hop" | "yeast" | "fermentable") {
  const name = names[type];
  const promise = promises[type];
  return { name, promise };
}
export default function SubstituteModal({ id, type }: SubstituteModalProps) {
  const s = useContext(IngredientContext);
  const revisionContext = useContext(RevisionContext);
  const f = useFormContext<RecipeType>();
  const { name, promise } = getNames(type!);
  const { fields, update, append } = useFieldArray({
    name,
    control: f.control,
    keyName: "_id",
  });

  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const { id: tid, index: tIndex, mode, getSource } = d.getState(fields);
  const currentIngredient = getSource({
    recipeId: f.getValues("id"),
  });
  const ingredients = use(s[promise] as any) as any[];
  const opts = ingredients.map((h) => ({ label: h.name, value: h.id }));
  console.log({
    currentIngredient,
    ingredients,
    opts,
    type,
    old: currentIngredient[type!].name,
  });
  const onSubmit = (data: any) => {
    if (tIndex !== undefined && tIndex >= 0) {
      const old = fields[tIndex];
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `${name}.${tIndex}`,
          prev: old,
          value: data,
        },
      });
      // f.setValue(`fermentableIngredients`, newValue);
      update(tIndex, data);
    }
    handleClose();
  };

  return (
    <div>
      SubstituteModal {id} {type}{" "}
      <TextField
        label="Old"
        name="old"
        disabled
        defaultValue={currentIngredient[type!].name}
      />
      <SubstituteFormContainer
        index={tIndex}
        onSubmit={onSubmit}
        src={currentIngredient}
      >
        <SubstituteForm src={currentIngredient} index={tIndex!} type={type!} />
      </SubstituteFormContainer>
    </div>
  );
}
