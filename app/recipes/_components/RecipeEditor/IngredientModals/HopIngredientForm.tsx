import { addHopIngredientToRecipe } from "@/app/recipes/actions";
import {
  addHopIngredient,
  updateHopIngredient,
} from "@/app/recipes/stateActions";
import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { SelectField } from "@/components/Form/SelectField";
import { Form } from "@/components/ui/form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext } from "@/contexts/ModalContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/browser";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { HopIngredientMask } from "@/lib/Converter/Masks";
import {
  AdjustedHopIngredientType,
  BaseHopIngredientType,
} from "@/types/Recipe";
import { useStateMachine } from "little-state-machine";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
export function HopIngredientFormContainer({
  src,
  children,
}: {
  src: Partial<BaseHopIngredientType>;
  children: React.ReactNode;
}) {
  const preferenceContext = useContext(UserPreferencesContext);
  const d = useContext(ModalContext);
  // console.log({ src, mask, preferenceContext });
  const { state, actions } = useStateMachine({
    actions: { addHopIngredient, updateHopIngredient },
  });

  console.log({ src, mask: HopIngredientMask, state, preferenceContext });
  const adjusted = adjustUnits({
    src,
    mask: HopIngredientMask,
    prefs: preferenceContext,
    inline: false,
    dir: false,
  });
  const f = useForm({
    defaultValues: adjusted,
  });

  const saveHopIngredient = (_data: any) => {
    // console.log(state);
    const data = f.getValues();
    const action = data.id
      ? actions.updateHopIngredient
      : actions.addHopIngredient;
    // console.log(data);
    action(data as any);
    d.handleOpenChange();
    f.reset();
  };

  return (
    <FormProvider {...f}>
      <form onSubmit={f.handleSubmit(saveHopIngredient)}>{children}</form>
    </FormProvider>
  );

  // <Form src={src} action={addHopIngredientToRecipe}>
  // </Form>
}
/** <input type="hidden" name="id" value={currentIngredient?.id} />
      <input
        type="hidden"
        name="recipeId"
        value={currentIngredient?.recipeId}
      />}
      */
export default function HopIngredientForm({
  src,
}: {
  src: Partial<BaseHopIngredientType>;
}) {
  const s = useContext(IngredientContext);
  const { data } = useContext(FormStateContext);
  const { setValue } = useFormContext();
  // const handleClose = d.handleOpenChange;
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    const h = hops.find(({ id }) => id === r);
    if (h) {
      console.log(h);
      setValue("alpha.value", h?.alpha ?? 1 * 100);
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
        name="hopId"
        label="Hop Variety"
        options={opts}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
        <AmountField step="0.1" name="alpha" label="Alpha" unit="percent" />
        <AmountField step="0.1" name="amount" label="Amount" unit="Oz" />
        <SelectField
          defaultValue={$Enums.HopIngredientUsage.Boil}
          name="usage"
          options={$Enums.HopIngredientUsage}
          label="Usage"
        />
        <AmountField
          // type="number"
          step="0.1"
          unit="min"
          name="duration"
          label="Duration"
        />
      </div>
      <IconButton type="submit" icon={SaveIcon} label="Create" />
    </div>
  );
}
