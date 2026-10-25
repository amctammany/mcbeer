"use client";
import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import {
  IngredientContext,
  IngredientStoreType,
} from "@/contexts/IngredientContext";
import { ModalContext } from "@/contexts/ModalContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import {
  FermentableIngredient,
  YeastIngredient,
} from "@/generated/prisma/client";
import { HopIngredientType } from "@/generated/prisma/enums";
import { IngType } from "@/types/Ingredient";
import { RecipeType } from "@/types/Recipe";
import { SaveIcon } from "lucide-react";
import React, { AnyActionArg, use, useContext } from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  UseFormSetValue,
} from "react-hook-form";
export type SubstituteFormContainerProps = {
  src: any;
  children: React.ReactNode;
  action?: any;
  index?: number;
  onSubmit?: any;
};
export function SubstituteFormContainer({
  src,
  action,
  index,
  onSubmit: _onSubmit,
  children,
}: SubstituteFormContainerProps) {
  const d = useContext(ModalContext);
  const prefs = useContext(UserPreferencesContext);
  const handleClose = d.handleOpenChange;

  const form = useForm<typeof src>({ defaultValues: src });
  const { setValue, getValues, handleSubmit, register } = form;
  const handleSave = (d: any) => {
    _onSubmit(d);
  };

  return (
    <UserPreferencesContext value={prefs}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(handleSave)}>{children}</form>
      </FormProvider>
    </UserPreferencesContext>
  );
}
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
function getNames(type: IngType) {
  const name = names[type];
  const promise = promises[type];
  return { name, promise };
}

const ingCBs: Record<IngType, (ing: any, setValue: any) => void> = {
  hop: (hop, setValue: UseFormSetValue<typeof hop>) => {
    console.log(hop);
    setValue("alpha.value", (hop?.alpha ?? 0.01) * 100);
  },
  fermentable: (ferm, setValue: UseFormSetValue<typeof ferm>) => {
    console.log(ferm);
    setValue("color.value", ferm?.color ?? 1);
    setValue("potential.value", ferm?.potential ?? 1);
  },
  yeast: (yeast, setValue: UseFormSetValue<typeof yeast>) => {
    console.log(yeast);
    setValue("attenuation.value", yeast?.attenuation ?? 1);
  },
};
export type SubstituteFormProps = {
  src?: any;
  type: IngType;
  index: number;
};
export default function SubstituteForm({
  src,
  type,
  index,
}: SubstituteFormProps) {
  const s = useContext(IngredientContext);
  const revisionContext = useContext(RevisionContext);

  const { name, promise } = getNames(type!);
  const { control, register, setValue } = useFormContext<typeof src>();
  const ingredients = use(s[promise] as any) as any[];
  const opts = ingredients.map((h) => ({ label: h.name, value: h.id }));
  const { fields, update, append } = useFieldArray({
    name,
    control,
    keyName: "_id",
  });
  const onChangeCb = (r: any) => {
    const ing = ingredients.find(({ id }) => id === r);
    console.log("OnChangeCB", r, ing);
    const cb = ingCBs[type!];
    if (ing) {
      cb(ing, setValue);
    }
    const old = fields[index];
    // const newValue = old.map((d: { id: any }, index: any) =>
    // d.id === tid ? data : d,

    // );
  };
  return (
    <div className="relative">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("index")} />
      <input type="hidden" {...register("recipeId")} />
      <ComboBoxField
        onChangeCallback={onChangeCb}
        orientation="responsive"
        name={`${type}Id`}
        label="Fermentable Variety"
        options={opts}
      />

      <div>
        <AmountField
          step="0.1"
          revisable={false}
          name="amount"
          label="Amount"
          amountType={`${type!}Mass`}
          // unit="Oz"
        />
      </div>
      <IconButton
        type="submit"
        icon={SaveIcon}
        label={index !== undefined ? "Update" : "Create"}
      />
    </div>
  );
}
