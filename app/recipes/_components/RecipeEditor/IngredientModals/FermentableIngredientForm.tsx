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
import { Form } from "@/components/ui/form";
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
  BaseFermentableIngredientType,
} from "@/types/Recipe";
import { useStateMachine } from "little-state-machine";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
export function FermentableIngredientFormContainer({
  src,
  children,
}: {
  src: Partial<BaseFermentableIngredientType>;
  children: React.ReactNode;
}) {
  const preferenceContext = useContext(UserPreferencesContext);
  const d = useContext(ModalContext);
  // console.log({ src, mask, preferenceContext });
  const { state, actions } = useStateMachine({
    actions: { addFermentableIngredient, updateFermentableIngredient },
  });

  console.log({
    src,
    mask: FermentableIngredientMask,
    state,
    preferenceContext,
  });
  const adjusted = adjustUnits({
    src,
    mask: FermentableIngredientMask,
    prefs: preferenceContext,
    inline: false,
    dir: false,
  });
  const f = useForm({
    defaultValues: adjusted,
  });

  const saveFermentableIngredient = (_data: any) => {
    // console.log(state);
    const data = f.getValues();
    const action = data.id
      ? actions.updateFermentableIngredient
      : actions.addFermentableIngredient;
    console.log(data);
    action(data as any);
    d.handleOpenChange();
    f.reset();
  };

  return (
    <FormProvider {...f}>
      <form onSubmit={f.handleSubmit(saveFermentableIngredient)}>
        {children}
      </form>
    </FormProvider>
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
  src: Partial<BaseFermentableIngredientType>;
}) {
  const s = useContext(IngredientContext);
  const { data } = useContext(FormStateContext);
  const { setValue } = useFormContext();
  // const handleClose = d.handleOpenChange;
  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    const h = fermentables.find(({ id }) => id === r);
    if (h) {
      console.log(h);
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
        <AmountField step="0.1" name="color" label="Color" unit="L" />
        <AmountField step="0.1" name="amount" label="Amount" unit="Oz" />
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
