// import { addFermentableIngredientToRecipe } from "@/app/recipes/actions";
import {
  addFermentableIngredient,
  updateFermentableIngredient,
} from "@/app/recipes/stateActions";
import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { Input } from "@/components/Form/Input";
import { SelectField } from "@/components/Form/SelectField";
import { TextField } from "@/components/Form/TextField";
import { Form } from "@/components/Form/Form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext } from "@/contexts/ModalContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/browser";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { FermentableIngredientMask } from "@/lib/Converter/Masks";
import {
  AdjustedFermentableIngredientType,
  AdjustedHopIngredientType,
  BaseFermentableIngredientType,
} from "@/types/Recipe";
import { useStateMachine } from "little-state-machine";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
export function FermentableIngredientFormContainer<S = unknown>({
  onSubmit: _onSubmit,
  action,
  src,
  toolbar,
  modals,
  children,
}: {
  action: (state: S, formData: FormData) => Promise<S> | S;
  toolbar?: React.ReactNode;
  modals?: React.ReactNode | React.ReactNode[];
  onSubmit?: any;
  // onSubmit?: (data: Partial<BaseFermentableIngredientType>) => void;
  src: Partial<AdjustedFermentableIngredientType>;
  children: React.ReactNode;
}) {
  const preferenceContext = useContext(UserPreferencesContext);
  console.log({ preferenceContext });
  const d = useContext(ModalContext);
  // console.log({ src, mask, preferenceContext });

  // console.log({
  //   src,
  //   mask: FermentableIngredientMask,
  //   state,
  //   preferenceContext,
  // });
  // const adjusted = adjustUnits({
  //   src,
  //   mask: FermentableIngredientMask,
  //   prefs: preferenceContext,
  //   inline: false,
  //   dir: false,
  // });
  // const f = useForm({
  //   defaultValues: adjusted,
  // });

  // const saveFermentableIngredient = (_data: any) => {
  //   const data = f.getValues();
  //   // console.log(state, onSubmit, data);
  //   const action = data.id
  //     ? actions.updateFermentableIngredient
  //     : actions.addFermentableIngredient;

  //   // console.log(data);
  //   onSubmit?.(data);
  //   action(data as any);
  //   d.handleOpenChange();
  //   f.reset();
  // };
  const onSubmit = (data: any) => {
    console.log(data);
    _onSubmit(data);
    d.handleDialogOpen()();
  };
  // console.log(state);
  return (
    <Form
      action={action}
      // decorator={decorator}
      submitCb={onSubmit}
      modals={modals}
      toolbar={toolbar}
      src={src}
      // formProps={formProps}
    >
      {children}
    </Form>
  );

  // <Form src={src} action={addFermentableIngredientToRecipe}>
  // </Form>
}
/** <input type="hidden" name="id" value={currentIngredient?.id} />
      <input
        type="hidden"
        name="recipeId"
        value={currentIngredient?.recipeId}
      />}
      */
export default function FermentableIngredientForm({
  src,
}: {
  src: Partial<AdjustedFermentableIngredientType>;
}) {
  const s = useContext(IngredientContext);
  const prefs = useContext(UserPreferencesContext);
  console.log({ prefs });
  const { data } = useContext(FormStateContext);
  const { setValue } = useFormContext();
  // const handleClose = d.handleOpenChange;
  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    const h = fermentables.find(({ id }) => id === r);
    if (h) {
      console.log("hi", h);
      setValue("potential.value", (h?.potential ?? 0.01) * 100);
    }
    // handleClose();
  };

  return (
    <div className="relative">
      <input type="hidden" name="id" value={data?.id} />
      <input type="hidden" name="recipeId" value={data?.recipeId} />
      <ComboBoxField
        onChangeCallback={onChangeCb}
        orientation="responsive"
        name="fermentableId"
        label="Fermentable Variety"
        options={opts}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
        <AmountField
          step="0.1"
          name="color"
          label="Color"
          amountType="color"
          unit={"L"}
        />
        <AmountField
          step="0.1"
          name="amount"
          label="Amount"
          amountType="mass"
          unit="Lb"
        />
        <TextField
          type="number"
          step="0.1"
          name="potential"
          label="Potential"
        />
        <SelectField
          defaultValue={$Enums.FermentableIngredientUsage.Mash}
          name="usage"
          options={$Enums.FermentableIngredientUsage}
          label="Usage"
        />
      </div>
      <IconButton type="submit" icon={SaveIcon} label="Create" />
    </div>
  );
}
