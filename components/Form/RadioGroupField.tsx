"use client";

import { ComponentProps, SyntheticEvent, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
//import { SchemaFieldError } from "@/lib/validateSchema";
//import { inputStyles } from "./Input";
import clsx from "clsx";
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
import { Label } from "../ui/label";

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
        prev: value,
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
        <div className="flex *:first:grow">
          <Label className="lock text-left">{label}</Label>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={onValueChange(field.onChange)}
            className={clsx(
              "flex gap-0 *:not-last:border-r-4 border-black rounded-lg border-2",
              className
            )}
          >
            <Field
              orientation="horizontal"
              data-invalid={fieldState.invalid}
              className="flex items-center gap-1 *:first:rounded-l-md *:last:rounded-r-md"
            >
              {(options ?? []).map((opt) => (
                <label
                  key={opt.id}
                  htmlFor={`${id}-${opt.id}`}
                  className="px-4 py-2 cursor-pointer has-checked:bg-blue-500 has-checked:text-white"
                >
                  <RadioGroupItem
                    value={opt.id}
                    id={`${id}-${opt.id}`}
                    aria-invalid={fieldState.invalid}
                    className="hidden peer"
                  />
                  {opt.title}
                </label>
              ))}
            </Field>
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </div>
      )}
    />
  );
}
