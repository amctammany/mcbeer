"use client";
import AmountField from "@/components/Form/AmountField";
import Form from "@/components/Form/Form";
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
import { AdjustedHopType, HopType } from "@/types/Ingredient";
import { useActionState } from "react";
import { useFormContext } from "react-hook-form";

export type HopFormContainerProps<S = unknown> = {
  src: AdjustedHopType;
  preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function HopFormContainer({
  action,
  src,
  preferences,
  children,
}: HopFormContainerProps) {
  // const [state, formAction] = useActionState<any, FormData>(action, null);
  // const form = useForm({
  //   defaultValues: profile,
  //   errors: state?.errors,
  // });
  // const revision = useRevisionHistory<HopType>(
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
export type HopFormProps = {
  preferences: UserPreferencesType;
  src: AdjustedHopType;
};
export function HopForm({ preferences, src }: HopFormProps) {
  const { register, control } = useFormContext<HopType>();
  return (
    <div className="m-2 p-2 gap-2 *:mb-2">
      <Card className="m-4">
        <CardHeader className="border-b-4">
          <CardTitle>Hop Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <input type="hidden" {...register("id")} />
          <input type="hidden" {...register("userId")} />
          <TextField name="name" label="Name" />
          <TextField name="description" label="Description" />

          <TextField name="notes" label="Notes" control={control} />
          <div className="grid lg:grid-cols-2 gap-3 *:p-3 *:rounded *:ring-2 p-4 *:px-8">
            <div>
              <h4>Details</h4>

              <AmountField
                amountType="percent"
                name="alpha"
                step="0.1"
                type="percent"
                label="Alpha"
              />
              <AmountField
                amountType="percent"
                name="beta"
                step="0.1"
                type="percent"
                label="Beta"
              />
            </div>
            <div>
              <h4>Properties</h4>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
