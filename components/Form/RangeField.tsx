import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import React, { ComponentProps, useContext } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import {
  FieldGroup,
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "../ui/input-group";
import { Slider } from "../ui/slider";

export type RangeFieldProps<T extends FieldValues> = {
  className?: string;
  control?: Control<T>;
  type?: any;
  name: FieldPath<T>;
  low: FieldPath<T>;
  high: FieldPath<T>;
  min?: number;
  max?: number;
  unit?: string | React.ReactNode;
  label?: string | React.ReactNode;
  placeholder?: string;
  orientation?: "responsive" | "horizontal" | "vertical";
  description?: string;
} & ComponentProps<"input">;

export default function RangeField<T extends FieldValues>({
  className,
  orientation = "responsive",
  control,
  type,
  name,
  low,
  high,
  min = 0,
  max = 100,
  unit,
  label,
  placeholder,
  description,
  value,
}: RangeFieldProps<T>) {
  const id = `${name}-range-field`;
  const preferenceContext = useContext(UserPreferencesContext);
  const { register } = useFormContext();
  const revisionContext = useContext(RevisionContext);
  const onValueChange = (cb: (newValue: any) => void) => (newValue: any) => {
    revisionContext?.update({
      type: "SET",
      payload: {
        name,
        prev: value,
        value: newValue,
      },
    });
    // console.log({ name, value, newValue });
    cb(newValue);
  };

  return (
    <FieldGroup className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field orientation="vertical" data-invalid={!!fieldState.error}>
            <FieldContent className="grow grid grid-cols-2 w-full gap-2 ">
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <FieldDescription className="text-right">
                {field.value[0]}-{field.value[1]}
              </FieldDescription>
            </FieldContent>
            <input type="hidden" name={low} value={field.value[0]} />
            <input type="hidden" name={high} value={field.value[1]} />

            <Slider
              className="grow m-2 h-12 my-auto border-black"
              min={min}
              max={max}
              value={field.value}
              ref={field.ref}
              onValueChange={(v) => {
                field.onChange(v);
                revisionContext?.update({
                  type: "SET",
                  payload: { name, value: v, prev: field.value },
                });
              }}
            />

            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
}
