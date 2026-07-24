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
import { AdjustedRecipeType } from "@/types/Recipe";
import { ExtendedUser } from "@/types/User";
import React, { startTransition, useActionState, useContext } from "react";
import {
  FieldValues,
  FormProvider,
  FormSubmitHandler,
  SubmitHandler,
  useForm,
  type UseFormProps,
} from "react-hook-form";

export type FormProps<T extends FieldValues> = {
  action: any;
  src: T;
  decorator?: (data: FormData) => FormData;
  // mask?: any;
  // preferences: UserPreferencesType;
  clientCb?: any;
  submitCb?: any; //SubmitHandler<FormData>;
  formProps?: UseFormProps;
  modals?: React.ReactNode | React.ReactNode[];
  toolbar?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
};
export function Form<T extends FieldValues>({
  // preferences,
  action,
  clientCb,
  toolbar,
  modals,
  src,
  submitCb,
  // mask = {},
  decorator,
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
    dir: false,
  });
  console.log({ src, mask, adjusted, preferenceContext });

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

    ...formProps,
  });
  const newFormAction = (payload: FormData) =>
    decorator ? formAction(decorator(payload)) : formAction(payload);
  const revision = useRevisionHistory<ExtendedUser>(
    form.getValues() as any,
    form.setValue as any,
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Wrap the async operation in startTransition
    // console.log(Promise.resolve(action(data)));
    startTransition(() => {
      // Perform your non-urgent updates here, e.g., API call or server action
      console.log("Submitting data:", _state, data);
      // const r = newFormAction(data);
      // setState(r);
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async call
      const clientRes = clientCb?.(data);
      const submitRes = submitCb?.(data);
      console.log("Submission complete", { clientRes, submitRes });
    });
  };
  const handleSubmit: any = (e: any) => {
    console.log(e);
    // const clientRes = clientCb?.(d);
    // const submitRes = submitCb?.(d);
    // console.log("handleSubmit", { d, clientRes, submitRes });
  };
  // const onSubmit = startTransition(() => form.handleSubmit(action));
  return (
    <FormProvider {...form}>
      {/* <UserPreferencesContext value={preferences}> */}
      <FormStateContext value={_state}>
        <RevisionContext value={revision}>
          <form action={newFormAction} onSubmit={form.handleSubmit(onSubmit)}>
            {toolbar}
            {children}
          </form>
          {modals}
        </RevisionContext>
      </FormStateContext>
      {/* </UserPreferencesContext> */}
    </FormProvider>
  );
}

export default Form;
