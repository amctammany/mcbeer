"use client";
import AmountField from "@/components/Form/AmountField";
import HistoryForm from "@/components/Form/HistoryForm";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  type UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
export type EquipmentProfileFormContainerProps<S = unknown> = {
  profile: AdjustedEquipmentProfileType;
  preferences: UserPreferencesType;
  action: (state: S, formData: FormData) => Promise<S> | S;
  children?: React.ReactNode | React.ReactNode[];
};
export function EquipmentProfileFormContainer({
  action,
  profile,
  preferences,
  children,
}: EquipmentProfileFormContainerProps) {
  const [state, formAction] = useActionState<any, FormData>(action, null);
  const form = useForm({
    defaultValues: profile,
    errors: state?.errors,
  });
  const revision = useRevisionHistory<EquipmentProfileType>(
    form.getValues() as any,
    form.setValue as any
  );
  return (
    <HistoryForm
      formProps={form}
      historyProps={revision}
      preferences={preferences}
    >
      <form action={formAction}>{children}</form>
    </HistoryForm>
  );
}
export type EquipmentProfileFormProps = {
  preferences: UserPreferencesType;
};
export function EquipmentProfileForm({
  preferences,
}: EquipmentProfileFormProps) {
  const { register, control } = useFormContext<EquipmentProfileType>();
  const { handleRedo, handleUndo, updateHistory, canRedo, canUndo } =
    useContext(RevisionContext)!;
  return (
    <div className="m-2 rounded border-2 p-2 gap-2 *:mb-2">
      <Button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </Button>
      <Button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </Button>
      <input type="hidden" {...register("id")} />
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("forkedFrom")} />
      <TextField
        control={control}
        name="name"
        label="Name "
        // onBlur={updateHistory}
      />
      <TextField
        control={control}
        name="description"
        label="Description"
        // onBlur={updateHistory}
      />
      <div className="grid lg:grid-cols-3 gap-2">
        <Card className="grid">
          <CardHeader>
            <CardTitle>Volumes</CardTitle>
          </CardHeader>
          <CardContent>
            Fields
            <AmountField
              amountType="time"
              unit="min"
              name="boilTime"
              type="number"
              control={control}
              step={1}
              label="Boil Time "
            />
            <AmountField
              name="preboilVolume"
              type="number"
              amountType="volume"
              step={1}
              label="Preboil Volume"
            />
            <AmountField
              name="boilVolume"
              type="number"
              amountType="volume"
              step={1}
              label="Boil Volume"
            />
            <AmountField
              name="batchVolume"
              type="number"
              amountType="volume"
              step={1}
              label="Batch Volume"
            />
            <TextField
              register={register}
              name="boilOffRate"
              type="number"
              step={1}
              label="Boil Off Rate"
            />
            <AmountField
              amountType="volume"
              name="mashLoss"
              type="number"
              step={1}
              label="Mash Loss"
            />
            <AmountField
              amountType="volume"
              name="fermenterLoss"
              type="number"
              step={1}
              label="Fermenter Loss"
            />
            <AmountField
              amountType="volume"
              name="trubLoss"
              type="number"
              step={1}
              label="Trub Loss"
            />
          </CardContent>
        </Card>
        <Card className="grid">
          <CardHeader>
            <CardTitle>Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <AmountField
              amountType="percent"
              name="mashEfficiency"
              type="number"
              step={1}
              onBlur={updateHistory}
              label="Mash Efficiency "
            />
            <AmountField
              amountType="percent"
              name="brewEfficiency"
              type="number"
              step={1}
              label="Brew Efficiency "
              onBlur={updateHistory}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
