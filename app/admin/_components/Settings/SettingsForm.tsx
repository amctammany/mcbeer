"use client";
/**import HistoryForm from "@/components/Form/HistoryForm";
import RadioGroupInput from "@/components/Form/RadioGroupInput";
import SelectInput from "@/components/Form/SelectInput";
import TextInput from "@/components/Form/TextInput";
*/
import { Button } from "@/components/ui/button";
import { Controller, Form } from "react-hook-form";
// import { RevisionContext } from "@/contexts/RevisionContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
//  import { get } from "@/lib/utils";

import type { User, UserPreferences } from "@/generated/prisma/client";
import {
  UserGravityPreference,
  UserPressurePreference,
  UserTemperaturePreference,
  UserMassPreference,
  MassSystem,
  UserColorPreference,
  UserVolumePreference,
  UserRoles,
  PercentUnit,
} from "@/generated/prisma/enums";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import HistoryForm from "@/components/Form/HistoryForm";
import { TextField } from "@/components/Form/TextField";
import { SelectField } from "@/components/Form/SelectField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  makeRadioOptions,
  RadioGroupField,
} from "@/components/Form/RadioGroupField";
import { ExtendedUser } from "@/types/User";

export type SettingsFormContainerProps<S = unknown> = {
  user: ExtendedUser;
  action: (state: S, formData: FormData) => S | Promise<S>;
  children: React.ReactNode;
};
export function SettingsContainerForm({
  user,
  action,
  children,
}: SettingsFormContainerProps) {
  const [state, formAction] = useActionState<any, FormData>(action, null);
  const form = useForm<ExtendedUser>({
    defaultValues: user,
    errors: state?.errors,
  });
  const revision = useRevisionHistory<ExtendedUser>(
    form.getValues(),
    form.setValue
  );

  return (
    <HistoryForm formProps={form} historyProps={revision}>
      <form
        action={formAction}
        //        onSubmit={form.handleSubmit(handleAction)}
      >
        {children}
      </form>
    </HistoryForm>
  );
}

export type SettingsFormProps = {
  user: ExtendedUser;
  //  action: (formData: FormData) => Promise<void>;
};
export function SettingsForm({ user }: SettingsFormProps) {
  const { register, control, getValues, formState } =
    useFormContext<ExtendedUser>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;

  return (
    <div className="grid grid-cols-2 *:p-4 *:border-2 *:m-4">
      <div className="*:py-1">
        <input type="hidden" {...register("id")} />
        <input type="hidden" {...register("UserPreferences.id")} />
        <input type="hidden" {...register("UserPreferences.userId")} />
        <TextField name="name" label="Name" register={register} />
        <TextField name="username" label="Username" register={register} />
        <TextField name="email" label="Email" register={register} />
        <RadioGroupField
          control={control}
          label="Role"
          name="role"
          options={makeRadioOptions(UserRoles)}
        />
      </div>

      <div className="*:py-1">
        <SelectField
          name="UserPreferences.massSystem"
          control={control}
          options={MassSystem}
          label="Mass System"
        />
        <RadioGroupField
          control={control}
          label="Color"
          name="UserPreferences.color"
          options={makeRadioOptions(UserColorPreference)}
        />
        <RadioGroupField
          control={control}
          label="Percent"
          name="UserPreferences.percent"
          options={makeRadioOptions(PercentUnit)}
        />
        <RadioGroupField
          control={control}
          label="Termperature"
          name="UserPreferences.temperature"
          options={makeRadioOptions(UserTemperaturePreference)}
        />
        <RadioGroupField
          control={control}
          label="Pressure"
          name="UserPreferences.pressure"
          options={makeRadioOptions(UserPressurePreference)}
        />
        <RadioGroupField
          control={control}
          label="Volume"
          name="UserPreferences.volume"
          options={makeRadioOptions(UserVolumePreference)}
        />
        <RadioGroupField
          control={control}
          label="Gravity"
          name="UserPreferences.gravity"
          options={makeRadioOptions(UserGravityPreference)}
        />
      </div>
    </div>
  );
}
