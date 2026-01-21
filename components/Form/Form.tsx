"use client";
import { FormStateContext } from "@/contexts/FormStateContext";
import { MaskContext } from "@/contexts/MaskContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/client";
import useRevisionHistory from "@/hooks/useRevisionHistory";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { UnitTypeDict } from "@/lib/Converter/UnitDict";
import { State } from "@/lib/validateSchema";
import { ExtendedUser } from "@/types/User";
import React, { startTransition, useActionState, useContext } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";

export type FormProps<T extends FieldValues> = {
  action: any;
  src: T;
  // mask?: any;
  // preferences: UserPreferencesType;
  formProps?: UseFormProps;
  children?: React.ReactNode | React.ReactNode[];
};
export default function Form<T extends FieldValues>({
  // preferences,
  action,
  src,
  // mask = {},
  formProps,
  children,
}: FormProps<T>) {
  const { mask } = useContext(MaskContext);
  const preferenceContext = useContext(UserPreferencesContext);
  const adjusted = adjustUnits({
    src,
    mask,
    prefs: preferenceContext,
    inline: false,
    dir: true,
  });

  const [_state, formAction] = useActionState<State<T>, FormData>(action, {
    success: true,
    data: adjusted,
    // errors: [],
  });
  // const [state, setState] = React.useState(_state);

  const form = useForm({
    // reValidateMode: "onBlur",
    // mode: "onTouched",
    // resetOptions: {
    //   keepDefaultValues: true,
    //   keepDirtyValues: true,
    //   keepValues: true,
    // },
    values: _state.data,
    defaultValues: _state.data as any,
    errors: _state.errors,

    // ...formProps,
  });
  const revision = useRevisionHistory<ExtendedUser>(
    form.getValues() as any,
    form.setValue as any,
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Wrap the async operation in startTransition
    // console.log(Promise.resolve(action(data)));
    startTransition(async () => {
      // Perform your non-urgent updates here, e.g., API call or server action
      console.log("Submitting data:", _state, data);
      const r = await formAction(data);
      // setState(r);
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async call
      console.log("Submission complete", r);
    });
  };
  // const onSubmit = startTransition(() => form.handleSubmit(action));
  return (
    <FormProvider {...form}>
      {/* <UserPreferencesContext value={preferences}> */}
      <FormStateContext value={_state}>
        <RevisionContext value={revision}>
          <form action={formAction}>{children}</form>
        </RevisionContext>
      </FormStateContext>
      {/* </UserPreferencesContext> */}
    </FormProvider>
  );
}
