"use client";

import { ComponentProps, SyntheticEvent, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
//import { SchemaFieldError } from "@/lib/validateSchema";
//import { inputStyles } from "./Input";
import clsx from "clsx";
import {
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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

export type SelectFieldProps<T extends FieldValues> = {
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
  options?: Record<string | number, string | number>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;

  //onChange?: (e: SyntheticEvent) => void;
  //onBlur?: (e: SyntheticEvent) => void;
  value?: any;
  ref?: any;
};
export function SelectField<T extends FieldValues>({
  name,
  className
  description,
  label,
  placeholder,
  options,
  value,
}: SelectFieldProps<T>) {
  const { register, getFieldState, control } = useFormContext<T>();
  const id = `${name}-select`;
  const revisionContext = useContext(RevisionContext);
  const onValueChange = (cb: (newValue: any) => void) => (newValue: any) => {
    revisionContext?.update({
      type: "SET",
      payload: {
        name,
        prev: getFieldState(name),
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
        <Field orientation="responsive" data-invalid={fieldState.invalid}>
          <FieldContent>
            <FieldLabel htmlFor={id}>{label ?? ""}</FieldLabel>
            <FieldDescription>{description ?? ""}</FieldDescription>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
          <Select
            name={field.name}
            value={field.value}
            onValueChange={onValueChange(field.onChange)}
          >
            <SelectTrigger
              id={id}
              aria-invalid={fieldState.invalid}
              aria-label={field.value}
              className={clsx("min-w-30", className)}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="item-aligned">
              {Object.entries(options ?? {}).map(([key, value]) => (
                <SelectItem key={key} value={value as any}>
                  <div className="grow text-center">{value as any}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      )}
    />
  );
}
