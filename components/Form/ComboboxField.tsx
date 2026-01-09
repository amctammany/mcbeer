"use client";

import { ComponentProps, SyntheticEvent, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
//import { SchemaFieldError } from "@/lib/validateSchema";
//import { inputStyles } from "./Input";
import clsx from "clsx";
import { Combobox } from "@/components/Form/Combobox";
import { Label } from "./Label";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
} from "../ui/field";
import { Input, InputProps } from "./Input";
import { RevisionContext } from "@/contexts/RevisionContext";

export type ComboboxFieldProps<T extends FieldValues> = {
  register?: UseFormRegister<T>;
  className?: string;
  control?: Control<T>;
  name: FieldPath<T>;
  description?: string | React.ReactNode;
  label?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  defaultValue?: any;
  disabled?: boolean;
  error?: string | React.ReactNode;
  placeholder?: string | React.ReactNode;
  includeBlank?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  options?: any; //Record<string | number, string | number>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  orientation?: "responsive" | "horizontal" | "vertical";

  //onChange?: (e: SyntheticEvent) => void;
  //onBlur?: (e: SyntheticEvent) => void;
  value?: any;
  ref?: any;
};
export function ComboboxField<T extends FieldValues>({
  name,
  className,
  description,
  label,
  placeholder,
  options,
  orientation = "responsive",
  value,
}: ComboboxFieldProps<T>) {
  const { register, getFieldState, control } = useFormContext<T>();
  const id = `${name}-combobox`;
  const revisionContext = useContext(RevisionContext);
  const onValueChange = (cb: (newValue: any) => void) => (newValue: any) => {
    console.log("Value changed:", newValue);
    revisionContext?.update({
      type: "SET",
      payload: {
        name,
        prev: value,
        value: newValue,
      },
    });
    cb(newValue);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="w-full max-w-d">
          <Field orientation={orientation} data-invalid={fieldState.invalid}>
            <FieldContent className="relative">
              <FieldLabel htmlFor={id}>{label ?? ""}</FieldLabel>
              <FieldDescription>{description ?? ""}</FieldDescription>
            </FieldContent>
            <input type="hidden" {...field} />
            <Combobox
              name={field.name}
              value={field.value}
              onChange={onValueChange(field.onChange)}
              options={options}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        </div>
      )}
    />
  );
}
