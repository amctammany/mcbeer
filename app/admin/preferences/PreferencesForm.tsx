"use client";
import React, { useActionState } from "react";
import Form from "@/components/Form/Form";
import AmountField from "@/components/Form/AmountField";
import { TextField } from "@/components/Form/TextField";
import { Input } from "@/components/Form/Input";
import { SelectField } from "@/components/Form/SelectField";
import {
  MassSystem,
  UserColorPreference,
  UserGravityPreference,
  UserPressurePreference,
  UserTemperaturePreference,
  UserVolumePreference,
} from "@/generated/prisma/browser";
import {
  makeRadioOptions,
  RadioGroupField,
} from "@/components/Form/RadioGroupField";

export type PreferencesInput = {
  name: string;
  size: number;
};
export default function PreferencesForm({
  src,
  action,
  children,
  prefs,
}: {
  src: any;
  prefs: any;
  action: any;
  children: React.ReactNode | React.ReactNode[];
}) {
  const [state, formAction] = useActionState<any, FormData>(action, null);
  return (
    <div>
      <Form
        action={formAction}
        preferences={prefs}
        formProps={{ defaultValues: src, errors: state?.errors }}
      >
        {children}
        <Input type="hidden" name="id" />
        <Input type="hidden" name="UserPreferences.id" />
        <Input type="hidden" name="UserPreferences.userId" />
        <TextField name="name" label="Name" />
        <TextField name="username" label="Username" />
        <TextField name="email" label="Email" />
        <div className="*:py-1">
          <SelectField
            name="UserPreferences.massSystem"
            options={MassSystem}
            label="Mass System"
          />
          <RadioGroupField
            label="Color"
            name="UserPreferences.color"
            options={makeRadioOptions(UserColorPreference)}
          />
          <RadioGroupField
            label="Termperature"
            name="UserPreferences.temperature"
            options={makeRadioOptions(UserTemperaturePreference)}
          />
          <RadioGroupField
            label="Pressure"
            name="UserPreferences.pressure"
            options={makeRadioOptions(UserPressurePreference)}
          />
          <RadioGroupField
            label="Volume"
            name="UserPreferences.volume"
            options={makeRadioOptions(UserVolumePreference)}
          />
          <RadioGroupField
            label="Gravity"
            name="UserPreferences.gravity"
            options={makeRadioOptions(UserGravityPreference)}
          />
        </div>
      </Form>
    </div>
  );
}
