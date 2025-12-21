"use client";
/**import HistoryForm from "@/components/Form/HistoryForm";
import RadioGroupInput from "@/components/Form/RadioGroupInput";
import SelectInput from "@/components/Form/SelectInput";
import TextInput from "@/components/Form/TextInput";
*/
import { Button } from "@/components/ui/button";
import { Form } from "react-hook-form";
import { RevisionContext } from "@/contexts/RevisionContext";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { get } from "@/lib/utils";

import {
  UserGravityPreference,
  User,
  UserPreferences,
  UserPressurePreference,
  UserTemperaturePreference,
  UserMassPreference,
  MassSystem,
  UserColorPreference,
  UserVolumePreference,
} from "@/generated/prisma/client";
import React, { useActionState, useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import HistoryForm from "@/components/Form/HistoryForm";
import { TextField } from "@/components/Form/TextField";

export type SettingsFormContainerProps<S = unknown> = {
  user: User;
  action: (state: S, formData: FormData) => S | Promise<S>;
  children: React.ReactNode;
};
export function SettingsContainerForm({
  user,
  action,
  children,
}: SettingsFormContainerProps) {
  const [state, formAction] = useActionState<any, FormData>(action, null);
  const form = useForm<UserType>({
    defaultValues: user,
    errors: state?.errors,
  });
  const revision = useRevisionHistory<UserType>(
    form.getValues() as any,
    form.setValue as any
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
  user: User;
  //  action: (formData: FormData) => Promise<void>;
};
export type UserType = User & { UserPreferences: UserPreferences };
export function SettingsForm({ user }: SettingsFormProps) {
  const { register, control, getValues, formState } =
    useFormContext<UserType>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  return (
    <div className="grid grid-cols-2 ">
      <div className="*:py-1">
        <Button onClick={handleUndo} disabled={!canUndo}>
          Undo
        </Button>
        <Button onClick={handleRedo} disabled={!canRedo}>
          Redo
        </Button>
        <input type="hidden" {...register("id")} />
        <input type="hidden" {...register("UserPreferences.id")} />
        <input type="hidden" {...register("UserPreferences.userId")} />
        <TextField label="Name" {...register("name")} />
        <TextField label="Username" {...register("username")} />
        <TextField label="Email" {...register("email")} />
      </div>

      <Button type="submit">Save</Button>
    </div>
  );
}
