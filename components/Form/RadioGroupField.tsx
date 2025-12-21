"use client";

import { ComponentProps, SyntheticEvent, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
//import { SchemaFieldError } from "@/lib/validateSchema";
//import { inputStyles } from "./Input";
import clsx from "clsx";
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
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "../ui/field";
import { Input, InputProps } from "./Input";
import { RevisionContext } from "@/contexts/RevisionContext";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export type RadioGroupItemProps = {
  id: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};
export type RadioGroupFieldProps<T extends FieldValues> = {
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
  options?: RadioGroupItemProps[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;

  //onChange?: (e: SyntheticEvent) => void;
  //onBlur?: (e: SyntheticEvent) => void;
  value?: any;
  ref?: any;
};
export function makeRadioOptions(enumObj: any): RadioGroupItemProps[] {
  return Object.keys(enumObj).map((key) => ({
    id: enumObj[key],
    title: key,
    description: "",
  }));
}
export function RadioGroupField<T extends FieldValues>({
  name,
  className,
  description,
  label,
  placeholder,
  options,
  value,
}: RadioGroupFieldProps<T>) {
  const { register, getFieldState, control } = useFormContext<T>();
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
  const id = `${name}-radiogroup`;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet>
          <FieldLegend>Plan</FieldLegend>
          <FieldDescription>
            You can upgrade or downgrade your plan at any time.
          </FieldDescription>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={onValueChange(field.onChange)}
          >
            {(options ?? []).map((opt) => (
              <FieldLabel key={opt.id} htmlFor={`${id}-${opt.id}`}>
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <FieldTitle>{opt.title}</FieldTitle>
                    <FieldDescription>{opt.description}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value={opt.id}
                    id={`${id}-${opt.id}`}
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </FieldSet>
      )}
    />
  );
}
