import { addHopIngredientToRecipe } from "@/app/recipes/actions";
import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import Form from "@/components/Form/Form";
import { SelectField } from "@/components/Form/SelectField";
import { FormStateContext } from "@/contexts/FormStateContext";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext } from "@/contexts/ModalContext";
import { $Enums } from "@/generated/prisma/browser";
import { HopIngredientMask } from "@/lib/Converter/Masks";
import { BaseHopIngredientType } from "@/types/Recipe";
import { SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
export function HopIngredientFormContainer({
  src,
  children,
}: {
  src: Partial<BaseHopIngredientType>;
  children: React.ReactNode;
}) {
  return (
    <MaskContext value={{ mask: HopIngredientMask }}>
      <Form src={src} action={addHopIngredientToRecipe}>
        {children}
      </Form>
    </MaskContext>
  );
}
/** <input type="hidden" name="id" value={currentIngredient?.id} />
      <input
        type="hidden"
        name="recipeId"
        value={currentIngredient?.recipeId}
      />}
      */
export default function HopIngredientForm() {
  const s = useContext(IngredientContext);
  const { data } = useContext(FormStateContext);
  const d = useContext(ModalContext);
  const handleClose = d.handleOpenChange;
  const hops = use(s.hopPromise);
  const opts = hops.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    console.log(r);
    handleClose();
  };
  console.log({ data });
  return (
    <div className="relative">
      <input type="hidden" name="recipeId" value={data?.recipeId} />
      <ComboBoxField
        onChangeCallback={onChangeCb}
        orientation="responsive"
        name="hopId"
        // className="col-span-2 lg:col-span-3"
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
