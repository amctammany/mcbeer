"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboboxField } from "@/components/Form/ComboboxField";
import Form from "@/components/Form/Form";
import RangeField from "@/components/Form/RangeField";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import { useActionState } from "react";
import { useFormContext } from "react-hook-form";

export type YeastFormContainerProps<S = unknown> = {
  src: AdjustedYeastType;
  preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function YeastFormContainer({
  action,
  src,
  preferences,
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
  const [state, formAction] = useActionState<any, FormData>(action, null);

  return (
    <Form
      action={formAction}
      preferences={preferences}
      formProps={{ defaultValues: src, errors: state?.errors }}
    >
      {children}
    </Form>
  );
}
export type YeastFormProps = {
  preferences: UserPreferencesType;
  src: AdjustedYeastType;
  countries: string[];
};
export function YeastForm({ countries, preferences, src }: YeastFormProps) {
  const { register, control } = useFormContext<YeastType>();
  return (
    <div className="m-1 lg:m-2 lg:p-2 lg:gap-2 *:mb-2 grid lg:grid-cols-2">
      <Card className="lg:m-4">
        <CardHeader className="border-b-4">
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent className="p-1 lg:*:p-2 *:py-1">
          <input type="hidden" {...register("id")} />
          <input type="hidden" {...register("userId")} />
          <TextField name="name" label="Name" />
          <TextField name="description" label="Description" />
          <ComboboxField
            name="country"
            label="Country"
            options={countries.map((country) => ({
              value: country,
              label: country,
            }))}
          />
          <TextField name="notes" label="Notes" />
        </CardContent>
      </Card>
      <Card className="lg:m-4">
        <CardHeader className="border-b-4">
          <CardTitle>Characteristics</CardTitle>
        </CardHeader>

        <CardContent className="*:mb-1 p-1 lg:*:p-2 *:border-b-2">
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
          <div className="lg:grid lg:grid-cols-4">
            <AmountField
              name="temperature"
              type="number"
              label="Temperature"
              amountType="temperature"
              step="0.1"
            />
            <RangeField
              className="col-span-3 "
              name="tempRange"
              low="tempLow"
              high="tempHigh"
              label="Temperature Range"
              min={0}
              max={212}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
