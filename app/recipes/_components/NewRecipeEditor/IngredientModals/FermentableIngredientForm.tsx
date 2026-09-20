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
import { FermentableIngredientMask } from "@/lib/Converter/Masks";
import {
  AdjustedFermentableIngredientType,
  BaseFermentableIngredientType,
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
import { FermentableIngredient } from "@/generated/prisma/client";
export function FermentableIngredientFormContainer<S = unknown>({
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
  src: Partial<BaseFermentableIngredientType>;
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
  //   actions: { addFermentableIngredient, updateFermentableIngredient },
  // });

  // const saveFermentableIngredient = (_data: any) => {
  //   // console.log(state);
  //   const data = f.getValues();
  //   const action = data.id
  //     ? actions.updateFermentableIngredient
  //     : actions.addFermentableIngredient;
  //   // console.log(data);
  //   action(data as any);
  //   d.handleOpenChange();
  // };
  const form = useForm<Partial<FermentableIngredient> & { index?: number }>({
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
    // index ? action(index, d) : action(d);
    // handleClose();
  };
  // console.log(state);
  return (
    <UserPreferencesContext value={prefs}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(handleSave)}>{children}</form>
      </FormProvider>
    </UserPreferencesContext>
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
  //     <form onSubmit={f.handleSubmit(saveFermentableIngredient)}>{children}</form>
  //   </FormProvider>
  // );

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
  // action,
  index,
}: {
  src?: Partial<AdjustedFermentableIngredientType>;
  // action: any;
  index?: number;
}) {
  const s = useContext(IngredientContext);
  // const { data } = useContext(FormStateContext);

  // console.log(src);
  const { register, setValue } = useFormContext();

  const fermentables = use(s.fermentablePromise);
  const opts = fermentables.map((h) => ({ label: h.name, value: h.id }));
  const onChangeCb = (r: any) => {
    console.log({ src, index, r });
    const h = fermentables.find(({ id }) => id === r);
    if (h) {
      console.log(h);
      setValue("color.value", (h?.color ?? 1.0) * 1);
    }
    // handleClose();
  };
  return (
    <div className="relative">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("index")} />
      <input type="hidden" {...register("recipeId")} />
      <ComboBoxField
        onChangeCallback={onChangeCb}
        orientation="responsive"
        name="fermentableId"
        label="Fermentable Variety"
        options={opts}
      />
      <div className="grid grid-cols-2 lg:grid-cols3 gap-1 border-b-2 mb-3">
        <AmountField
          step="0.1"
          revisable={false}
          name="amount"
          label="Amount"
          amountType="fermentableMass"
          // unit="Oz"
        />
        <SelectField
          defaultValue={$Enums.FermentableIngredientUsage.Mash}
          revisable={false}
          name="usage"
          options={$Enums.FermentableIngredientUsage}
          label="Usage"
        />
      </div>
      <Collapsible key="foo" className="w-full my-2 group border-2 p-2">
        <CollapsibleTrigger className="w-full flex">
          <div className="grow">Details</div>
          <ChevronLeft className="ml-auto transition-transform duration-200 data-open:-rotate-90 group-data-open:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent keepMounted>
          <div className="grid grid-cols-2 lg:grid-cols3 gap-1">
            <AmountField
              revisable={false}
              step="0.1"
              name="color"
              label="Color"
              amountType="color"
              unit={"L"}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <IconButton type="submit" icon={SaveIcon} label="Create" />
    </div>
  );
}
