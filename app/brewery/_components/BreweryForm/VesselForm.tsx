"use client";
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
import { VesselMask } from "@/lib/Converter/Masks";
import { AdjustedVesselType, BaseVesselType } from "@/types/Brewery";
import { ChevronLeft, SaveIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { TextField } from "@/components/Form/TextField";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
export function VesselFormContainer<S = unknown>({
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
  src: Partial<BaseVesselType>;
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
  //   actions: { addVessel, updateVessel },
  // });

  // const saveVessel = (_data: any) => {
  //   // console.log(state);
  //   const data = f.getValues();
  //   const action = data.id
  //     ? actions.updateVessel
  //     : actions.addVessel;
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
  //     <form onSubmit={f.handleSubmit(saveVessel)}>{children}</form>
  //   </FormProvider>
  // );

  // <Form src={src} action={addVesselToRecipe}>
  // </Form>
}
/** <input type="hidden" name="id" value={currentIngredient?.id} />
      <input
        type="hidden"
        name="recipeId"
        value={currentIngredient?.recipeId}
      />}
      */
export default function VesselForm({
  src,
  // action,
  index,
}: {
  src?: Partial<AdjustedVesselType>;
  // action: any;
  index?: number;
}) {
  // const { data } = useContext(FormStateContext);

  // console.log(src);
  const { register, setValue } = useFormContext();

  return (
    <div className="relative">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("breweryId")} />

      <div className="grid grid-cols-2 lg:grid-cols3 gap-1 border-b-2 mb-3">
        <TextField label="Name" name="name" />
        <AmountField
          step="0.1"
          revisable={false}
          name="volume"
          label="Volume"
          amountType="volume"
          // unit="Oz"
        />
        <SelectField
          defaultValue={$Enums.VesselType.Fermenter}
          revisable={true}
          name="type"
          options={$Enums.VesselType}
          label="type"
        />
      </div>
      <Collapsible key="foo" className="w-full my-2 group border-2 p-2">
        <CollapsibleTrigger className="w-full flex">
          <div className="grow">Details</div>
          <ChevronLeft className="ml-auto transition-transform duration-200 data-open:-rotate-90 group-data-open:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent keepMounted>
          <div className="grid grid-cols-2 lg:grid-cols3 gap-1">Details?</div>
        </CollapsibleContent>
      </Collapsible>
      <IconButton type="submit" icon={SaveIcon} label="Create" />
    </div>
  );
}
