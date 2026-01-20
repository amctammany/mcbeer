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
  BASE_UNITS,
  PercentUnits,
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
import { MaskContext } from "@/contexts/MaskContext";
import { convertUnit, isUnitValue } from "@/lib/Converter/adjustUnits";
import { getInMask } from "@/lib/Converter/Masks";
export type AmountFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof amountFieldStyles> & {
    amountType?: UnitTypes;
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
  },
);

export function AmountField<T extends FieldValues>({
  name,
  label,
  error,
  amountType,
  unit: _unit,
  description,
  className,
  orientation = "responsive",
  placeholder,
  control,
  value: val,
  ...props
}: AmountFieldProps<T>) {
  const id = `${name}-field`;
  // const { mask } = useContext(MaskContext);
  // const preferenceContext = useContext(UserPreferencesContext);
  const { register, getFieldState, formState, getValues } = useFormContext();
  // const mn = mask[(name ?? "") as keyof typeof mask] as any;
  // const mn = getInMask(mask, name);
  // const maskV = Array.isArray(mn) ? mn[0] : mn;
  // const s = preferenceContext?.[maskV as keyof typeof preferenceContext];

  // const unitN = _unit ?? (amountType ? preferenceContext?.[amountType!] : "");
  // const unit = _unit ?? s ?? BASE_UNITS[maskV as UnitTypes];
  const unitName = isUnitValue(val)
    ? val.unit
    : amountType === "percent"
      ? PercentUnits[amountType]
      : BASE_UNITS[amountType!];
  const value = typeof val === "number" ? val : val?.value;
  // console.log({ val, value, unitName });
  // console.log({ maskV, value, unit, s, unitName });
  // const convert = (v: number, dir = true) =>
  //   convertUnit({
  //     value: v,
  //     type: maskV,
  //     unit,
  //     inline: true,
  //     dir,
  //   }.);
  /**const options = (UnitTypeDict[amountType] ?? []).reduce((acc, unit) => {
    acc[unit] = unit;
    return acc;
  }, {} as Record<UnitNames, UnitNames>);
  */
  console.log(formState);
  const revisionContext = useContext(RevisionContext);
  const { ...inputProps } = register(`${name}.value`, {
    valueAsNumber: true,
  });
  const onValueChange: (o: any) => React.ChangeEventHandler<HTMLInputElement> =
    (old) => (e) => {
      const newValue = parseFloat(e.target.value);
      if (old !== newValue)
        revisionContext?.update({
          type: "SET",
          payload: {
            name: `${name}.value`,
            prev: old,
            value: newValue,
          },
        });
      // cb(e);
      // const converted = convert(newValue, false);
      // console.log({ name, value, newValue, converted });
    };
  const fieldState = getFieldState(name);
  // console.log(fieldState);

  return (
    <Field
      className="bg-white px-3 py-2 my-2 rounded-md"
      orientation={orientation}
      data-invalid={!!fieldState.error}
    >
      <FieldContent className="grow grid w-full gap-2 ">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
      </FieldContent>

      <InputGroup
        className="gap-2 w-full grow"
        // aria-invalid={!!fieldState.error}
      >
        <input type="hidden" value={unitName} name={`${name}.unit`} />

        <InputGroupInput
          className="text-center grow"
          id={id}
          type="number"
          {...inputProps}
          // ref={field.ref}
          // name={`${field.name}.value`}
          // name={field.name}
          // value={field.value}
          step={props.step ?? 0.1}
          defaultValue={formState.defaultValues?.[name]?.value}
          onBlur={onValueChange(getValues(`${name}.value`))}
          // onBlur={field.onBlur}
        />

        <InputGroupAddon
          aria-invalid={!!fieldState.error}
          className="w-4"
          align="inline-end"
        >
          <InputGroupText>{unitName}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>{fieldState.error?.message}</FieldError>
    </Field>
  );
  /**
  return (
    <FieldGroup>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field
            className="bg-white px-3 py-2 my-2 rounded-md"
            orientation={orientation}
            data-invalid={!!fieldState.error}
          >
            <FieldContent className="grow grid w-full gap-2 ">
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <FieldDescription>{description}</FieldDescription>
            </FieldContent>

            <InputGroup
              className="gap-2 w-full grow"
              aria-invalid={!!fieldState.error}
            >
              <input
                type="hidden"
                value={unitName}
                name={`${field.name}.unit`}
              />

              <InputGroupInput
                className="text-center grow"
                id={id}
                type="number"
                ref={field.ref}
                name={`${field.name}.value`}
                // name={field.name}
                value={field.value}
                step={props.step ?? 0.1}
                onChange={(e) =>
                  onValueChange(field.onChange)(parseFloat(e.target.value))
                }
                onBlur={field.onBlur}
              />

              <InputGroupAddon
                aria-invalid={!!fieldState.error}
                className="w-4"
                align="inline-end"
              >
                <InputGroupText aria-invalid={!!fieldState.error}>
                  {unitName}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
 */
}

export default AmountField;
