import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { SelectField } from "@/components/Form/SelectField";
import { Form } from "@/components/Form/Form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext } from "@/contexts/ModalContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/browser";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { YeastIngredientMask } from "@/lib/Converter/Masks";
import {
  AdjustedYeastIngredientType,
  BaseYeastIngredientType,
} from "@/types/Recipe";
import { useStateMachine } from "little-state-machine";
import { ChevronLeft, SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import UserPreferencesProvider from "@/components/UserPreferencesProvider";
import { TextField } from "@/components/Form/TextField";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
export function YeastIngredientFormContainer<S = unknown>({
  src,
  action,
  toolbar,
  onSubmit: _onSubmit,
  modals,
  children,
  index,
}: {
  action: any;
  index?: number;
  onSubmit?: any;
  src: Partial<BaseYeastIngredientType>;
  toolbar?: React.ReactNode;
  modals?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode;
}) {
  const d = useContext(ModalContext);
  const prefs = useContext(UserPreferencesContext);
  const handleClose = d.handleOpenChange;

  // console.log(prefs);
  // console.log({ src, mask, preferenceContext });
  // const { state, actions } = useStateMachine({
  //   actions: { addYeastIngredient, updateYeastIngredient },
  // });

  // const saveYeastIngredient = (_data: any) => {
  //   // console.log(state);
  //   const data = f.getValues();
  //   const action = data.id
  //     ? actions.updateYeastIngredient
  //     : actions.addYeastIngredient;
  //   // console.log(data);
  //   action(data as any);
  //   d.handleOpenChange();
  // };
  const form = useForm({
    defaultValues: src,
  });
  const { setValue, getValues, handleSubmit, register } = form;
  // const formProps = { values: state.recipe || {} };
  const onSubmit = (e: any) => {
    _onSubmit(e);
    console.log(e);
    d.handleDialogOpen()();
  };
  const handleSave = (d: any) => {
    // console.log(d);
    // console.log(action);
    _onSubmit(d);
    index ? action(index, d) : action(d);
    // handleClose();
  };
  // console.log(state);
  return (
    <MaskContext value={{ mask: YeastIngredientMask }}>
      <UserPreferencesContext value={prefs}>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(handleSave)}>{children}</form>
        </FormProvider>
      </UserPreferencesContext>
    </MaskContext>
  );
  /**
   * 
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
   */
  // return (
  //   <FormProvider {...f}>
  //     <form onSubmit={f.handleSubmit(saveYeastIngredient)}>{children}</form>
  //   </FormProvider>
  // );

  // <Form src={src} action={addYeastIngredientToRecipe}>
  // </Form>
}
/** <input type="hidden" name="id" value={currentIngredient?.id} />
      <input
        type="hidden"
        name="recipeId"
        value={currentIngredient?.recipeId}
      />}
      */
export default function YeastIngredientForm({
  src,
  // action,
  index,
}: {
  src: Partial<AdjustedYeastIngredientType>;
  // action: any;
  index?: number;
}) {
  const s = useContext(IngredientContext);
  // const { data } = useContext(FormStateContext);

  // console.log(src);
  const { register, setValue } = useFormContext();

  const yeasts = use(s.yeastPromise);
  const opts = yeasts.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    const h = yeasts.find(({ id }) => id === r);
    if (h) {
      console.log(h);
      setValue("attenuation.value", (h?.attenuation ?? 0.8) * 100);
    }
    // handleClose();
  };
  return (
    <div className="relative">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("recipeId")} />
      <ComboBoxField
        onChangeCallback={onChangeCb}
        orientation="responsive"
        name="yeastId"
        label="Yeast Variety"
        options={opts}
      />
      <div className="grid grid-cols-2 lg:grid-cols3 gap-1 border-b-2 mb-3">
        <AmountField
          step="0.1"
          revisable={false}
          name="amount"
          label="Amount"
          amountType="yeastMass"
          unit={src.amount?.unit ?? "Oz"}
          // unit="Oz"
        />
        <AmountField
          step="0.01"
          revisable={false}
          name="attenuation"
          label="Attenuation"
          amountType="percent"
          unit={src.attenuation?.unit ?? "percent"}
          // amountType="percent"
          // unit="%"
          // unit="Oz"
        />
        <b>{JSON.stringify(src.attenuation)}</b>
      </div>
      <Collapsible key="foo" className="w-full my-2 group border-2 p-2">
        <CollapsibleTrigger className="w-full flex">
          <div className="grow">Details</div>
          <ChevronLeft className="ml-auto transition-transform duration-200 data-open:-rotate-90 group-data-open:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="grid grid-cols-2 lg:grid-cols3 gap-1"></div>
        </CollapsibleContent>
      </Collapsible>
      <IconButton type="submit" icon={SaveIcon} label="Create" />
    </div>
  );
}
