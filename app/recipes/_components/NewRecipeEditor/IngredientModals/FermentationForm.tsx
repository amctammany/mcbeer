import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import { SelectField } from "@/components/Form/SelectField";
import { Form } from "@/components/Form/Form";
import { FormStateContext } from "@/contexts/FormStateContext";
import { IngredientContext } from "@/contexts/IngredientContext";
import { MaskContext } from "@/contexts/MaskContext";
import { ModalContext, ModalStates } from "@/contexts/ModalContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/browser";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
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
import { FermentationProfile } from "@/generated/prisma/client";
export function FermentationFormContainer<S = unknown>({
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
  src?: Partial<FermentationProfileType>;
  toolbar?: React.ReactNode;
  modals?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode;
}) {
  const d = useContext(ModalContext);
  const prefs = useContext(UserPreferencesContext);
  const handleClose = d.handleOpenChange;

  const adjusted = adjustUnits({
    src: src!,
    mask: FermentationProfileMask,
    prefs,
    precision: 3,
    inline: false,
    dir: true,
  });
  const form = useForm<Partial<FermentationProfile>>({
    defaultValues: adjusted,
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
}
export default function FermentationProfileForm({
  src,
  profileId,
  // mode,
  // action,
  index,
}: {
  src?: Partial<AdjustedFermentationProfileType>;
  profileId?: string;
  // mode?: ModalStates;
  // action: any;
  index?: number;
}) {
  const s = useContext(IngredientContext);
  // const { data } = useContext(FormStateContext);

  // console.log(src);
  const { register, setValue } = useFormContext<FermentationProfile>();
  const fermentationProfiles = use(s.fermentationPromise);
  const prefs = useContext(UserPreferencesContext);

  const opts = fermentationProfiles.map((h) => ({
    label: h.name,
    value: h.id,
  }));
  const currentProfile = fermentationProfiles.find(
    ({ id }) => id === profileId,
  );
  const onChangeCb = (r: any) => {
    // console.log({ src, index, r });
    const profile = fermentationProfiles.find(({ id }) => id === r);
    if (profile?.steps) {
      const adjusted = adjustUnits({
        src: profile,
        mask: FermentationProfileMask,
        prefs,
        inline: false,
        dir: true,
        precision: 3,
      });
    }
    // handleClose();
  };
  return (
    <div className="relative">
      <input type="hidden" {...register("id")} />
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
              unit={"Lovibond"}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <IconButton
        type="submit"
        icon={SaveIcon}
        label={index !== undefined ? "Update" : "Create"}
      />
    </div>
  );
}
