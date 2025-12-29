"use client";
import React, { useContext } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { cva, VariantProps } from "class-variance-authority";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import {
  UNITS,
  UnitTypeDict,
  type UnitNames,
  type UnitTypes,
} from "@/lib/Converter/UnitDict";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MoreHorizontal } from "lucide-react";
import { SelectField } from "./SelectField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RevisionContext } from "@/contexts/RevisionContext";
import clsx from "clsx";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
export type AmountFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof amountFieldStyles> & {
    amountType: UnitTypes;
    unit?: UnitNames;
    min?: number;
    max?: number;
  };
const amountFieldStyles = cva(
  "disabled:bg-slate-50 disabled:shadow-none disabled:text-slate-500 disabled:border-slate-200 bg-white",
  {
    variants: {
      variant: {
        error: [],
        default: [],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function AmountField<T extends FieldValues>({
  name,
  label,
  error,
  amountType,
  unit,
  description,
  className,
  placeholder,
  control,
  value,
  ...props
}: AmountFieldProps<T>) {
  const id = `${name}-field`;
  const preferenceContext = useContext(UserPreferencesContext);
  console.log(preferenceContext?.units);
  const options = (UnitTypeDict[amountType] ?? []).reduce((acc, unit) => {
    acc[unit] = unit;
    return acc;
  }, {} as Record<UnitNames, UnitNames>);
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

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <div className="grid w-full gap-2 max-w-sm">
            <InputGroup className="gap-2">
              <InputGroupInput id={id} name={`${name}.value`} {...props} />
              <InputGroupAddon className="" align="inline-end">
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={onValueChange(field.onChange)}
                >
                  <SelectTrigger
                    id={id}
                    className="border-none outline-0"
                    aria-invalid={fieldState.invalid}
                    aria-label={field.value}
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
              </InputGroupAddon>
            </InputGroup>
          </div>
          <FieldDescription>{description}</FieldDescription>
          <FieldError>{error}</FieldError>
        </Field>
      )}
    />
  );
}

export default AmountField;
