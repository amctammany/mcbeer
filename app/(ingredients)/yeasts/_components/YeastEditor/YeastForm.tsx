"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboboxField } from "@/components/Form/ComboboxField";
import Form from "@/components/Form/Form";
import RangeField from "@/components/Form/RangeField";
import { SelectField } from "@/components/Form/SelectField";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { $Enums } from "@/generated/prisma/browser";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { YeastMask } from "@/lib/Converter/Masks";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import { useActionState, useContext } from "react";
import { useFormContext } from "react-hook-form";

export type YeastFormContainerProps<S = unknown> = {
  src: YeastType;
  // preferences?: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function YeastFormContainer({
  action,
  src,
  // preferences,
  children,
}: YeastFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<YeastType>(
  //   form.getValues() as any,
  //   form.setValue as any
  // );
  const prefs = useContext(UserPreferencesContext);
  const adjusted = adjustUnits({
    src,
    mask: YeastMask,
    prefs,
    inline: false,
    dir: true,
  });
  // const [state, formAction] = useActionState<any, FormData>(action, {
  // success: true,
  // data: adjusted,
  // errors: [],
  // });

  // console.log(state);
  return (
    <Form
      action={action}
      src={adjusted}
      // mask={YeastMask}
      // formProps={{
      //   values: state.data,
      //   mode: "onBlur",
      //   // defaultValues: adjusted,
      //   errors: state?.errors,
      // }}
    >
      {children}
    </Form>
  );
}
export type YeastFormProps = {
  preferences?: UserPreferencesType;
  src: YeastType;
  countries: string[];
};
export function YeastForm({ countries, preferences, src }: YeastFormProps) {
  const { register, control } = useFormContext<YeastType>();
  return (
    <div className="m-1 lg:m-2 lg:p-2 lg:gap-2 *:mb-2 *:px-2 grid lg:grid-cols-2">
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <TextField name="name" label="Name" />
      <TextField name="description" label="Description" />
      <SelectField
        control={control}
        label="Flocculation"
        name="flocculation"
        options={$Enums.YeastFlocculation}
      />
      <SelectField
        control={control}
        label="Type"
        name="type"
        options={$Enums.YeastType}
      />
      <SelectField
        control={control}
        label="Usage"
        name="usage"
        options={$Enums.YeastType}
      />
      <ComboboxField
        name="country"
        label="Country"
        options={countries.map((country) => ({
          value: country,
          label: country,
        }))}
      />
      <TextField name="notes" label="Notes" />

      <div className="*:mb-1 p-1 lg:*:p-2 *:border-b-2">
        <AmountField
          name="tolerance"
          type="number"
          label="Tolerance"
          amountType="percent"
          step="0.1"
        />
        <div className="lg:grid lg:grid-cols-4">
          <AmountField
            name="attenuation"
            type="number"
            label="Attenuation"
            amountType="percent"
            step="0.01"
          />
          <RangeField
            className="col-span-3 "
            name="attenuationRange"
            low="attenuationLow"
            high="attenuationHigh"
            label="Attenuation Range"
            min={0}
            max={100}
          />
        </div>

        <RangeField
          className=" "
          name="tempRange"
          low="tempLow"
          high="tempHigh"
          label="Temperature Range"
          min={0}
          max={212}
        />
      </div>
    </div>
  );
}
