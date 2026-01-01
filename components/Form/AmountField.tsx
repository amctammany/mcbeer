"use client";
import React, { useContext } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { cva, VariantProps } from "class-variance-authority";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
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
  InputGroupText,
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
  const { register } = useFormContext();
  const unitName = preferenceContext?.preferences?.[amountType];
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
    // console.log({ name, value, newValue });
    cb(newValue);
  };

  return (
    <FieldGroup>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={!!fieldState.error}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldContent className="grid w-full gap-2 ">
              <InputGroup className="gap-2" aria-invalid={!!fieldState.error}>
                <InputGroupInput
                  id={id}
                  type="number"
                  value={field.value}
                  name={field.name}
                  onChange={(e) =>
                    onValueChange(field.onChange)(parseFloat(e.target.value))
                  }
                  onBlur={field.onBlur}
                />

                <InputGroupAddon
                  aria-invalid={!!fieldState.error}
                  className=""
                  align="inline-end"
                >
                  <InputGroupText aria-invalid={!!fieldState.error}>
                    {unitName}
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FieldContent>
            <FieldDescription>{description}</FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
}

export default AmountField;
